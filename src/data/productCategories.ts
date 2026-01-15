


export type ProductCategory = {
  title: string;
  slug: string;
  desc: string;
  image?: string; // opsiyonel
};

export const productCategories: ProductCategory[] = [
  {
    title: "Su Yalıtım Ürünleri",
    slug: "su-yalitim-urunleri",
    desc: "Zemin, temel, teras ve ıslak hacimler için çözümler.",
    image: "/assets/images/categories/su.png"

  },
  {
    title: "Çatı Kaplamaları",
    slug: "cati-kaplamalari",
    desc: "Dayanıklı ve uzun ömürlü çatı sistemleri.",
    image: "/assets/images/categories/cati.png"

  },
  {
    title: "Isı Yalıtımı",
    slug: "isi-yalitimi",
    desc: "Enerji verimliliği sağlayan yalıtım ürünleri.",
    image: "/assets/images/categories/isi.png"
  },
  {
    title: "Hırdavat Ürünleri",
    slug: "hirdavat-urunleri",
    desc: "SGS, vida grubu ve uygulama ekipmanları.",
    image: "/assets/images/categories/hir.png"
  },
  {
    title: "Yapı Kimyasalları",
    slug: "yapi-kimyasallari",
    desc: "Weber, Isonem ve profesyonel çözümler.",
    image: "/assets/images/categories/yapi.png"
  },
  {
    title: "İnşaat Malzemeleri",
    slug: "insaat-malzemeleri",
    desc: "Şantiye ve yapı uygulamaları için ürünler.",
    image: "/assets/images/categories/ins.png"
  },
  {
    title: "Alçıpan Grupları",
    slug: "alcipan-gruplari",
    desc: "Alçıpan, profil ve tamamlayıcı sistemler.",
    image: "/assets/images/categories/alc.png"
  },
];
