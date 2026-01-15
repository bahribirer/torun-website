<template>
  <header class="header">
    <div class="header-inner">
      
      <!-- LOGO -->
      <div class="logo">
  <img src="/assets/logo/logotorun.png" alt="Torunlar Yapı İzolasyon" />
</div>


      <!-- MENU -->
      <nav class="nav">
        <RouterLink
          v-for="item in menu"
          :key="item.to"
          :to="item.to"
          :class="{ active: route.path === item.to || route.path.startsWith(item.to + '/') }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- CTA -->
     
    </div>

    <!-- ALT VURGU ÇİZGİSİ -->
    <div class="accent-line"></div>
  </header>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const menu = [
  { label: "Ana Sayfa", to: "/" },
  { label: "Kurumsal", to: "/corporate" },
  { label: "Ürünler", to: "/products" },
  { label: "Çözümler", to: "/solutions" },
  { label: "İletişim", to: "/contact" }
];
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
}

/* İç hizalama */
.header-inner {
  max-width: 1200px;
  margin: auto;
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* LOGO */
/* LOGO */
.logo {
  display: flex;
  align-items: center;
  margin-left: -32px;   /* 👈 sola kaydır (−10 / −20 / −30 deneyebilirsin) */
}

.logo img {
  height: 100px;         /* 👈 boyu biraz düşürdük */
  width: 200px;         /* 👈 ENİNE büyütme burada */
  object-fit: contain;  /* 👈 logo ezilmez */
}


/* MENU */
.nav {
  display: flex;
  gap: 2.2rem;
}

.nav a {
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-color);
  position: relative;
  padding-bottom: 4px;
}

/* Hover underline */
.nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--brand-primary);
  transition: width 0.25s ease;
}

.nav a:hover::after {
  width: 100%;
}

/* Active */
.nav a.active {
  font-weight: 600;
  color: var(--brand-primary);
}

.nav a.active::after {
  width: 100%;
}

/* CTA */
.contact-btn {
  background: transparent;
  color: var(--brand-primary);
  border: 1px solid var(--brand-primary);
}

.contact-btn:hover {
  background: var(--brand-primary);
  color: #ffffff;
}

/* Alt vurgu çizgisi */
.accent-line {
  height: 3px;
  background: linear-gradient(
    to right,
    var(--brand-primary),
    var(--brand-accent)
  );
}
</style>
