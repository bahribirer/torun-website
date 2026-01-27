<template>
  <section class="corporate">

    <!-- HERO SECTION REDESIGNED -->
    <div class="corporate-hero">
      <div class="hero-container">
        <div class="hero-card">
          <div class="hero-image" :style="{ backgroundImage: `url('/assets/kurumsal/header1.jpg')` }"></div>
          <div class="hero-badge">Kurumsal</div>
        </div>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="corporate-content">

      <!-- ABOUT SECTION -->
      <section class="about">
        <div class="about-text">
          <h2>Hakkımızda</h2>
          <div class="description">
            <p>
              Emre Torun tarafından kurulan <strong>Torunlar Yapı İnşaat</strong>, yapı izolasyonu ve yapı malzemeleri alanında <strong>30 yılı aşkın</strong> sektör tecrübesine sahip köklü bir firmadır. Uzun yıllar Karaköy Perşembe Pazarı’nda faaliyet gösteren firmamız, günümüzde hizmetlerini Anadolu Yakası Ümraniye’de sürdürmektedir.
            </p>
            <p>
              Torunlar Yapı; kalite, güvenilirlik ve süreklilik ilkeleri doğrultusunda bireysel ve kurumsal müşterilerine profesyonel çözümler sunmayı hedeflemektedir. Geniş ürün portföyümüz kapsamında; su yalıtım ürünlerinde <strong>BTM, Isonem, Heller ve Vesline</strong>; çatı kaplamaları ve ısı yalıtımında <strong>BTM</strong>; hırdavat grubunda <strong>SGS</strong> markasına ait tüm ürünler ve vida grupları; yapı kimyasallarında <strong>Weber ve Isonem</strong>; ayrıca inşaat malzemeleri ve alçıpan ürün grupları ile hizmet vermekteyiz.
            </p>
            <p>
              Sektördeki gelişmeleri yakından takip eden yaklaşımımız, güçlü tedarikçi ağımız ve müşteri odaklı hizmet anlayışımızla Ümraniye merkezli olarak İstanbul genelinde güvenilir ve sürdürülebilir çözümler sunmaya devam ediyoruz.
            </p>
          </div>
        </div>

        <div class="about-image">
          <img src="/assets/kurumsal/header2.jpeg" alt="Torunlar Yapı Kurumsal" />
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

      <!-- ACTIVITY AREAS -->
      <section class="areas-section">
        <div class="areas-header">
          <h2>Faaliyet Alanlarımız</h2>
          <p>Geniş ürün yelpazemizle inşaat ve izolasyon projelerinizin her aşamasında yanınızdayız.</p>
        </div>

        <div class="areas-list">
          <div class="area-item">
            <span class="area-dot"></span>
            <div class="area-info">
              <h3>Su Yalıtımı</h3>
              <p>Temelden çatıya, en zorlu koşullara dayanıklı su yalıtım çözümleri.</p>
            </div>
          </div>
          <div class="area-item">
            <span class="area-dot"></span>
            <div class="area-info">
              <h3>Isı Yalıtımı</h3>
              <p>Enerji tasarrufu sağlayan, yüksek performanslı mantolama ve yalıtım sistemleri.</p>
            </div>
          </div>
          <div class="area-item">
            <span class="area-dot"></span>
            <div class="area-info">
              <h3>Çatı Kaplamaları</h3>
              <p>Estetik ve dayanıklı çatı örtüleri, membran ve koruyucu sistemler.</p>
            </div>
          </div>
          <div class="area-item">
            <span class="area-dot"></span>
            <div class="area-info">
              <h3>Yapı Kimyasalları</h3>
              <p>Seramik yapıştırıcılar, derz dolgular ve özel tamir harçları.</p>
            </div>
          </div>
          <div class="area-item">
            <span class="area-dot"></span>
            <div class="area-info">
              <h3>Hırdavat & İnşaat</h3>
              <p>SGS kalitesiyle hırdavat, el aletleri ve temel inşaat malzemeleri.</p>
            </div>
          </div>
          <div class="area-item">
            <span class="area-dot"></span>
            <div class="area-info">
              <h3>Endüstriyel Ürünler</h3>
              <p>Fabrika ve tesisler için özel zemin kaplama ve koruma ürünleri.</p>
            </div>
          </div>
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
  padding-bottom: 4rem;
}

/* HERO REDESIGNED */
.corporate-hero {
  background: linear-gradient(to bottom, #f8f8f8, #ffffff);
  padding: 4rem 1.5rem 2rem;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-card {
  position: relative;
  height: 400px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.hero-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.8s ease;
}

.hero-card:hover .hero-image {
  transform: scale(1.05);
}

.hero-badge {
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  padding: 0.6rem 1.5rem;
  border-radius: 100px;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--brand-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

/* CONTENT CONTAINER */
.corporate-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

/* ABOUT SECTION */
.about {
  background: #ffffff;
  padding: 4rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.05);
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
}

.about-text h2 {
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  position: relative;
}

.about-text h2::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 50px;
  height: 3px;
  background: var(--brand-primary);
  border-radius: 2px;
}

.description {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.description p {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #444;
}

.about-image {
  width: 100%;
  height: 480px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}

.about-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* VALUES SECTION */
.values {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.value-card {
  background: #fcfcfc;
  padding: 2.5rem 1.5rem;
  border-radius: 16px;
  border: 1px solid #f0f0f0;
  text-align: center;
  transition: all 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
  border-color: var(--brand-primary);
}

.value-card .icon {
  font-size: 2.2rem;
  margin-bottom: 1rem;
  display: block;
}

.value-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
}

/* ACTIVITY AREAS */
.areas-section {
  padding: 1rem 0;
}

.areas-header {
  text-align: center;
  margin-bottom: 3rem;
}

.areas-header h2 {
  font-size: 2.2rem;
  margin-bottom: 0.8rem;
}

.areas-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.area-item {
  display: flex;
  gap: 1.2rem;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 16px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
}

.area-item:hover {
  background: #ffffff;
  border-color: #eee;
  box-shadow: 0 10px 30px rgba(0,0,0,0.04);
}

.area-dot {
  width: 10px;
  height: 10px;
  background: var(--brand-primary);
  border-radius: 50%;
  margin-top: 6px;
  flex-shrink: 0;
}

.area-info h3 {
  font-size: 1.2rem;
  margin-bottom: 0.4rem;
}

/* CTA */
.corporate-cta {
  background: var(--brand-primary);
  color: #ffffff;
  padding: 4rem 2rem;
  border-radius: 24px;
  text-align: center;
}

.corporate-cta h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}

.cta-btn {
  display: inline-block;
  padding: 1rem 3rem;
  background: #ffffff;
  color: var(--brand-primary);
  border-radius: 999px;
  font-weight: 700;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.cta-btn:hover {
  transform: scale(1.03);
}

/* RESPONSIVE */
@media (max-width: 1000px) {
  .hero-card {
    height: 300px;
  }

  .about {
    grid-template-columns: 1fr;
    padding: 2.5rem;
    gap: 2.5rem;
  }
  
  .about-image {
    height: 350px;
    order: -1;
  }
}

@media (max-width: 768px) {
  .corporate-hero {
    padding-top: 2rem;
  }
  
  .hero-card {
    height: 240px;
  }

  .corporate-content {
    gap: 3rem;
  }
  
  .values, .areas-list {
    grid-template-columns: 1fr;
  }
}
</style>
