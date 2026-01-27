<template>
  <section class="solutions">
    <div class="solutions-inner">

      <!-- HEADER -->
      <header class="solutions-header">
        <span class="section-label">Neler Yapıyoruz?</span>
        <h2>Çözüm Alanlarımız</h2>
        <div class="header-divider"></div>
      </header>

      <!-- GRID -->
      <div class="solutions-grid">
        <div class="solution-card">
          <div class="image-box">
             <img src="/assets/isi-yalitimi-home.jpg" alt="Isı Yalıtımı" />
          </div>
          <h4>Isı Yalıtımı</h4>
          <p>Enerji verimliliği sağlayan sistemler</p>
        </div>

        <div class="solution-card">
          <div class="image-box">
             <img src="/assets/su-yalitimi-home.jpg" alt="Su Yalıtımı" />
          </div>
          <h4>Su Yalıtımı</h4>
          <p>Yapıları dış etkenlere karşı korur</p>
        </div>

        <div class="solution-card">
          <div class="image-box">
             <img src="/assets/cati-sistemleri-home.jpg" alt="Çatı Sistemleri" />
          </div>
          <h4>Çatı Sistemleri</h4>
          <p>Modern ve dayanıklı çözümler</p>
        </div>

        <div class="solution-card">
          <div class="image-box">
             <img src="/assets/yapi-kimyasallari.jpg" alt="Yapı Kimyasalları" />
          </div>
          <h4>Yapı Kimyasalları</h4>
          <p>Profesyonel uygulamalar için ürünler</p>
        </div>
      </div>

    </div>
  </section>
</template>


<style scoped>
/* SECTION */
/* SECTION */
.solutions {
  background: #f6f6f6;
  padding: 6rem 1.5rem;
}

.solutions-inner {
  max-width: 1200px;
  margin: auto;
}

/* HEADER */
.solutions-header {
  text-align: center;
  margin-bottom: 4.5rem;
}

.section-label {
  display: block;
  margin-bottom: 0.8rem;
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--brand-primary);
}

.solutions-header h2 {
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--text-color);
  line-height: 1.2;
}

/* İNCE AYRAÇ */
.header-divider {
  width: 48px;
  height: 3px;
  margin: 1.5rem auto 0;
  background: var(--brand-primary);
}

/* GRID */
.solutions-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
}

/* CARD */
.solution-card {
  background: #ffffff;
  padding: 3rem 2.2rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

/* ALT VURGU */
.solution-card::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 32px;
  height: 3px;
  background: var(--brand-primary);
  transform: translateX(-50%);
}

/* HOVER */
.solution-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.08);
}

/* IMAGE BOX */
.image-box {
  width: 100%;
  height: 180px;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  overflow: hidden;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* TEXT */
.solution-card h4 {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.solution-card p {
  font-size: 0.95rem;
  color: var(--text-color-secondary);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .solutions-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 500px) {
  .solutions-grid {
    grid-template-columns: 1fr;
  }
}

</style>
