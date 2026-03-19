<template>
  <section class="about">
    <div class="container about__container">
      <div class="row align-items-center">
        <div class="col-md-6 mb-4 mb-md-0">
          <img 
            :src="aboutImg" 
            alt="Visualización del clima" 
            class="about__image img-fluid rounded shadow"
          >
        </div>
        <div class="col-md-6 about__content">
          <h2 class="about__title">
            Hola, somos <span class="about__highlight">CloudSync</span>
          </h2>
          <p class="about__text">
            En CloudSync transformamos datos meteorológicos en información clara y útil para tu día a día. 
            Analizamos el clima en tiempo real, combinando tecnología y precisión para ayudarte a planificar mejor tus actividades, 
            anticiparte a los cambios del tiempo y tomar decisiones informadas, estés donde estés.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import aboutImg from '../assets/img/about-weather.png';
</script>

<style scoped>
.about {
  background-color: rgba(155, 191, 230, 0.5);
  min-height: 100vh;
  display:flex;
  align-items: center;
  padding-top: 50px;
}

.about__title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
}
.about__highlight {
  color: #406bce;
}
.about__text {
  font-size: 1.1rem;
  color: #6c757d;
  line-height: 1.6;
}
</style>