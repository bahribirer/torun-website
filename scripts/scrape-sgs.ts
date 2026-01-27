import axios from "axios";
import * as cheerio from "cheerio";
import fs from "fs-extra";
import fetch from "node-fetch";
import path from "path";

const URL = "https://www.sgstools.com.tr/urunler/";
const IMAGE_DIR = "./public/products/sgs";
const OUTPUT_TS = "./src/data/sgsProducts.ts";

await fs.ensureDir(IMAGE_DIR);

async function scrape() {
  const { data } = await axios.get(URL, {
    headers: { "User-Agent": "Mozilla/5.0" },
  });

  const $ = cheerio.load(data);
  const products: any[] = [];

  const productLinks = $(".woocommerce-loop-product__link").toArray();
  console.log(`🔍 Total products found: ${productLinks.length}`);

  for (const el of productLinks) {
    const productUrl = $(el).attr("href");
    const name = $(el).find(".woocommerce-loop-product__title").text().trim();
    const imgUrl = $(el).find("img").attr("src");

    if (!name || !imgUrl || !productUrl) continue;

    console.log(`📦 Scraping: ${name}`);

    // SGS ID yakala
    const match = name.match(/SGS\s?(\d+)/i);
    const id = match ? Number(match[1]) : Math.floor(Math.random() * 100000);
    const fileName = `sgs${id}.jpg`;
    const filePath = path.join(IMAGE_DIR, fileName);

    // Resmi indir (mevcutsa atla)
    if (!(await fs.pathExists(filePath))) {
      try {
        const res = await fetch(imgUrl);
        const buffer = await res.arrayBuffer();
        await fs.writeFile(filePath, Buffer.from(buffer));
      } catch (e) {
        console.error(`❌ Image skip: ${name}`);
      }
    }

    // Detay sayfasını gez
    let description = "";
    let features: string[] = [];
    let specs: Record<string, string> = {};

    try {
      const detailRes = await axios.get(productUrl, { headers: { "User-Agent": "Mozilla/5.0" } });
      const $$ = cheerio.load(detailRes.data);

      description = $$(".woocommerce-product-details__short-description").text().trim();

      // Özellikler listesini ara (genelde ul ifadelidir)
      $$(".woocommerce-tabs #tab-description ul li").each((_, li) => {
        features.push($$(li).text().trim());
      });

      // Teknik tabloyu çek
      $$(".woocommerce-tabs #tab-description table tr").each((_, tr) => {
        const key = $$(tr).find("td").first().text().trim();
        const val = $$(tr).find("td").last().text().trim();
        if (key && val && key !== val) {
          specs[key] = val;
        }
      });
    } catch (e) {
      console.error(`❌ Detail skip: ${name}`);
    }

    products.push({
      id,
      name,
      image: `/products/sgs/${fileName}`,
      description,
      features: features.length > 0 ? features : undefined,
      specs: Object.keys(specs).length > 0 ? specs : undefined
    });

    // Polite delay
    await new Promise(r => setTimeout(r, 500));
  }

  // TS dosyası üret
  const tsContent = `
import type { ProductItem } from "./productCatalog";

export const sgsProducts: ProductItem[] = ${JSON.stringify(products, null, 2)};
`;

  await fs.writeFile(OUTPUT_TS, tsContent, "utf-8");

  console.log("✅ SGS scrape tamamlandı");
  console.log(`📦 Ürün sayısı: ${products.length}`);
}

scrape();
