<template>
  <section class="product-detail" v-if="product">
    <!-- NAVIGATION & BREADCRUMB -->
    <div class="detail-nav">
      <div class="nav-container">
        <nav class="breadcrumb">
          <RouterLink to="/products">Ürünler</RouterLink>
          <i class="pi pi-chevron-right"></i>
          <RouterLink :to="`/products/${categorySlug}`">{{ categoryTitle }}</RouterLink>
          <i class="pi pi-chevron-right"></i>
          <span>{{ product.name }}</span>
        </nav>
        
        <RouterLink :to="`/products/${categorySlug}`" class="back-btn-top">
          <i class="pi pi-arrow-left"></i>
          Geri Dön
        </RouterLink>
      </div>
    </div>

    <!-- MAIN SECTION -->
    <div class="detail-main">
      <div class="container">
        <div class="main-layout">
          
          <!-- IMAGE GALLERY / MAIN IMAGE -->
          <div class="visual-side">
            <div class="image-wrapper">
              <img :src="product.image || '/assets/placeholder.png'" :alt="product.name" @error="onImageError" />
            </div>
          </div>

          <!-- PRODUCT INFO -->
          <div class="info-side">
            <div class="info-content">
              <span class="category-tag">{{ categoryTitle }}</span>
              <h1>{{ product.name }}</h1>
              
              <div class="divider"></div>

              <div class="description-box">
                <p v-if="product.description">{{ product.description }}</p>
                <p v-else class="placeholder-text">
                  Torunlar Yapı güvencesiyle sunulan bu ürün, sektör standartlarına uygun 
                  kalite ve dayanıklılık sunmaktadır. Detaylı teknik bilgi ve stok durumu için ekibimizle iletişime geçebilirsiniz.
                </p>
              </div>

              <div v-if="product.features && product.features.length" class="features-section">
                <h3>Ürün Özellikleri</h3>
                <ul class="feature-grid">
                  <li v-for="feat in product.features" :key="feat">
                    <i class="pi pi-check"></i>
                    {{ feat }}
                  </li>
                </ul>
              </div>

              <div class="cta-section">
                <RouterLink to="/contact" class="primary-cta">
                  <span>Teklif Al & Bilgi İste</span>
                  <i class="pi pi-envelope"></i>
                </RouterLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <!-- SPECS SECTION -->
    <div v-if="product.specs && Object.keys(product.specs).length" class="specs-wrapper">
      <div class="container">
        <div class="specs-header">
          <h2>Teknik Detaylar</h2>
          <div class="h-line"></div>
        </div>
        
        <div class="specs-grid">
          <div v-for="(val, key) in product.specs" :key="key" class="spec-card">
            <span class="spec-k">{{ key }}</span>
            <span class="spec-v">{{ val }}</span>
          </div>
        </div>
      </div>
    </div>

  </section>

  <!-- NOT FOUND -->
  <section v-else class="not-found">
    <div class="container">
      <i class="pi pi-search"></i>
      <h2>Aradığınız ürün bulunamadı</h2>
      <p>Lütfen ürün adını kontrol edin veya kategorilere göz atın.</p>
      <RouterLink to="/products" class="btn-outline">Ürün Gruplarına Dön</RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { productCatalog } from "../data/productCatalog";
import { productCategories } from "../data/productCategories";

const route = useRoute();
const categorySlug = route.params.categorySlug as string;
const productName = route.params.productName as string;

const product = computed(() => {
  const category = productCatalog.find(c => c.categorySlug === categorySlug);
  if (!category) return null;

  if (category.brands) {
    for (const brand of category.brands) {
      const p = brand.products.find(item => item.name === productName);
      if (p) return p;
    }
  }

  if (category.directProducts) {
    return category.directProducts.find(item => item.name === productName) || null;
  }
  return null;
});

const categoryTitle = computed(() => {
  const found = productCategories.find(c => c.slug === categorySlug);
  return found ? found.title : "Ürün Grubu";
});

function onImageError(e: Event) {
  (e.target as HTMLImageElement).src = "/assets/placeholder.png";
}
</script>

<style scoped>
.product-detail {
  background: #ffffff;
  min-height: 100vh;
}

.container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* NAVIGATION AREA */
.detail-nav {
  background: #fafafa;
  border-bottom: 1px solid #eee;
  padding: 1.2rem 0;
}

.nav-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.85rem;
  color: #888;
}

.breadcrumb a {
  text-decoration: none;
  color: #666;
  transition: color 0.2s;
}

.breadcrumb a:hover {
  color: var(--brand-primary);
}

.breadcrumb i {
  font-size: 0.7rem;
}

.breadcrumb span {
  color: #1a1a1a;
  font-weight: 600;
}

.back-btn-top {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #1a1a1a;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  background: #fff;
  border: 1px solid #ddd;
  transition: all 0.2s;
}

.back-btn-top:hover {
  border-color: var(--brand-primary);
  color: var(--brand-primary);
  background: #fdf2f2;
}

/* MAIN LAYOUT */
.detail-main {
  padding: 4rem 0;
}

.main-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
}

/* IMAGE */
.image-wrapper {
  background: #fff;
  border: 1px solid #f0f0f0;
  border-radius: 20px;
  padding: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 40px rgba(0,0,0,0.03);
}

.image-wrapper img {
  max-width: 100%;
  max-height: 500px;
  object-fit: contain;
}

/* INFO SIDE */
.category-tag {
  display: inline-block;
  background: #fdf2f2;
  color: var(--brand-primary);
  padding: 0.4rem 1rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1.2rem;
}

.info-side h1 {
  font-size: 2.4rem;
  color: #1a1a1a;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.divider {
  width: 60px;
  height: 4px;
  background: var(--brand-primary);
  margin-bottom: 2rem;
  border-radius: 2px;
}

.description-box {
  margin-bottom: 3rem;
}

.description-box p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #444;
}

.placeholder-text {
  color: #777;
  font-style: italic;
}

.features-section {
  margin-bottom: 3.5rem;
}

.features-section h3 {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.feature-grid {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
}

.feature-grid li {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.95rem;
  color: #555;
}

.feature-grid i {
  color: #10b981;
  font-size: 0.9rem;
}

.cta-section {
  padding-top: 2rem;
  border-top: 1px solid #eee;
}

.primary-cta {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: var(--brand-primary);
  color: #fff;
  padding: 1.2rem 2.8rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.3s;
  box-shadow: 0 12px 24px rgba(198, 40, 40, 0.2);
}

.primary-cta:hover {
  transform: translateY(-4px);
  box-shadow: 0 16px 32px rgba(198, 40, 40, 0.3);
}

/* SPECS */
.specs-wrapper {
  background: #f9f9f9;
  padding: 6rem 0;
  border-top: 1px solid #eee;
}

.specs-header {
  margin-bottom: 3rem;
  text-align: center;
}

.specs-header h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.h-line {
  width: 40px;
  height: 3px;
  background: var(--brand-primary);
  margin: 0 auto;
}

.specs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.spec-card {
  background: #fff;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.spec-k {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #888;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.spec-v {
  font-size: 1.05rem;
  color: #1a1a1a;
  font-weight: 600;
}

/* NOT FOUND */
.not-found {
  padding: 12rem 0;
  text-align: center;
}

.not-found i {
  font-size: 4rem;
  color: #ddd;
  margin-bottom: 2rem;
}

.not-found h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.btn-outline {
  display: inline-block;
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  border: 2px solid var(--brand-primary);
  color: var(--brand-primary);
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-outline:hover {
  background: var(--brand-primary);
  color: #fff;
}

/* RESPONSIVE */
@media (max-width: 1000px) {
  .main-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .visual-side {
    max-width: 600px;
    margin: 0 auto;
  }
}

@media (max-width: 600px) {
  .detail-hero h1 {
    font-size: 1.8rem;
  }
  
  .feature-grid {
    grid-template-columns: 1fr;
  }
  
  .breadcrumb span {
    display: none;
  }
}
</style>
