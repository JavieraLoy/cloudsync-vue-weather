<template>
  <footer class="site-footer text-white pt-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-md-4 site-footer__brand">
          <img class="site-footer__logo mb-3" :src="logo" alt="cloudsync logo">
          <p class="site-footer__description small">
            Información climática precisa y actualizada para ayudarte a planificar tu día en cualquier lugar de Chile.
          </p>
        </div>
        <div class="col-md-4 site-footer__nav">
          <h6 class="site-footer__title fw-semibold">Explorar</h6>
          <ul class="site-footer__list list-unstyled">
            <li><router-link to="/" class="site-footer__link">Home</router-link></li>
            <li><router-link to="/about" class="site-footer__link">About us</router-link></li>
            <li><router-link to="/" class="site-footer__link">Detalle Clima</router-link></li>
          </ul>
        </div>
        <div class="col-md-4 site-footer__social">
          <h6 class="site-footer__title fw-semibold">Síguenos</h6>
          <div class="site-footer__icons d-flex gap-3">
            <a href="#" class="site-footer__icon">
              <i class="fab fa-instagram fa-lg"></i>
            </a>
            <a href="#" class="site-footer__icon">
              <i class="fab fa-twitter fa-lg"></i>
            </a>
            <a href="#" class="site-footer__icon">
              <i class="fab fa-youtube fa-lg"></i>
            </a>
          </div>
        </div>
      </div>
      <hr class="site-footer__divider my-4">
      <div class="site-footer__copy text-center small pb-3">
        © 2025 CloudSync · Todos los derechos reservados
      </div>
    </div>
  </footer>
</template>

<script setup>
import logo from "../assets/img/logo-cloudsync.png";
</script>
<style scoped>
.site-footer {
  background-color: rgba(56, 85, 116, 0.5);
}
.site-footer__logo {
  max-width: 70px;
}
.site-footer__description {
  color: rgba(255, 255, 255, 0.85);
}
.site-footer__link {
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
}
.site-footer__link:hover {
  color: #406bce;
}
.site-footer__icon {
  color: #406bce;
}
.site-footer__icon:hover {
  color: rgb(104, 138, 216);
}

</style>
