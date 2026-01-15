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

  for (const el of $(".woocommerce-loop-product__link").toArray()) {
    const name = $(el)
      .find(".woocommerce-loop-product__title")
      .text()
      .trim();

    const imgUrl = $(el).find("img").attr("src");

    if (!name || !imgUrl) continue;

    // SGS ID yakala
    const match = name.match(/SGS\s?(\d+)/i);
    if (!match) continue;

    const id = Number(match[1]);
    const fileName = `sgs${id}.jpg`;
    const filePath = path.join(IMAGE_DIR, fileName);

    // resmi indir
    if (!(await fs.pathExists(filePath))) {
      const res = await fetch(imgUrl);
      const buffer = await res.arrayBuffer();
      await fs.writeFile(filePath, Buffer.from(buffer));
    }

    products.push({
      id,
      name,
      image: `/products/sgs/${fileName}`,
    });
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
