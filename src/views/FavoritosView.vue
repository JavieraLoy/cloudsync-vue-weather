<template>
    <section class="favoritos">
        <div class="container favoritos__container">
            <div class="favoritos__header text-center">
                <h2 class="favoritos__title">⭐ Tus ciudades favoritas</h2>
                <p class="favoritos__subtitle">Accede rápidamente al clima de las localidades que más te interesan.</p>
            </div>
            <div v-if="favoritos.length > 0" class="row g-4">
                <div 
                  v-for="(ciudad,i) in favoritos"
                  :key="i"
                  class="col-lg-4 col-md-6"
                >
                  <WeatherCard :ciudad="ciudad"/>
                </div>
            </div>
            <div v-else class="favoritos__empty text-center">
                <p>No tienes ciudades en favoritos aún.</p>
                <router-link to="/" class="btn btn-outline-primary mt-3">
                    Volver al inicio
                </router-link>
            </div>
        </div>
    </section>
</template>
<script setup>
import {computed} from 'vue';
import { useStore} from 'vuex';
import WeatherCard from '../components/WeatherCard.vue';

const store= useStore();
const favoritos= computed(()=> store.getters.getFavoritos);
</script>
<style scoped>
.favoritos{
  padding-top: 120px;
  padding-bottom: 60px;
  background-color: rgba(155, 191, 230, 0.2);
  min-height: 100vh;
}
.favoritos__container{
  max-width: 1100px;
}
.favoritos__header{
  margin-bottom: 40px;
}
.favoritos__title{
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 10px;
}
.favoritos__subtitle{
  color: #6c757d;
  font-size: 1.1rem;
}
.favoritos__empty{
  margin-top: 50px;
  color: #6c757d;
}

</style>