<template>
  <section class="solutions">

    <!-- HERO -->
    <div class="solutions-hero">
      <span class="section-label">Çözümlerimiz</span>
      <h1>Projeleriniz İçin Doğru Yapı Çözümleri</h1>
      <p>
        Yapı ve izolasyon süreçlerinde ihtiyaç duyduğunuz ürün, sistem ve
        teknik çözümleri tek noktadan sunuyoruz.
      </p>
    </div>

    <!-- CONTENT -->
    <div class="solutions-content">

      <!-- SOLUTION CARDS -->
      <section class="solution-grid">

        <div class="solution-card">
          <div class="solution-image placeholder">Görsel Alanı</div>
          <h3>Su Yalıtım Çözümleri</h3>
          <p>
            Temel, teras, ıslak hacim ve çatı uygulamaları için uzun ömürlü
            su yalıtım sistemleri sunuyoruz.
          </p>
        </div>

        <div class="solution-card">
          <div class="solution-image placeholder">Görsel Alanı</div>
          <h3>Isı Yalıtım Sistemleri</h3>
          <p>
            Enerji verimliliğini artıran, yapı ömrünü uzatan ısı yalıtım
            çözümleri ile projelerinize değer katıyoruz.
          </p>
        </div>

        <div class="solution-card">
          <div class="solution-image placeholder">Görsel Alanı</div>
          <h3>Çatı Kaplama & İzolasyon</h3>
          <p>
            Shingle, çatı kaplamaları ve alt örtü sistemleriyle dayanıklı
            ve güvenli çatı çözümleri sunarız.
          </p>
        </div>

        <div class="solution-card">
          <div class="solution-image placeholder">Görsel Alanı</div>
          <h3>Yapı Kimyasalları</h3>
          <p>
            Profesyonel uygulamalar için tamir harçları, yapıştırıcılar
            ve özel kimyasal ürün grupları.
          </p>
        </div>

        <div class="solution-card">
          <div class="solution-image placeholder">Görsel Alanı</div>
          <h3>Şantiye & Hırdavat Çözümleri</h3>
          <p>
            Şantiye süreçlerinde ihtiyaç duyulan ekipman, hırdavat
            ve el aletlerini tek noktadan temin edin.
          </p>
        </div>

        <div class="solution-card">
          <div class="solution-image placeholder">Görsel Alanı</div>
          <h3>Proje Bazlı Ürün Danışmanlığı</h3>
          <p>
            Uygulama alanına ve ihtiyaca göre doğru ürün seçimi için
            uzman desteği sağlıyoruz.
          </p>
        </div>

      </section>

      <!-- PROCESS -->
      <section class="process">
        <h2>Nasıl Çalışıyoruz?</h2>

        <div class="process-steps">
          <div class="step">
            <span>01</span>
            <h4>İhtiyaç Analizi</h4>
            <p>Proje gereksinimlerini detaylı şekilde analiz ederiz.</p>
          </div>

          <div class="step">
            <span>02</span>
            <h4>Doğru Ürün Seçimi</h4>
            <p>Uygulamaya en uygun ürün ve sistemi belirleriz.</p>
          </div>

          <div class="step">
            <span>03</span>
            <h4>Tedarik & Teslimat</h4>
            <p>Hızlı ve güvenilir tedarik süreciyle ürünleri ulaştırırız.</p>
          </div>

          <div class="step">
            <span>04</span>
            <h4>Uzun Vadeli Destek</h4>
            <p>Proje sonrası da çözüm ortağınız olmaya devam ederiz.</p>
          </div>
        </div>
      </section>

      <!-- WHY US -->
      <section class="why-solutions">
        <h2>Neden Torunlar Yapı?</h2>
        <div class="why-grid">
          <div class="why-item">✔ Geniş ürün ve marka portföyü</div>
          <div class="why-item">✔ Teknik bilgi ve uygulama tecrübesi</div>
          <div class="why-item">✔ Proje bazlı çözüm yaklaşımı</div>
          <div class="why-item">✔ Güvenilir tedarik ve hızlı teslimat</div>
        </div>
      </section>

      <!-- CTA -->
      <section class="solutions-cta">
        <h2>Projeniz İçin En Doğru Çözümü Belirleyelim</h2>
        <p>
          İhtiyacınıza özel ürün ve sistem çözümleri için bizimle iletişime geçin.
        </p>
        <RouterLink to="/contact" class="cta-btn">
          İletişime Geç
        </RouterLink>
      </section>

    </div>
  </section>
</template>
<style scoped>
.solutions {
  background: #ffffff;
  padding-bottom: 6rem;
}

/* HERO */
.solutions-hero {
  background: linear-gradient(135deg, #f4f4f4, #ffffff);
  text-align: center;
  padding: 6rem 1.5rem 5rem;
}

.section-label {
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--brand-primary);
}

.solutions-hero h1 {
  font-size: 2.8rem;
  margin: 1rem 0;
}

.solutions-hero p {
  max-width: 640px;
  margin: auto;
  color: var(--text-color-secondary);
}

/* CONTENT */
.solutions-content {
  max-width: 1200px;
  margin: -2rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 6rem;
}

/* SOLUTION GRID */
.solution-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}

.solution-card {
  background: #ffffff;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 24px 50px rgba(0,0,0,0.08);
}

.solution-image {
  height: 180px;
  border-radius: 14px;
  margin-bottom: 1.6rem;
}

.placeholder {
  background: linear-gradient(135deg, #e6e6e6, #f2f2f2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}

/* PROCESS */
.process h2 {
  text-align: center;
  margin-bottom: 3rem;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.step {
  background: #f6f6f6;
  padding: 2.2rem;
  border-radius: 16px;
}

.step span {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--brand-primary);
}

/* WHY */
.why-solutions h2 {
  margin-bottom: 2rem;
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

/* CTA */
.solutions-cta {
  background: var(--brand-primary);
  color: #ffffff;
  padding: 4rem;
  border-radius: 24px;
  text-align: center;
}

.cta-btn {
  display: inline-block;
  margin-top: 1.6rem;
  padding: 1rem 2.6rem;
  background: #ffffff;
  color: var(--brand-primary);
  border-radius: 999px;
  font-weight: 600;
  text-decoration: none;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .solution-grid,
  .process-steps {
    grid-template-columns: 1fr;
  }

  .why-grid {
    grid-template-columns: 1fr;
  }
}
</style>

