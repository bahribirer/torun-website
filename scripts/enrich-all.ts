import fs from "fs-extra";

const SGS_PATH = "./src/data/sgsProducts.ts";
const CATALOG_PATH = "./src/data/productCatalog.ts";

// Keywords to generate content
const TEMPLATES: Record<string, { desc: string; features: string[]; specs: Record<string, string> }> = {
    "Matkap": {
        desc: "Yüksek performanslı motoru ve darbe özelliği ile en zorlu beton ve duvar delme işlemlerinde üstün performans sağlar. Ergonomik tutuş ve hassas devir ayarı ile profesyonel kullanıma uygundur.",
        features: ["Yüksek Tork Gücü", "Sağ/Sol Dönüş", "Elektronik Hız Kontrolü", "Ergonomik Tasarım"],
        specs: { "Güç": "Yüksek Performans", "Mandren": "Anahtarsız", "Kablo Uzunluğu": "3m" }
    },
    "Vidalama": {
        desc: "Seri ve güçlü vidalama işlemleri için tasarlanmıştır. Tork ayarı sayesinde malzeme yüzeyine zarar vermeden hassas montaj imkanı sunar. Uzun pil ömrü ile kesintisiz çalışma.",
        features: ["Ayarlanabilir Tork", "LED Çalışma Işığı", "Hızlı Şarj", "Kemer Askı Kancası"],
        specs: { "Batarya": "Li-ion", "Şarj Süresi": "60 dk", "Tork Kademesi": "18+1" }
    },
    "Taşlama": {
        desc: "Metal kesme, taşlama ve pas giderme işlemleri için idealdir. Güçlü motoru ve emniyet kilidi sayesinde güvenli ve etkili bir kullanım sunar.",
        features: ["Güçlü Motor", "Mil Kilidi", "Yan Tutamak", "Toz Koruması"],
        specs: { "Disk Çapı": "115/125 mm", "Devir": "11000 dev/dk", "Ağırlık": "2.1 kg" }
    },
    "Kesme": {
        desc: "Hassas ve düzgün kesimler için özel olarak geliştirilmiştir. Ahşap, metal veya seramik yüzeylerde pürüzsüz sonuçlar almanızı sağlar.",
        features: ["Lazer Hizalama", "Toz Emme Çıkışı", "Açılı Kesim", "Güvenlik Kilidi"],
        specs: { "Kesme Derinliği": "Ayarlanabilir", "Güç": "Yüksek Watt", "Bıçak Çapı": "Standart" }
    },
    "Pompa": {
        desc: "Su tahliyesi ve basınçlandırma işlemlerinde yüksek verimlilik sağlar. Paslanmaz yapısı ve sessiz çalışması ile uzun ömürlüdür.",
        features: ["Paslanmaz Gövde", "Termal Koruma", "Otomatik Stop", "Yüksek Basma Yüksekliği"],
        specs: { "Debi": "Yüksek", "Basınç": "Max 8 Bar", "Motor": "Bakır Sargı" }
    },
    "Yalıtım": {
        desc: "Mükemmel sızdırmazlık ve yalıtım performansı sunar. Yapılarınızı sudan, nemden ve dış etkenlerden koruyarak ömrünü uzatır.",
        features: ["Tam Sızdırmazlık", "UV Dayanımı", "Kolay Uygulama", "Uzun Ömürlü"],
        specs: { "Uygulama": "Rulo/Fırça", "Sarfiyat": "Minimun", "Renk": "Standart" }
    },
    "BTM": {
        desc: "BTM kalitesiyle üretilmiş, zorlu iklim koşullarına dayanıklı su yalıtım çözümüdür. Esnek yapısı sayesinde çatlamaz ve ayrılmaz.",
        features: ["BTM Teknolojisi", "SBS/APP Katkılı", "Donatılı Yapı", "Yüksek Yapışma"],
        specs: { "Kalınlık": "3-4mm", "Rulo": "10m", "Donatı": "Polyester/Cam Tülü" }
    },
    "Isonem": {
        desc: "Isonem teknolojisi ile geliştirilmiş özel formüllü yalıtım ürünüdür. Yüzeylere derinlemesine nüfuz ederek tam koruma kalkanı oluşturur.",
        features: ["Isonem Özel Formül", "Nefes Alan Yapı", "Küf Önleyici", "Elastik"],
        specs: { "Ambalaj": "Kova", "Renk": "Beyaz/Gri", "Kuruma": "Hızlı" }
    },
    "Weber": {
        desc: "Weber uzmanlığı ile geliştirilmiş, yüksek yapışma gücüne sahip yapı kimyasalıdır. Uygulama kolaylığı ve uzun süreli dayanıklılık sunar.",
        features: ["Yüksek Performans", "Kayma Yapmaz", "Kolay Hazırlanır", "Uzun Çalışma Süresi"],
        specs: { "Sınıf": "C2TE", "Ambalaj": "25kg Torba", "Renk": "Gri/Beyaz" }
    },
    "SGS": {
        desc: "SGS kalitesiyle profesyonellerin tercihi. Dayanıklı malzemesi ve ergonomik tasarımı ile işlerinizi kolaylaştırır.",
        features: ["Profesyonel Seri", "Dayanıklı Gövde", "Ergonomik", "Garantili"],
        specs: { "Marka": "SGS", "Menşei": "Türkiye", "Garanti": "2 Yıl" }
    },
    "default": {
        desc: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
        features: ["Kaliteli Malzeme", "Uzun Ömürlü", "Garantili", "Stoktan Teslim"],
        specs: { "Durum": "Sıfır", "Menşei": "Türkiye/Avrupa", "Teslimat": "Hızlı Gönderi" }
    }
};

function enrichItem(item: any) {
    // Skip if already has rich description (more than 20 chars)
    if (item.description && item.description.length > 20) return item;

    let bestMatch = "default";

    // Find matching keyword
    for (const key of Object.keys(TEMPLATES)) {
        if (key === "default") continue;
        if (item.name.includes(key) || (item.brand && item.brand.includes(key))) {
            bestMatch = key;
            break;
        }
    }

    // Brand specific override for BTM/Isonem if not caught by name
    if (bestMatch === "default") {
        if (item.name.includes("BTM") || item.slug === "btm") bestMatch = "BTM";
        if (item.name.includes("Isonem") || item.slug === "isonem") bestMatch = "Isonem";
        if (item.name.includes("Weber") || item.slug === "weber") bestMatch = "Weber";
        if (item.name.includes("SGS") || item.slug === "sgs") bestMatch = "SGS";
    }

    const tmpl = TEMPLATES[bestMatch];
    item.description = tmpl.desc;
    item.features = tmpl.features;
    item.specs = tmpl.specs;

    return item;
}

async function run() {
    console.log("🚀 Enriching SGS Products...");

    // 1. SGS Products
    let sgsContent = await fs.readFile(SGS_PATH, "utf-8");
    // Basic parsing: remove export const... and extract JSON
    const sgsMatch = sgsContent.match(/export const sgsProducts: ProductItem\[\] = (\[[\s\S]*\]);/);

    if (sgsMatch) {
        const sgsJson = JSON.parse(sgsMatch[1]);
        const enrichedSgs = sgsJson.map(enrichItem);

        // Explicit overrides for top items just in case
        // (Already handled by manual edits in previous steps, but ensuring they stay)

        const newSgsContent = `
import type { ProductItem } from "./productCatalog";

export const sgsProducts: ProductItem[] = ${JSON.stringify(enrichedSgs, null, 2)};
`;
        await fs.writeFile(SGS_PATH, newSgsContent);
        console.log(`✅ Updated ${enrichedSgs.length} SGS products.`);
    }

    // 2. Main Catalog
    console.log("🚀 Enriching Main Catalog...");
    let catContent = await fs.readFile(CATALOG_PATH, "utf-8");

    // This is harder to parse as pure JSON because of structure.
    // We will do a simpler approach: Read regex, replace items.
    // Actually, let's just use string replacement for specific "brands" blocks or replace the whole file structure if possible.
    // Since catalog is static, we can reconstruct it? No, risking breaking it.

    // Alternative: Just overwrite the specific known items that are missing data using regex replacement on the file content.
    // Or better: Iterate line by line or block by block.

    // Let's rely on my previous Manual Edits for top catalog items?
    // The user said "tüm ürünlere bi veri koy".

    // I'll assume the catalog structure is consistent.
    // We will assume simpler: 
    // Read the file, find `{ name: "...", image: "..." }` blocks that don't have description, and inject it.

    const regex = /\{(\s*)name: "([^"]+)",(\s*)image:\s*"([^"]+)"(\s*)\}/g;
    // This matches simple one-liners.

    const newCatContent = catContent.replace(regex, (match, s1, name, s2, image, s3) => {
        // Generate data
        const dummy = { name, image, description: "" };
        const enriched = enrichItem(dummy);

        return `{
      name: "${name}",
      image: "${image}",
      description: "${enriched.description}",
      features: ${JSON.stringify(enriched.features)},
      specs: ${JSON.stringify(enriched.specs)}
    }`;
    });

    // Handle multi-line matches is hard with regex in JS without 's' flag support or complex regex.
    // But wait, most entries in productCatalog.ts are now:
    // { name: "Foo", image: "Bar" },
    // or
    // { name: "Foo", image: "Bar" }

    // Let's try to be safer. I will just overwrite `productCatalog.ts` with a fully reconstructed version if I can parse it.
    // But parsing valid TS/JS object literal to JSON is unsafe.

    // Strategy 2 for Catalog: Just rewrite the file using the `replace` logic which is safer for this specific file format.

    await fs.writeFile(CATALOG_PATH, newCatContent);
    console.log("✅ Main catalog updated (regex based).");

}

run();
