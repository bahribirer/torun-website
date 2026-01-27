import fs from "fs-extra";
import path from "path";
import { productCatalog } from "../src/data/productCatalog.js";
import { sgsProducts } from "../src/data/sgsProducts.js";

const BASE_URL = "https://www.xn--trnyap-u9a.com";
const OUTPUT_PATH = "./public/sitemap.xml";

async function generateSitemap() {
    const pages = [
        { url: "/", priority: "1.0" },
        { url: "/corporate", priority: "0.8" },
        { url: "/products", priority: "0.9" },
        { url: "/solutions", priority: "0.8" },
        { url: "/contact", priority: "0.8" },
    ];

    // Add Product Category Pages
    productCatalog.forEach(cat => {
        pages.push({ url: `/products/${cat.categorySlug}`, priority: "0.8" });

        // Add Direct Products
        if (cat.directProducts) {
            cat.directProducts.forEach(p => {
                pages.push({ url: `/products/${cat.categorySlug}/${encodeURIComponent(p.name)}`, priority: "0.7" });
            });
        }

        // Add Brand Products
        if (cat.brands) {
            cat.brands.forEach(brand => {
                brand.products.forEach(p => {
                    pages.push({ url: `/products/${cat.categorySlug}/${encodeURIComponent(p.name)}`, priority: "0.7" });
                });
            });
        }
    });

    // Since we also have sgsProducts.ts which might be linked differently or part of catalog
    // In our case, sgsProducts are part of the 'sgs-el-aletleri' category in catalog
    // So they are already handled if category is in catalog

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
            .map(
                page => `  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <priority>${page.priority}</priority>
    <changefreq>weekly</changefreq>
  </url>`
            )
            .join("\n")}
</urlset>`;

    await fs.writeFile(OUTPUT_PATH, sitemap, "utf-8");
    console.log(`✅ Sitemap generated at ${OUTPUT_PATH} with ${pages.length} URLs.`);
}

generateSitemap();
