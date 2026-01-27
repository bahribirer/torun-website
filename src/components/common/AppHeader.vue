<template>
  <header class="header">
    <div class="header-inner">
      
      <!-- LOGO -->
      <RouterLink to="/" class="logo">
        <img src="/assets/logo/logotorun.png" alt="Torunlar Yapı İzolasyon" />
      </RouterLink>

      <!-- DESKTOP MENU -->
      <nav class="nav desktop-nav">
        <RouterLink
          v-for="item in menu"
          :key="item.to"
          :to="item.to"
          :class="{ active: route.path === item.to || route.path.startsWith(item.to + '/') }"
        >
          {{ item.label }}
        </RouterLink>
      </nav>

      <!-- HAMBURGER ICON -->
      <button class="hamburger" @click="isMenuOpen = !isMenuOpen" :class="{ open: isMenuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- MOBILE MENU OVERLAY -->
      <Transition name="fade">
        <div v-if="isMenuOpen" class="mobile-menu-overlay" @click.self="isMenuOpen = false">
          <div class="mobile-menu-panel">
            <nav class="mobile-nav">
              <RouterLink
                v-for="item in menu"
                :key="item.to"
                :to="item.to"
                :class="{ active: route.path === item.to || route.path.startsWith(item.to + '/') }"
                @click="isMenuOpen = false"
              >
                {{ item.label }}
              </RouterLink>
            </nav>
          </div>
        </div>
      </Transition>
     
    </div>

    <!-- ALT VURGU ÇİZGİSİ -->
    <div class="accent-line"></div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isMenuOpen = ref(false);

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
  z-index: 1000;
  background: #ffffff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.03);
}

/* İç hizalama */
.header-inner {
  max-width: 1200px;
  margin: auto;
  padding: 0.8rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* LOGO */
.logo {
  display: flex;
  align-items: center;
  margin-left: -32px; 
}

.logo img {
  height: 80px;
  width: auto;
  max-width: 200px;
  object-fit: contain;
}

/* DESKTOP NAV */
.desktop-nav {
  display: flex;
  gap: 2.2rem;
}

.desktop-nav a {
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-color);
  position: relative;
  padding-bottom: 4px;
}

.desktop-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 2px;
  background: var(--brand-primary);
  transition: width 0.25s ease;
}

.desktop-nav a:hover::after,
.desktop-nav a.active::after {
  width: 100%;
}

.desktop-nav a.active {
  font-weight: 600;
  color: var(--brand-primary);
}

/* HAMBURGER */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1002;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background: #333;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.hamburger.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}
.hamburger.open span:nth-child(2) {
  opacity: 0;
}
.hamburger.open span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -6px);
}

/* MOBILE MENU */
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  z-index: 1001;
  display: flex;
  justify-content: flex-end;
}

.mobile-menu-panel {
  width: 80%;
  max-width: 320px;
  background: #fff;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: -5px 0 15px rgba(0,0,0,0.1);
  transform: translateX(0);
  transition: transform 0.3s ease;
}



.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-nav a {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.8rem;
}

.mobile-nav a.active {
  color: var(--brand-primary);
  border-bottom-color: var(--brand-primary);
}

/* TRANSITIONS */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .desktop-nav {
    display: none;
  }
  
  .hamburger {
    display: flex;
  }
  
  .logo {
    margin-left: 0;
  }
  
  .logo img {
    height: 60px;
  }
  
  .header-inner {
    padding: 0.8rem 1rem;
  }
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
