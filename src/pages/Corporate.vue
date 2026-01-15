<template>
  <section class="corporate">

    <!-- HERO -->
    <div class="corporate-hero">
      <div class="hero-overlay">
        <span class="section-label">Kurumsal</span>
        <h1>Torunlar Yapı İzolasyon</h1>
        <p>
          Yapı ve izolasyon sektöründe güvenilir ürün, güçlü tedarik
          ve uzun ömürlü çözümler.
        </p>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="corporate-content">

      <!-- ABOUT -->
      <section class="about">
        <div class="about-text">
          <h2>Hakkımızda</h2>
          <p>
            Torunlar Yapı İzolasyon Malzemeleri İnşaat Sanayi ve Ticaret Limited
            Şirketi; su yalıtımı, ısı yalıtımı, çatı kaplamaları, yapı kimyasalları
            ve inşaat malzemeleri alanlarında faaliyet göstermektedir.
          </p>
          <p>
            Kurulduğumuz günden bu yana hedefimiz; projelere uygun,
            standartlara tam uyumlu ve uzun ömürlü ürünleri müşterilerimizle
            buluşturmaktır.
          </p>
        </div>

        <div class="about-image">
          <!-- FOTO EKLENECEK -->
          <span>Görsel Alanı</span>
        </div>
      </section>

      <!-- VALUES -->
      <section class="values">
        <div class="value-card">
          <span class="icon">🧱</span>
          <h3>Kaliteli Ürün</h3>
          <p>Standartlara uygun, güvenilir ve uzun ömürlü ürün grupları.</p>
        </div>

        <div class="value-card">
          <span class="icon">🤝</span>
          <h3>Güvenilirlik</h3>
          <p>Şeffaf, sürdürülebilir ve güven esaslı iş anlayışı.</p>
        </div>

        <div class="value-card">
          <span class="icon">⚙️</span>
          <h3>Çözüm Odaklılık</h3>
          <p>Projeye özel analiz ve doğru ürün yönlendirmesi.</p>
        </div>
      </section>

      <!-- STATS -->
      <section class="stats">
        <div class="stat-box">
          <strong>10+</strong>
          <span>Yıllık Tecrübe</span>
        </div>
        <div class="stat-box">
          <strong>1000+</strong>
          <span>Tamamlanan Proje</span>
        </div>
        <div class="stat-box">
          <strong>50+</strong>
          <span>Ürün Grubu</span>
        </div>
        <div class="stat-box">
          <strong>100%</strong>
          <span>Müşteri Memnuniyeti</span>
        </div>
      </section>

      <!-- VISION / MISSION -->
      <section class="vision-mission">
        <div class="vm-box">
          <h3>Vizyonumuz</h3>
          <p>
            Yapı ve izolasyon sektöründe güvenilirliğiyle öne çıkan,
            tercih edilen bir marka olmak.
          </p>
        </div>

        <div class="vm-box">
          <h3>Misyonumuz</h3>
          <p>
            Kaliteli ürünleri, doğru fiyat ve doğru zamanda projelerle
            buluşturmak.
          </p>
        </div>
      </section>

      <!-- AREAS -->
      <section class="areas">
        <h2>Faaliyet Alanlarımız</h2>

        <div class="areas-grid">
          <div class="area-card">Su Yalıtımı</div>
          <div class="area-card">Isı Yalıtımı</div>
          <div class="area-card">Çatı Kaplamaları</div>
          <div class="area-card">Yapı Kimyasalları</div>
          <div class="area-card">Hırdavat & İnşaat</div>
          <div class="area-card">Endüstriyel Ürünler</div>
        </div>
      </section>

      <!-- CTA -->
      <section class="corporate-cta">
        <h2>Projeleriniz İçin Doğru Çözüm Ortağı</h2>
        <p>
          Ürün gruplarımız ve proje bazlı çözümlerimiz için bizimle iletişime geçin.
        </p>
        <RouterLink to="/contact" class="cta-btn">
          İletişime Geç
        </RouterLink>
      </section>

    </div>
  </section>
</template>


<style scoped>
.corporate {
  background: #ffffff;
  padding-bottom: 6rem;
}

/* HERO */
.corporate-hero {
   height: 460px;              /* biraz daha heybet */
  margin-bottom: 4rem;
  background: #eaeaea; /* FOTO EKLENİNCE DEĞİŞTİR */
  position: relative;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.45), rgba(0,0,0,0.25));
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}

.section-label {
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.85;
}

.hero-overlay h1 {
  font-size: 3rem;
  margin: 1rem 0;
}

.hero-overlay p {
  max-width: 600px;
  opacity: 0.9;
}

/* CONTENT */
.corporate-content {
  max-width: 1100px;
  margin: -2rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

/* ABOUT */
.about {
  background: #ffffff;
  padding: 4rem;
  border-radius: 24px;
  box-shadow: 0 30px 70px rgba(0,0,0,0.08);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem; /* 👈 artırıldı */
}


.about-image {
   background: linear-gradient(135deg, #eaeaea, #f4f4f4);
  height: 340px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}

/* VALUES */
.values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.value-card {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 24px 50px rgba(0,0,0,0.07);
  text-align: center;
}

/* STATS */
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}

.stat-box strong {
  font-size: 2.2rem;
  color: var(--brand-primary);
}

/* VISION MISSION */
.vision-mission {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.vm-box {
  background: #f6f6f6;
  padding: 2.5rem;
  border-radius: 16px;
}

/* AREAS */
.areas h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.areas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.area-card {
  background: #f2f2f2;
  padding: 3rem;
  border-radius: 16px;
  text-align: center;
  font-weight: 600;
}

/* CTA */
.corporate-cta {
  background: var(--brand-primary);
  color: #ffffff;
  padding: 4rem;
  border-radius: 22px;
  text-align: center;
}

.cta-btn {
  display: inline-block;
  margin-top: 1.8rem;
  padding: 1rem 2.8rem;
  background: #ffffff;
  color: var(--brand-primary);
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .about,
  .vision-mission,
  .values,
  .stats,
  .areas-grid {
    grid-template-columns: 1fr;
  }
}

</style>
