<template>
  <section class="contact">

    <!-- HERO -->
    <div class="contact-hero">
      <span class="section-label">Bize Ulaşın</span>
      <h1>İletişim</h1>
      <p>
        Projeleriniz için doğru çözümü birlikte belirleyelim.
        Bizimle iletişime geçin.
      </p>
    </div>

    <!-- CONTENT -->
    <div class="contact-content">

      <!-- INFO CARD -->
      <div class="contact-card info-card">
        <div class="info-header">
          <h3>Torunlar Yapı İzolasyon Malzemeleri</h3>
          <span>İnşaat Sanayi ve Ticaret Limited Şirketi</span>
        </div>

        <div class="info-list">

          <div class="info-item">
            <div class="info-icon">📞</div>
            <div class="info-text">
              <strong>Telefon</strong>
              <a href="tel:+902165218411">0216 521 84 11</a>
              <a href="tel:+902164127414">0216 412 74 14</a>
              <a href="tel:+905324951756">0532 495 17 56</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">✉️</div>
            <div class="info-text">
              <strong>E-posta</strong>
              <a href="mailto:trnyapi@gmail.com">trnyapi@gmail.com</a>
            </div>
          </div>

          <div class="info-item">
            <div class="info-icon">📍</div>
            <div class="info-text">
              <strong>Adres</strong>
              <span>
                Atakent Mahallesi<br />
                Alemdağ Caddesi No: 354/A<br />
                Ümraniye / İstanbul
              </span>
            </div>
          </div>

        </div>

        <a
          class="contact-btn"
          href="https://www.google.com/maps?q=Atakent%20Mahallesi%20Alemdağ%20Caddesi%20354/A%20Ümraniye%20İstanbul"
          target="_blank"
        >
          📍 Yol Tarifi Al
        </a>
      </div>

      <!-- MAP CARD -->
      <div class="contact-card map-card">
        <iframe
          src="https://www.google.com/maps?q=Atakent%20Mahallesi%20Alemdağ%20Caddesi%20354/A%20Ümraniye%20İstanbul&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  </section>
</template>

<style scoped>
/* PAGE */
.contact {
  background: #ffffff;
  padding-bottom: 6rem;
}

/* HERO */
.contact-hero {
  background: linear-gradient(135deg, #f6f6f6, #ffffff);
  text-align: center;
  padding: 5.5rem 1.5rem 4.5rem;
}

.section-label {
  display: block;
  margin-bottom: 0.8rem;
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--brand-primary);
}

.contact-hero h1 {
  font-size: 2.8rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.contact-hero p {
  max-width: 540px;
  margin: auto;
  font-size: 1rem;
  color: var(--text-color-secondary);
}

/* CONTENT */
.contact-content {
  max-width: 1200px; /* site geneliyle uyumlu */
  margin: -3rem auto 0;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
}


/* CARD BASE */
.contact-card {
  background: #ffffff;
  border-radius: 18px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.08);
  overflow: hidden;
}

/* INFO CARD */
.info-card {
  padding: 3.2rem;
}

.info-header {
  margin-bottom: 2.8rem;
}

.info-header h3 {
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
}

.info-header span {
  font-size: 0.9rem;
  color: var(--text-color-secondary);
}

/* INFO LIST */
.info-list {
  display: flex;
  flex-direction: column;
  gap: 2.2rem;
}

.info-item {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.info-icon {
  width: 52px;
  height: 52px;
  background: rgba(198, 40, 40, 0.1);
  color: var(--brand-primary);
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  flex-shrink: 0;
}

.info-text strong {
  display: block;
  margin-bottom: 0.4rem;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--text-color-secondary);
}

.info-text a,
.info-text span {
  display: block;
  color: var(--text-color);
  text-decoration: none;
  margin-bottom: 0.3rem;
}

.info-text a:hover {
  color: var(--brand-primary);
}

/* CTA */
.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 3rem;
  padding: 1rem 2.8rem;
  background: var(--brand-primary);
  color: #ffffff;
  text-decoration: none;
  border-radius: 12px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.contact-btn:hover {
  background: #a51f1f;
  transform: translateY(-2px);
}

/* MAP */
.map-card {
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 30px 60px rgba(0,0,0,0.08);
}

.map-card iframe {
  width: 100%;
  height: 520px; /* BURASI ÖNEMLİ */
  border: none;
}


/* RESPONSIVE */
@media (max-width: 600px) {
  .contact-hero h1 {
    font-size: 2.2rem;
  }

  .info-card {
    padding: 2.4rem;
  }

  .map-card iframe {
    height: 340px;
  }
}
</style>
