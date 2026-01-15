<template>
  <section class="hero">
    <div class="hero-inner">

      <!-- SOL -->
      <div class="hero-text">
        <h1>
          Yapı ve İzolasyonda<br />
          <span>Güvenilir Çözümler</span>
        </h1>

        <p>
          Torunlar Yapı, kaliteli malzeme ve uzman kadrosu ile
          uzun ömürlü yapı çözümleri sunar.
        </p>

        <div class="hero-actions">
          <RouterLink to="/solutions" class="btn btn-primary">
            Çözümlerimiz
          </RouterLink>

          <RouterLink to="/contact" class="btn btn-outline">
            İletişime Geç
          </RouterLink>
        </div>
      </div>

      <!-- SAĞ -->
      <div class="hero-visual">
        <div class="visual-box"></div>
      </div>

    </div>
  </section>
</template>


<style scoped>
.hero {
  background: #ffffff;
  padding: 5.5rem 1.5rem;
  position: relative;
}

.hero::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6px;
  background: linear-gradient(
    to right,
    var(--brand-primary),
    var(--brand-accent)
  );
}

.hero-inner {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 4rem;
}

/* TEXT */
.hero-text h1 {
  font-size: 3.2rem;
  line-height: 1.15;
}

.hero-text span {
  color: var(--brand-primary);
}

.hero-text p {
  max-width: 520px;
  margin: 1.8rem 0 3rem;
  font-size: 1.05rem;
  color: var(--text-color-secondary);
}

/* ACTIONS */
.hero-actions {
  display: flex;
  gap: 1.2rem;
}

/* BASE BUTTON */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 2.1rem;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.25s ease;
}

/* PRIMARY */
.btn-primary {
  background: var(--brand-primary);
  color: #ffffff;
  box-shadow: 0 10px 25px rgba(198, 40, 40, 0.25);
}

.btn-primary:hover {
  background: #a51f1f;
  transform: translateY(-2px);
  box-shadow: 0 14px 30px rgba(198, 40, 40, 0.35);
}

/* OUTLINE */
.btn-outline {
  border: 2px solid var(--brand-primary);
  color: var(--brand-primary);
  background: transparent;
}

.btn-outline:hover {
  background: var(--brand-primary);
  color: #ffffff;
  transform: translateY(-2px);
}

/* VISUAL */
.hero-visual {
  position: relative;
}

.visual-box {
  height: 380px;
  border-radius: 8px;
  background: linear-gradient(
    135deg,
    var(--brand-primary),
    var(--brand-accent)
  );
}


</style>
