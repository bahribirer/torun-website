import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import Contact from "../pages/Contact.vue";
import Corporate from "../pages/Corporate.vue";
import Solutions from "../pages/Solutions.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/corporate", name: "corporate", component: Corporate },
  { path: "/contact", name: "contact", component: Contact },
  { path: "/solutions", name: "solutions", component: Solutions },
  // router/index.ts (ilgili routes array'in içine ekle)
  {
    path: "/products",
    name: "products",
    component: () => import("../pages/Products.vue"),
  },
  {
    path: "/products/:slug",
    name: "product-category",
    component: () => import("../pages/ProductCategory.vue"),
  },
  {
    path: "/products/:categorySlug/:productName",
    name: "product-detail",
    component: () => import("../pages/ProductDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 100,
        behavior: "smooth",
      };
    }
    return savedPosition || { top: 0 };
  },
});

export default router;
