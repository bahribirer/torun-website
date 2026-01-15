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

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
