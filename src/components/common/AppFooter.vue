<template>
  <footer class="footer">
    <div class="footer-inner">

      <!-- MARKA -->
      <div class="footer-col brand">
        <div class="footer-logo">
  <img src="/assets/logo/logotorun.png" alt="Torunlar Yapı İzolasyon" />
</div>
        <p>
          Torunlar Yapı İzolasyon Malzemeleri<br />
          İnşaat Sanayi ve Ticaret Limited Şirketi,<br />
          yapı ve izolasyon alanında kaliteli malzeme ve
          uzun ömürlü çözümler sunar.
        </p>
      </div>

      <!-- HIZLI LİNKLER -->
      <div class="footer-col">
        <h4>Kurumsal</h4>
        <ul>
          <li><RouterLink to="/">Ana Sayfa</RouterLink></li>
          <li><RouterLink to="/corporate">Kurumsal</RouterLink></li>
          <li><RouterLink to="/products">Ürünler</RouterLink></li>
          <li><RouterLink to="/solutions">Çözümler</RouterLink></li>
          <li><RouterLink to="/contact">İletişim</RouterLink></li>

        </ul>
      </div>

      <!-- FAALİYET ALANLARI -->
      <div class="footer-col">
        <h4>Faaliyet Alanları</h4>
        <ul>
          <li>Isı Yalıtımı</li>
          <li>Su Yalıtımı</li>
          <li>Çatı Sistemleri</li>
          <li>Yapı Kimyasalları</li>
        </ul>
      </div>

      <!-- İLETİŞİM -->
      <div class="footer-col">
        <h4>İletişim</h4>
       <ul class="footer-contact">

  <li>
    <i class="pi pi-phone icon"></i>
    <span>0216 521 84 11</span>
  </li>
  <li>
    <i class="pi pi-phone icon"></i>
    <span>0216 412 74 14</span>
  </li>
  <li>
    <i class="pi pi-mobile icon"></i>
    <span>0532 495 17 56</span>
  </li>
  <li>
    <i class="pi pi-envelope icon"></i>
    <span>trnyapi@gmail.com</span>
  </li>
  <li>
    <i class="pi pi-map-marker icon"></i>
    <span>
      Atakent Mahallesi<br />
      Alemdağ Caddesi No: 354/A<br />
      Ümraniye / İstanbul
    </span>
  </li>
</ul>


      </div>

    </div>

    <!-- ALT BAR -->
    <div class="footer-bottom">
      © 2026 Torunlar Yapı İzolasyon Malzemeleri İnşaat Sanayi ve Ticaret Ltd. Şti.
      Tüm hakları saklıdır.
    </div>
  </footer>
</template>


<style scoped>
.footer {
  background: var(--brand-secondary);
  color: #ffffff;
  margin-top: 4rem;
}

.footer-inner {
  max-width: 1200px;
  margin: auto;
  padding: 3rem 1.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.2fr;
  gap: 3rem;
}

/* MARKA */
.brand h3 {
  font-size: 1.6rem;
  letter-spacing: 1.5px;
  margin-bottom: 1rem;
  color: #ffffff;
}

.brand p {
  font-size: 0.95rem;
  line-height: 1.6;
  color: #d0d0d0;
}
.footer-logo {
  display: flex;
  align-items: center;
  margin-left: -32px;   /* 👈 sola kaydır (−10 / −20 / −30 deneyebilirsin) */
}

.footer-logo img {
  height: 100px;         /* 👈 boyu biraz düşürdük */
  width: 200px;         /* 👈 ENİNE büyütme burada */
  object-fit: contain;  /* 👈 logo ezilmez */
}

/* KOLON BAŞLIKLARI */
.footer-col h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #ffffff;
}

/* LİSTELER */
.footer-col ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-col li {
  margin-bottom: 0.6rem;
  font-size: 0.9rem;
  color: #d0d0d0;
}

/* LINKLER */
.footer-col a {
  color: #d0d0d0;
  text-decoration: none;
}

.footer-col a:hover {
  color: var(--brand-primary);
}

/* İLETİŞİM */
.contact li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* ALT BAR */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem;
  text-align: center;
  font-size: 0.85rem;
  color: #b0b0b0;
}
.contact li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
}

.contact .icon {
  color: var(--brand-primary);
  font-size: 1.1rem;
  line-height: 1.4;
  margin-top: 2px;
}

.contact span {
  color: #d0d0d0;
  font-size: 0.9rem;
}

.footer-contact li {
  display: flex;
  align-items: flex-start;
  gap: 0.7rem;
}

.footer-contact .icon {
  color: var(--brand-primary);
  font-size: 1.1rem;
  line-height: 1.4;
  margin-top: 2px;
}

.footer-contact span {
  color: #d0d0d0;
  font-size: 0.9rem;
}



/* RESPONSIVE */
@media (max-width: 900px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 600px) {
  .footer-inner {
    grid-template-columns: 1fr;
  }
}
</style>
