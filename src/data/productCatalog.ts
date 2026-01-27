import { sgsProducts } from "./sgsProducts";


export type ProductItem = {
  id?: number;
  name: string;
  image?: string;
  description?: string;
  features?: string[];
  specs?: Record<string, string>;
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
          {
            name: "Bituproof Y Yatay",
            image: "/assets/images/btm/1.png",
            description: "Temel yalıtımında kullanılan, kendinden yapışkanlı ve yüksek performanslı su yalıtım membranıdır. Yatay yüzeylerde mükemmel koruma sağlar.",
            features: ["Kendinden yapışkanlı", "UV dirençli", "Kolay uygulama", "Tam sızdırmazlık"],
            specs: { "Malzeme": "Bitüm", "Kalınlık": "3mm", "Rulo Ölçüsü": "1x10m" }
          },
          {
      name: "Bituproof Y Plus",
      image: "/assets/images/btm/1.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Bituproof D Düşey",
      image: "/assets/images/btm/2.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Bituproof Protector",
      image: "/assets/images/btm/2.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Plastobit",
      image: "/assets/images/btm/3.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
            name: "Polibit",
            image: "/assets/images/btm/4.png",
            description: "APP (Ataktik Polipropilen) katkılı, yüksek performanslı bitümlü su yalıtım örtüsüdür. Özellikle sıcak iklimlerde üstün performans sergiler.",
            features: ["Sıcaklık dayanımı yüksek", "Esnek yapı", "Kolay kaynak", "Donatılı güçlendirme"],
            specs: { "Donatı": "Cam tülü / Polyester", "Kalınlık": "3mm - 4mm", "Sıcaklık Direnci": "+120°C" }
          },
          {
      name: "Bitüself",
      image: "/assets/images/btm/5.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Çatı Tutucu",
      image: "/assets/images/btm/6.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Su Tutucu",
      image: "/assets/images/btm/7.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "BT2K 500",
      image: "/assets/images/btm/8.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "BT2K 600",
      image: "/assets/images/btm/9.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "ELASTASOL 100",
      image: "/assets/images/btm/10.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "BTM Drenaj",
      image: "/assets/images/btm/11.png",
      description: "BTM kalitesiyle üretilmiş, zorlu iklim koşullarına dayanıklı su yalıtım çözümüdür. Esnek yapısı sayesinde çatlamaz ve ayrılmaz.",
      features: ["BTM Teknolojisi","SBS/APP Katkılı","Donatılı Yapı","Yüksek Yapışma"],
      specs: {"Kalınlık":"3-4mm","Rulo":"10m","Donatı":"Polyester/Cam Tülü"}
    },
          {
      name: "BTM Keçe",
      image: "/assets/images/btm/12.png",
      description: "BTM kalitesiyle üretilmiş, zorlu iklim koşullarına dayanıklı su yalıtım çözümüdür. Esnek yapısı sayesinde çatlamaz ve ayrılmaz.",
      features: ["BTM Teknolojisi","SBS/APP Katkılı","Donatılı Yapı","Yüksek Yapışma"],
      specs: {"Kalınlık":"3-4mm","Rulo":"10m","Donatı":"Polyester/Cam Tülü"}
    },
        ],
      },
      {
        brand: "Isonem",
        slug: "isonem",
        products: [
          {
      name: "SB",
      image: "/assets/images/isonem/23.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Polya",
      image: "/assets/images/isonem/24.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
            name: "MS Polimer",
            image: "/assets/images/isonem/25.png",
            description: "Yeni nesil polimer esaslı, tek bileşenli, solvent içermeyen su yalıtım kaplamasıdır. Her türlü yüzeye mükemmel yapışır, ek yeri oluşturmaz.",
            features: ["UV Dayanımlı", "Yürünebilir yüzey", "Elastik kaplama", "Solvent içermez"],
            specs: { "Renk": "Beyaz / Gri", "Sarfiyat": "1-1.5 kg/m²", "Kuruma Süresi": "24 Saat" }
          },
        ],
      },
      {
        brand: "Heller",
        slug: "heller",
        products: [
          {
      name: "Helltech Floor WP 800 UV",
      image: "/assets/images/heller/hel1.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Helltech Floor WP 810 BİTÜM",
      image: "/assets/images/heller/hel2.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Helltech Floor WP 820 2K BITUM",
      image: "/assets/images/heller/hel3.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Helltech Floor WP 830 COLD",
      image: "/assets/images/heller/hel4.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Helltech Floor WP 840 2K ENJ",
      image: "/assets/images/heller/hel5.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Helltech Floor WP EP 850 ",
      image: "/assets/images/heller/hel6.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Helltech Floor WP 860 WP",
      image: "/assets/images/heller/hel7.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Helltech Floor WP 870 WP HP",
      image: "/assets/images/heller/hel8.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },

        ],
      },
    ],
  },

  // --- İNŞAAT MALZEMELERİ ---
  {
    categorySlug: "insaat-malzemeleri",
    directProducts: [
      {
      name: "İnşaat Çivisi",
      image: "/assets/images/insaat/35.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "Bağ Teli",
      image: "/assets/images/insaat/36.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "Kalıp Kilidi (Çiroz)",
      image: "/assets/images/insaat/37.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "Çiroz Makinası",
      image: "/assets/images/insaat/38.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "İskele Kelepçesi",
      image: "/assets/images/insaat/39.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "Yelek",
      image: "/assets/images/insaat/40.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "İş Ayakkabısı",
      image: "/assets/images/insaat/41.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "Patpat Naylon",
      image: "/assets/images/insaat/42.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "Naylon Branda",
      image: "/assets/images/insaat/43.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "Yaparlar Marka El Arabası",
      image: "/assets/images/insaat/44.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "İnşaat Kürek & Kazma",
      image: "/assets/images/insaat/45.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
    ],
  },
  {
    categorySlug: "alcipan-gruplari",
    directProducts: [
      {
      name: "Duvar U Profili",
      image: "/assets/images/alcipan/46.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "Duvar C Profili",
      image: "/assets/images/alcipan/47.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "Tavan U Profili",
      image: "/assets/images/alcipan/48.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "Tavan C Profili",
      image: "/assets/images/alcipan/49.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
      name: "Köşe Profili (Galvaniz)",
      image: "/assets/images/alcipan/50.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
      {
        name: "Boardex",
        image: "/assets/images/alcipan/51.png",
        description: "Dış cephelerde kullanılan, suya ve neme dayanıklı fiber alçı plakadır. Güçlendirilmiş çekirdeği ile mükemmel dayanıklılık sağlar.",
        features: ["Suya dayanıklı", "Küf yapmaz", "Yangın dirençli", "A1 Sınıfı"],
        specs: { "Kalınlık": "12.5mm", "Genişlik": "1200mm", "Uzunluk": "2400mm" }
      },
    ],
  },
  {
    categorySlug: "cati-kaplamalari",
    brands: [
      {
        brand: "BTM",
        slug: "btm",
        products: [
          {
      name: "BTM Shingle Dragon",
      image: "/assets/images/btm/13.png",
      description: "BTM kalitesiyle üretilmiş, zorlu iklim koşullarına dayanıklı su yalıtım çözümüdür. Esnek yapısı sayesinde çatlamaz ve ayrılmaz.",
      features: ["BTM Teknolojisi","SBS/APP Katkılı","Donatılı Yapı","Yüksek Yapışma"],
      specs: {"Kalınlık":"3-4mm","Rulo":"10m","Donatı":"Polyester/Cam Tülü"}
    },
          {
      name: "BTM Shingle Yonca",
      image: "/assets/images/btm/14.png",
      description: "BTM kalitesiyle üretilmiş, zorlu iklim koşullarına dayanıklı su yalıtım çözümüdür. Esnek yapısı sayesinde çatlamaz ve ayrılmaz.",
      features: ["BTM Teknolojisi","SBS/APP Katkılı","Donatılı Yapı","Yüksek Yapışma"],
      specs: {"Kalınlık":"3-4mm","Rulo":"10m","Donatı":"Polyester/Cam Tülü"}
    },
          {
      name: "Corrubit (Kırmızı)",
      image: "/assets/images/btm/15.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Shingle Alt Örtü",
      image: "/assets/images/btm/16.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Shingle Çivisi",
      image: "/assets/images/btm/17.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "OSB 15 mm",
      image: "/assets/images/btm/18.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "OSB 11 mm",
      image: "/assets/images/btm/19.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
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
          {
      name: "BTM POLPAN N",
      image: "/assets/images/btm/20.png",
      description: "BTM kalitesiyle üretilmiş, zorlu iklim koşullarına dayanıklı su yalıtım çözümüdür. Esnek yapısı sayesinde çatlamaz ve ayrılmaz.",
      features: ["BTM Teknolojisi","SBS/APP Katkılı","Donatılı Yapı","Yüksek Yapışma"],
      specs: {"Kalınlık":"3-4mm","Rulo":"10m","Donatı":"Polyester/Cam Tülü"}
    },
          {
      name: "BTM POLPAN P",
      image: "/assets/images/btm/21.png",
      description: "BTM kalitesiyle üretilmiş, zorlu iklim koşullarına dayanıklı su yalıtım çözümüdür. Esnek yapısı sayesinde çatlamaz ve ayrılmaz.",
      features: ["BTM Teknolojisi","SBS/APP Katkılı","Donatılı Yapı","Yüksek Yapışma"],
      specs: {"Kalınlık":"3-4mm","Rulo":"10m","Donatı":"Polyester/Cam Tülü"}
    },
          {
      name: "BTM POLPAN PK",
      image: "/assets/images/btm/22.png",
      description: "BTM kalitesiyle üretilmiş, zorlu iklim koşullarına dayanıklı su yalıtım çözümüdür. Esnek yapısı sayesinde çatlamaz ve ayrılmaz.",
      features: ["BTM Teknolojisi","SBS/APP Katkılı","Donatılı Yapı","Yüksek Yapışma"],
      specs: {"Kalınlık":"3-4mm","Rulo":"10m","Donatı":"Polyester/Cam Tülü"}
    },
        ],
      },
      {
        brand: "Weber",
        slug: "weber",
        products: [
          {
      name: "Isı Yalıtım Yapıştırıcı",
      image: "/assets/images/weber/26.png",
      description: "Mükemmel sızdırmazlık ve yalıtım performansı sunar. Yapılarınızı sudan, nemden ve dış etkenlerden koruyarak ömrünü uzatır.",
      features: ["Tam Sızdırmazlık","UV Dayanımı","Kolay Uygulama","Uzun Ömürlü"],
      specs: {"Uygulama":"Rulo/Fırça","Sarfiyat":"Minimun","Renk":"Standart"}
    },
          {
      name: "Isı Yalıtım Sıvası",
      image: "/assets/images/weber/27.png",
      description: "Mükemmel sızdırmazlık ve yalıtım performansı sunar. Yapılarınızı sudan, nemden ve dış etkenlerden koruyarak ömrünü uzatır.",
      features: ["Tam Sızdırmazlık","UV Dayanımı","Kolay Uygulama","Uzun Ömürlü"],
      specs: {"Uygulama":"Rulo/Fırça","Sarfiyat":"Minimun","Renk":"Standart"}
    },
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
          {
      name: "Ses Yalıtım Boyası",
      image: "/assets/images/isonem/28.png",
      description: "Mükemmel sızdırmazlık ve yalıtım performansı sunar. Yapılarınızı sudan, nemden ve dış etkenlerden koruyarak ömrünü uzatır.",
      features: ["Tam Sızdırmazlık","UV Dayanımı","Kolay Uygulama","Uzun Ömürlü"],
      specs: {"Uygulama":"Rulo/Fırça","Sarfiyat":"Minimun","Renk":"Standart"}
    },
          {
      name: "Nem Boyası",
      image: "/assets/images/isonem/29.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Isı Yalıtım Boyası",
      image: "/assets/images/isonem/30.png",
      description: "Mükemmel sızdırmazlık ve yalıtım performansı sunar. Yapılarınızı sudan, nemden ve dış etkenlerden koruyarak ömrünü uzatır.",
      features: ["Tam Sızdırmazlık","UV Dayanımı","Kolay Uygulama","Uzun Ömürlü"],
      specs: {"Uygulama":"Rulo/Fırça","Sarfiyat":"Minimun","Renk":"Standart"}
    },
        ],
      },
      {
        brand: "Weber",
        slug: "weber",
        products: [
          {
      name: "Tamir Harcı",
      image: "/assets/images/weber/31.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Seramik Yapıştırıcı",
      image: "/assets/images/weber/32.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Granit Yapıştırıcı",
      image: "/assets/images/weber/33.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Sıva Filesi (160 gr)",
      image: "/assets/images/weber/34.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
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
          {
      name: "Alçıpan Vida (Sivri)",
      image: "/assets/images/vida/vida1.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Alçıpan Akıllı Vida",
      image: "/assets/images/vida/vida2.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Sunta Vidası",
      image: "/assets/images/vida/vida3.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
          {
      name: "Trapez Vida",
      image: "/assets/images/vida/vida4.png",
      description: "Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun kalite ve dayanıklılık sunmaktadır. Projelerinizde güvenle tercih edebilirsiniz.",
      features: ["Kaliteli Malzeme","Uzun Ömürlü","Garantili","Stoktan Teslim"],
      specs: {"Durum":"Sıfır","Menşei":"Türkiye/Avrupa","Teslimat":"Hızlı Gönderi"}
    },
        ],
      },
    ],
  },


];

