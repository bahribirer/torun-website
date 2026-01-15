<template>
  <section class="products">

    <!-- HERO -->
    <div class="products-hero">
      <span class="section-label">Ürün Grupları</span>
      <h1>Ürünler</h1>
      <p>
        Su yalıtımından çatı kaplamalarına kadar,
        projeleriniz için doğru ürün grubunu seçin.
      </p>
    </div>

    <!-- CONTENT -->
    <div class="products-content">
      <div class="products-grid">

        <RouterLink
          v-for="c in productCategories"
          :key="c.slug"
          :to="`/products/${c.slug}`"
          class="cat-card"
          :style="{ backgroundImage: `url(${c.image})` }"
        >
          <div class="cat-overlay">
            <div class="cat-content">
              <h3>{{ c.title }}</h3>
              <p>{{ c.desc }}</p>

              <div class="cat-action">
                <span>İncele</span>
                <i class="pi pi-arrow-right"></i>
              </div>
            </div>
          </div>
        </RouterLink>

      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
import { productCategories } from "../data/productCategories";
</script>

<style scoped>
.products {
  background: #ffffff;
  padding-bottom: 6rem;
}

/* HERO */
.products-hero {
  background: linear-gradient(135deg, #f6f6f6, #ffffff);
  text-align: center;
  padding: 5.5rem 1.5rem 4.5rem;
}

.section-label {
  display: block;
  margin-bottom: 0.8rem;
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--brand-primary);
}

.products-hero h1 {
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.products-hero p {
  max-width: 640px;
  margin: auto;
  font-size: 1rem;
  color: var(--text-color-secondary);
}

/* CONTENT */
.products-content {
  max-width: 1200px;
  margin: -3rem auto 0;
  padding: 0 1.5rem;
}

/* GRID */
.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.2rem;
}

/* CARD */
.cat-card {
  height: 320px;
  border-radius: 20px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  text-decoration: none;
  transition: transform 0.3s ease;
}

/* OVERLAY */
.cat-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0,0,0,0.75),
    rgba(0,0,0,0.2)
  );
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  transition: background 0.35s ease;
}

.cat-content {
  color: #ffffff;
}

.cat-content h3 {
  font-size: 1.4rem;
  margin-bottom: 0.4rem;
}

.cat-content p {
  font-size: 0.95rem;
  opacity: 0.85;
  margin-bottom: 1.4rem;
  line-height: 1.5;
}

.cat-action {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  font-weight: 600;
  color: #ffffff;
}

/* HOVER */
.cat-card:hover {
  transform: translateY(-6px);
}

.cat-card:hover .cat-overlay {
  background: linear-gradient(
    to top,
    rgba(198, 40, 40, 0.85),
    rgba(0,0,0,0.35)
  );
}

/* RESPONSIVE */
@media (max-width: 1000px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 620px) {
  .products-hero h1 {
    font-size: 2.2rem;
  }

  .products-grid {
    grid-template-columns: 1fr;
  }

  .cat-card {
    height: 260px;
  }
}
</style>
