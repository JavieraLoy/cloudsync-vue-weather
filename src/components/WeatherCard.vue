<template>
  <div class="weather-card shadow-sm">
    <img :src="imageUrl" class="weather-card__image" :alt="ciudad.name">
    <div class="weather-card__body">
      <h5 class="weather-card__title">{{ ciudad.name }}</h5>
      <p class="weather-card__summary">
        🌡️ <strong>{{convertirTemp(ciudad.temp)}}°{{ unidad }}</strong> - {{ ciudad.estado }}
      </p>
      <div class="d-flex gap-2 mt-3">
        <router-link 
        :to="{name: 'cityDetail', params: {name: desnormalizarNombre(ciudad.name)}}"
        class="btn btn-outline-primary btn-sm w-50"
        >
          Detalle de localidad
        </router-link>
        <button
        @click="toggleFavorito"
        class="btn btn-sm w-50"
        :class="esFavorito ? 'btn-danger': 'btn-outline-primary'"
        >
          {{ esFavorito ? '❌ Quitar de favoritos': '⭐ Agregar a favoritos' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { cityImages } from "../services/cityImages";
import defaultImg from "../assets/img/default-weather.png";
import {useUnidad} from '../services/useUnidad';
import {useStore} from 'vuex';
import {useRouter} from 'vue-router';

const router= useRouter();
const store= useStore();
const esFavorito= computed(()=> { 
  if(!store.state.user) return false;
  
  return store.state.favoritos.some(c=> c.name.toLowerCase() === props.ciudad.name.toLowerCase());
});
const toggleFavorito= ()=> {
  if(!store.state.user){
    router.push('/login');
    return;
  }
  if(esFavorito.value){
    store.dispatch("eliminarFavorito", props.ciudad.name);
  }else{
    store.dispatch("agregarFavorito", props.ciudad);
  }
};

const props = defineProps({
  ciudad: Object
});
const {unidad, convertirTemp}= useUnidad();

const desnormalizarNombre = (nombre) => {
  return nombre 
    .replace(/-/g, "")
    .replace(/\b\w/g, l=> l.toUpperCase());
};

const normalizarNombre= (nombre)=>{
  return nombre
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/\s+/g,"-");
}

const imageUrl = computed(() => {
  const key= normalizarNombre(props.ciudad.name);
  return cityImages[key] || defaultImg;
});
</script>

<style scoped>
.weather-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}
.weather-card__image {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
.weather-card__body {
  padding: 16px;
  text-align: center;
}
.weather-card__title {
  font-weight: 700;
  margin-bottom: 8px;
}
.weather-card__summary {
  margin-bottom: 8px;
}

</style>
