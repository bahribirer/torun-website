<template>
  <section class="cta">
    <div class="cta-inner">
      <h2>
        Projeniz İçin<br />
        <span>Doğru Çözümü Birlikte Belirleyelim</span>
      </h2>

      <RouterLink to="/contact" class="cta-btn">
        Teklif Alın
      </RouterLink>
    </div>
  </section>
</template>


<style scoped>
.cta {
  background: linear-gradient(
    135deg,
    #2b2b2b 0%,
    #1f1f1f 100%
  );
  padding: 5rem 1.5rem;
  position: relative;
  overflow: hidden;
}

/* ÜST KIRMIZI ŞERİT */
.cta::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(
    to right,
    var(--brand-primary),
    var(--brand-accent)
  );
}

.cta-inner {
  max-width: 900px;
  margin: auto;
  text-align: center;
}

/* HEADLINE */
.cta h2 {
  font-size: 2.2rem;
  font-weight: 600;
  line-height: 1.3;
  color: #ffffff;
  margin-bottom: 2.5rem;
}

.cta h2 span {
  color: var(--brand-primary);
}

/* BUTTON */
.cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.8rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: #ffffff;
  background: var(--brand-primary);
  border-radius: 8px;
  box-shadow: 0 18px 35px rgba(198, 40, 40, 0.35);
  transition: all 0.3s ease;
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 25px 45px rgba(198, 40, 40, 0.5);
  background: #a51f1f;
}


</style>
