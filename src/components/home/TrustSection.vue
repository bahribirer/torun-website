<template>
  <section class="trust">
    <div class="trust-inner">

      <!-- HEADER -->
      <header class="trust-header">
        <span class="section-label">Neden Torunlar?</span>
        <h2>Bizi Güçlü Kılan Değerler</h2>
        <div class="header-divider"></div>
      </header>

      <!-- CARDS -->
      <div class="trust-grid">
        <div class="trust-card">
          <div class="image-box">
            <img src="/assets/kaliteli-malzeme.jpg" alt="Kaliteli Malzeme" />
          </div>
          <h3>Kaliteli Malzeme</h3>
          <p>Standartlara uygun, uzun ömürlü ürünler</p>
        </div>

        <div class="trust-card">
          <div class="image-box">
             <img src="/assets/uzman-kadro.jpg" alt="Uzman Kadro" />
          </div>
          <h3>Uzman Kadro</h3>
          <p>Deneyimli ve profesyonel ekip</p>
        </div>

        <div class="trust-card">
          <div class="image-box">
             <img src="/assets/zamaninda-teslim.jpg" alt="Zamanında Teslim" />
          </div>
          <h3>Zamanında Teslim</h3>
          <p>Planlı ve güvenilir iş süreçleri</p>
        </div>
      </div>

    </div>
  </section>
</template>



<style scoped>
.trust {
  background: #f4f4f4;
  padding: 6rem 1.5rem;
}

.trust-inner {
  max-width: 1200px;
  margin: auto;
}

/* HEADER */
.trust-header {
  text-align: center;
  margin-bottom: 4.5rem;
}

.trust-header .section-label {
  display: block;
  margin-bottom: 0.8rem;
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--brand-primary);
}

.trust-header h2 {
  font-size: 2.3rem;
  font-weight: 600;
  color: var(--text-color);
  line-height: 1.2;
}

/* İnce ayraç */
.header-divider {
  width: 44px;
  height: 3px;
  margin: 1.5rem auto 0;
  background: var(--brand-primary);
}

/* GRID */
.trust-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

/* CARD */
.trust-card {
  background: #ffffff;
  padding: 3rem 2.2rem;
  text-align: center;
  border-radius: 10px;
  border-top: 6px solid var(--brand-primary);
  transition: all 0.3s ease;
}

.trust-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.08);
}

/* IMAGE BOX */
.image-box {
  width: 100%;
  height: 200px; /* Sabit bir yükseklik belirleyelim */
  margin: 0 auto 1.5rem;
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
.trust-card h3 {
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
}

.trust-card p {
  font-size: 0.95rem;
  color: var(--text-color-secondary);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .trust-grid {
    grid-template-columns: 1fr;
  }
}



</style>
