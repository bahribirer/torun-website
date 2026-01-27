<template>
  <main>
    <HeroSection />
    <TrustSection />
    <SolutionsSection />
    <CtaSection />
  </main>
</template>

<script setup lang="ts">
import { useHead } from "@unhead/vue";
import HeroSection from "../components/home/HeroSection.vue";
import TrustSection from "../components/home/TrustSection.vue";
import SolutionsSection from "../components/home/SolutionsSection.vue";
import CtaSection from "../components/home/CtaSection.vue";

useHead({
  title: "Torunlar Yapı İzolasyon - Su Yalıtımı ve İnşaat Malzemeleri",
  meta: [
    {
      name: "description",
      content: "Torunlar Yapı İzolasyon, 20 yılı aşkın tecrübesiyle BTM, Isonem, Weber ve SGS gibi dünya markalarının bölge bayiliğini yaparak kaliteli su yalıtımı ve inşaat malzemeleri sunar."
    },
    {
      name: "keywords",
      content: "su yalıtımı, inşaat malzemeleri, btm bayii, isonem bayii, sgs el aletleri, torunlar yapı, izolasyon"
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.xn--trnyap-kya.com/'
    }
  ]
});
</script>
