<template>
  <section class="category">

    <!-- CATEGORY FOUND -->
    <template v-if="category">

      <!-- HERO -->
      <div class="category-hero">
        <span class="section-label">Ürün Kategorisi</span>
        <h1>{{ categoryTitle }}</h1>
      </div>

      <!-- CONTENT -->
      <div class="category-content">

        <!-- BRAND FILTER -->
        <div
          v-if="category.brands"
          class="brand-filter"
        >
          <button
            v-for="brand in category.brands"
            :key="brand.slug"
            :class="['filter-btn', { active: brand.slug === activeBrand }]"
            @click="activeBrand = brand.slug"
          >
            {{ brand.brand }}
          </button>
        </div>

        <!-- SEARCH + COUNT -->
        <div class="list-tools">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Ürün ara..."
            class="search-input"
          />
          <span class="result-count">
            {{ filteredProducts.length }} ürün
          </span>
        </div>

        <!-- PRODUCTS GRID -->
        <div class="products-grid">

          <!-- MARKALI ÜRÜNLER -->
          <template v-if="category.brands">
            <div
              v-for="product in paginatedProducts"
              :key="product.name"
              class="product-card"
            >
              <div class="product-image">
                <img
                  :src="product.image || '/assets/placeholder.png'"
                  @error="onImageError"
                  :alt="product.name"
                />
              </div>

              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <span class="badge">Ürün Grubu</span>
              </div>
            </div>
          </template>

          <!-- MARKASIZ ÜRÜNLER -->
          <template v-else-if="category.directProducts">
            <div
              v-for="product in category.directProducts"
              :key="product.name"
              class="product-card"
            >
              <div class="product-image">
                <img
                  v-if="product.image"
                  :src="product.image"
                  @error="onImageError"
                  :alt="product.name"
                />
                <i v-else class="pi pi-image"></i>
              </div>

              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <span class="badge">Ürün</span>
              </div>
            </div>
          </template>

        </div>

        <!-- PAGINATION -->
        <div
          v-if="totalPages > 1"
          class="pagination"
        >
          <button
            :disabled="currentPage === 1"
            @click="currentPage--"
          >
            ‹
          </button>

          <button
            v-for="page in totalPages"
            :key="page"
            :class="{ active: page === currentPage }"
            @click="currentPage = page"
          >
            {{ page }}
          </button>

          <button
            :disabled="currentPage === totalPages"
            @click="currentPage++"
          >
            ›
          </button>
        </div>

      </div>
    </template>

    <!-- CATEGORY NOT FOUND -->
    <template v-else>
      <div class="not-found">
        <h2>Kategori bulunamadı</h2>
        <p>Aradığınız ürün kategorisi mevcut değil.</p>
      </div>
    </template>

  </section>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { productCatalog } from "../data/productCatalog";
import type { CategoryCatalog, ProductItem } from "../data/productCatalog";

const route = useRoute();

/* CATEGORY */
const category = computed<CategoryCatalog | undefined>(() =>
  productCatalog.find(c => c.categorySlug === route.params.slug)
);

/* TITLE */
const categoryTitle = computed(() => {
  if (!category.value) return "";
  return category.value.categorySlug
    .replace(/-/g, " ")
    .replace(/\b\w/g, l => l.toUpperCase());
});

/* IMAGE FALLBACK */
function onImageError(e: Event) {
  (e.target as HTMLImageElement).src =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgZmlsbD0iI2VlZWVlZSIgdmlld0JveD0iMCAwIDEyMCAxMjAiPjx0ZXh0IHg9IjYwIiB5PSI2NSIgZm9udC1zaXplPSIxNCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2JiYiI+Rm90byBZYWtsZXppPC90ZXh0Pjwvc3ZnPg==";
}

/* BRAND */
const activeBrand = ref<string>("");

/* SEARCH */
const searchQuery = ref("");

/* PAGINATION */
const currentPage = ref(1);
const pageSize = 12;

/* AUTO BRAND */
watchEffect(() => {
  if (!category.value) return;

  const brands = category.value.brands;
  if (!brands || brands.length === 0) return;

  if (!activeBrand.value) {
    const first = brands[0];
    if (first) {
      activeBrand.value = first.slug;
    }
  }
});



/* ACTIVE PRODUCTS */
const activeProducts = computed<ProductItem[]>(() => {
  if (!category.value?.brands || !activeBrand.value) return [];
  return (
    category.value.brands.find(
      b => b.slug === activeBrand.value
    )?.products ?? []
  );
});

/* FILTERED */
const filteredProducts = computed<ProductItem[]>(() => {
  if (!searchQuery.value) return activeProducts.value;
  return activeProducts.value.filter(p =>
    p.name.toLowerCase().includes(
      searchQuery.value.toLowerCase()
    )
  );
});

/* PAGINATED */
const totalPages = computed(() =>
  Math.ceil(filteredProducts.value.length / pageSize)
);

const paginatedProducts = computed<ProductItem[]>(() => {
  const start = (currentPage.value - 1) * pageSize;
  return filteredProducts.value.slice(start, start + pageSize);
});
</script>

<style scoped>
.category {
  background: #ffffff;
  padding-bottom: 6rem;
}

/* HERO */
.category-hero {
  background: linear-gradient(135deg, #f6f6f6, #ffffff);
  text-align: center;
  padding: 5rem 1.5rem 4rem;
}

.section-label {
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--brand-primary);
}

.category-hero h1 {
  font-size: 2.6rem;
  margin-top: 0.6rem;
}

/* CONTENT */
.category-content {
  max-width: 1200px;
  margin: -3rem auto 0;
  padding: 0 1.5rem;
}

/* FILTER */
.brand-filter {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.filter-btn {
  padding: 0.7rem 2rem;
  border-radius: 999px;
  border: 1px solid #ddd;
  background: #fff;
  font-weight: 600;
  cursor: pointer;
}

.filter-btn.active,
.filter-btn:hover {
  background: var(--brand-primary);
  color: #fff;
}

/* SEARCH */
.list-tools {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.search-input {
  padding: 0.7rem 1.4rem;
  border-radius: 999px;
  border: 1px solid #ddd;
  width: 260px;
}

.result-count {
  font-size: 0.85rem;
  color: #777;
}

/* GRID */
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

/* CARD */
.product-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 24px 50px rgba(0,0,0,0.07);
  overflow: hidden;
  transition: transform .25s ease;
}

.product-card:hover {
  transform: translateY(-6px);
}

.product-image {
  height: 160px;
  background: #f4f4f4;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 1rem;
}

.product-info {
  padding: 1.4rem;
}

.badge {
  font-size: 0.7rem;
  color: var(--brand-primary);
}

/* PAGINATION */
.pagination {
  display: flex;
  justify-content: center;
  gap: .5rem;
  margin-top: 3rem;
}

.pagination button {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: #fff;
  font-weight: 600;
  cursor: pointer;
}

.pagination button.active,
.pagination button:hover {
  background: var(--brand-primary);
  color: #fff;
}

.pagination button:disabled {
  opacity: .4;
  cursor: not-allowed;
}

/* RESPONSIVE */
@media (max-width: 1000px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 760px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 520px) {
  .products-grid {
    grid-template-columns: 1fr;
  }
}
</style>
