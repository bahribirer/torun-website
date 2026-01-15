import { sgsProducts } from "./sgsProducts";


export type ProductItem = {
  id?: number; 
  name: string;
  image?: string;
};

export type BrandProducts = {
  brand: string;
  slug: string;
  products: ProductItem[];
};

export type CategoryCatalog = {
  categorySlug: string;
  brands?: BrandProducts[];        // opsiyonel
  directProducts?: ProductItem[];  // 👈 MARKASIZ
};


export const productCatalog: CategoryCatalog[] = [
  // --- SU YALITIMI (aynı kalıyor) ---
  {
    categorySlug: "su-yalitim-urunleri",
    brands: [
      {
        brand: "BTM",
        slug: "btm",
        products: [
          { name: "Bituproof Y Yatay",image: "/assets/images/btm/1.png", },
          { name: "Bituproof Y Plus",image: "/assets/images/btm/1.png" },
          { name: "Bituproof D Düşey",image: "/assets/images/btm/2.png" },
          { name: "Bituproof Protector",image: "/assets/images/btm/2.png" },
          { name: "Plastobit",image: "/assets/images/btm/3.png" },
          { name: "Polibit",image: "/assets/images/btm/4.png" },
          { name: "Bitüself",image: "/assets/images/btm/5.png" },
          { name: "Çatı Tutucu",image: "/assets/images/btm/6.png"},
          { name: "Su Tutucu",image: "/assets/images/btm/7.png" },
          { name: "BT2K 500",image: "/assets/images/btm/8.png" },
          { name: "BT2K 600",image: "/assets/images/btm/9.png" },
          { name: "ELASTASOL 100",image: "/assets/images/btm/10.png" },
          { name: "BTM Drenaj",image: "/assets/images/btm/11.png" },
          { name: "BTM Keçe",image: "/assets/images/btm/12.png" },
        ],
      },
      {
        brand: "Isonem",
        slug: "isonem",
        products: [
          { name: "SB",image: "/assets/images/isonem/23.png"},
          { name: "Polya",image: "/assets/images/isonem/24.png" },
          { name: "MS Polimer",image: "/assets/images/isonem/25.png" },
        ],
      },
      {
        brand: "Heller",
        slug: "heller",
        products: [
          { name: "Helltech Floor WP 800 UV",image: "/assets/images/heller/hel1.png"},
          { name: "Helltech Floor WP 810 BİTÜM",image: "/assets/images/heller/hel2.png" },
          { name: "Helltech Floor WP 820 2K BITUM",image: "/assets/images/heller/hel3.png" },
          { name: "Helltech Floor WP 830 COLD",image: "/assets/images/heller/hel4.png" },
          { name: "Helltech Floor WP 840 2K ENJ",image: "/assets/images/heller/hel5.png" },
          { name: "Helltech Floor WP EP 850 ",image: "/assets/images/heller/hel6.png" },
          { name: "Helltech Floor WP 860 WP",image: "/assets/images/heller/hel7.png" },
          { name: "Helltech Floor WP 870 WP HP",image: "/assets/images/heller/hel8.png" },

        ],
      },
    ],
  },

  // --- İNŞAAT MALZEMELERİ ---
  {
    categorySlug: "insaat-malzemeleri",
    directProducts: [
      { name: "İnşaat Çivisi",image:"/assets/images/insaat/35.png" },
      { name: "Bağ Teli",image:"/assets/images/insaat/36.png" },
      { name: "Kalıp Kilidi (Çiroz)",image:"/assets/images/insaat/37.png" },
      { name: "Çiroz Makinası",image:"/assets/images/insaat/38.png" },
      { name: "İskele Kelepçesi",image:"/assets/images/insaat/39.png" },
      { name: "Yelek",image:"/assets/images/insaat/40.png" },
      { name: "İş Ayakkabısı",image:"/assets/images/insaat/41.png" },
      { name: "Patpat Naylon",image:"/assets/images/insaat/42.png" },
      { name: "Naylon Branda",image:"/assets/images/insaat/43.png"},
      { name: "Yaparlar Marka El Arabası",image:"/assets/images/insaat/44.png" },
      { name: "İnşaat Kürek & Kazma",image:"/assets/images/insaat/45.png" },
    ],
  },
  {
    categorySlug: "alcipan-gruplari",
    directProducts: [
      { name: "Duvar U Profili",image: "/assets/images/alcipan/46.png"  },
      { name: "Duvar C Profili",image: "/assets/images/alcipan/47.png" },
      { name: "Tavan U Profili",image: "/assets/images/alcipan/48.png" },
      { name: "Tavan C Profili",image: "/assets/images/alcipan/49.png" },
      { name: "Köşe Profili (Galvaniz)",image: "/assets/images/alcipan/50.png" },
      { name: "Boardex",image: "/assets/images/alcipan/51.png" },
    ],
  },
  {
  categorySlug: "cati-kaplamalari",
  brands: [
    {
      brand: "BTM",
      slug: "btm",
      products: [
        { name: "BTM Shingle Dragon",image: "/assets/images/btm/13.png" },
        { name: "BTM Shingle Yonca",image: "/assets/images/btm/14.png"},
        { name: "Corrubit (Kırmızı)",image: "/assets/images/btm/15.png"},
        { name: "Shingle Alt Örtü",image: "/assets/images/btm/16.png"},
        { name: "Shingle Çivisi",image: "/assets/images/btm/17.png" },
        { name: "OSB 15 mm",image: "/assets/images/btm/18.png"  },
        { name: "OSB 11 mm",image: "/assets/images/btm/19.png"  },
      ],
    },
  ],
},
{
  categorySlug: "isi-yalitimi",
  brands: [
    {
      brand: "BTM",
      slug: "btm",
      products: [
        { name: "BTM POLPAN N",image: "/assets/images/btm/20.png" },
        { name: "BTM POLPAN P",image: "/assets/images/btm/21.png" },
        { name: "BTM POLPAN PK",image: "/assets/images/btm/22.png"},
      ],
    },
    {
      brand: "Weber",
      slug: "weber",
      products: [
        { name: "Isı Yalıtım Yapıştırıcı",image: "/assets/images/weber/26.png" },
        { name: "Isı Yalıtım Sıvası",image: "/assets/images/weber/27.png" },
      ],
    },
  ],
},

{
  categorySlug: "yapi-kimyasallari",
  brands: [
    {
      brand: "Isonem",
      slug: "isonem",
      products: [
        { name: "Ses Yalıtım Boyası",image: "/assets/images/isonem/28.png" },
        { name: "Nem Boyası",image: "/assets/images/isonem/29.png"},
        { name: "Isı Yalıtım Boyası",image: "/assets/images/isonem/30.png" },
      ],
    },
    {
      brand: "Weber",
      slug: "weber",
      products: [
        { name: "Tamir Harcı",image: "/assets/images/weber/31.png" },
        { name: "Seramik Yapıştırıcı",image: "/assets/images/weber/32.png" },
        { name: "Granit Yapıştırıcı",image: "/assets/images/weber/33.png"  },
        { name: "Sıva Filesi (160 gr)",image: "/assets/images/weber/34.png" },
      ],
    },
  ],
},

{
  categorySlug: "hirdavat-urunleri",
  brands: [
    {
      brand: "SGS",
      slug: "sgs",
      products: sgsProducts,
    },
    {
      brand: "Vida Grupları",
      slug: "vida-gruplari",
      products: [
        { name: "Alçıpan Vida (Sivri)",image: "/assets/images/vida/vida1.png"  },
        { name: "Alçıpan Akıllı Vida",image: "/assets/images/vida/vida2.png" },
        { name: "Sunta Vidası",image: "/assets/images/vida/vida3.png" },
        { name: "Trapez Vida",image: "/assets/images/vida/vida4.png"  },
      ],
    },
  ],
},

  
];

