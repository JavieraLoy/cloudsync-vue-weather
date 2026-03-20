<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { obtenerClimaActual, obtenerPronostico } from '../services/apiWeatherService';
import { adaptarPronostico } from '../services/weatherAdapter.js';
import { analizarPronostico} from '../services/statsCalculator.js';
import { generarAlertas } from '../services/alertsService.js';
import { cityImages} from '../services/cityImages.js';
import defaultImg from '../assets/img/default-weather.png';
import {useUnidad} from '../services/useUnidad.js';

const route= useRoute();
const {unidad, convertirTemp}= useUnidad();
const ciudad= ref(null);
const pronostico= ref([]);
const stats= ref(null);
const alertas= ref([]);
const status= ref("");

const normalizarNombre= (nombre)=>{
  return nombre
  .normalize("NFD")
  .replace(/[\u0300-\u036f]/g, "")
  .toLowerCase()
  .replace(/\s+/g,"-");
}
const obtenerImagen = (nombre) => {
  const key= normalizarNombre(nombre);
  return cityImages[key] || defaultImg;
};

const cargarDatos= async() =>{
  try{
    status.value= "⌛ Cargando...";
    const nombreCiudad= route.params.name;
    const clima= await obtenerClimaActual(nombreCiudad);
    const pronosticoApi= await obtenerPronostico(nombreCiudad);
    const pronosticoAdaptado= adaptarPronostico(pronosticoApi);
    const statsCalculadas= analizarPronostico(pronosticoAdaptado);

    const datosCiudad= {
      name: clima.name,
      temp: Math.round(clima.main.temp),
      humedad: clima.main.humidity,
      viento: Math.round(clima.wind.speed * 3.6),
      estado: clima.weather[0].description
    };

    ciudad.value= datosCiudad;
    pronostico.value= pronosticoAdaptado;
    stats.value= statsCalculadas;
    alertas.value= generarAlertas(datosCiudad, statsCalculadas);
    status.value= "";

  }catch(error){
    status.value= "❌ Error al cargar datos";
  } 
};
onMounted(cargarDatos);
</script>

<template>
  <section class="city-detail__container container py-5">
    <div v-if="status" class="status-container">
      {{ status }}
    </div>
    <div v-if="ciudad">
      <div class="city-detail__hero mb-4">
        <img :src="obtenerImagen(ciudad.name)" class="city-detail__image" />
        <div class="city-detail__overlay">
          <h2>{{ ciudad.name }}</h2>
          <p>{{ convertirTemp(ciudad.temp) }}°{{ unidad }} - {{ ciudad.estado }}</p>
        </div>
      </div>
      <div class="row text-center mb-4">
        <div class="col">Humedad: 💧 {{ ciudad.humedad }}%</div>
        <div class="col">Viento: 🌬️ {{ ciudad.viento }} km/h</div>
        <div class="col">T° Min: 📉 {{ convertirTemp(stats?.tempMin)}}°{{ unidad }}</div>
        <div class="col">T° Max: 📈 {{ convertirTemp(stats?.tempMax) }}°{{ unidad }}</div>
        <div class="col">T° Promedio: 📊 {{convertirTemp(stats?.promedio )}}°{{ unidad }}</div>
      </div>
      <div class="text-center mb-4 text-primary">
        {{ stats?.resumen }}
      </div>
      <div v-if="alertas.length" class="alert alert-danger">
        <strong>⚠️ Alertas:</strong>
        <ul class="mb-0">
          <li v-for="(a, i) in alertas" :key="i">{{ a }}</li>
        </ul>
      </div>
      <div class="card p-3 shadow-sm">
        <h5>📅 Pronóstico semanal</h5>
        <ul class="list-group list-group-flush">
          <li
            v-for="(dia, i) in pronostico"
            :key="i"
            class="list-group-item"
          >
            {{ dia.dia }}: {{ dia.estado }}
            (Max: {{convertirTemp(dia.max)}}°{{unidad}}/ Min: {{ convertirTemp(dia.min) }}°{{ unidad }})
          </li>
        </ul>
      </div>
      <div class="d-flex justify-content-end mt-4">
        <router-link to="/" class="btn btn-outline-primary city-detail__back">
          ⬅️ Volver al inicio
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.status-container{
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #6c757d;
  font-size: 1rem;
}
.city-detail__container{
 max-width: 900px;
 margin:0 auto;
}
.city-detail__hero {
  padding-top: 60px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}
.city-detail__image {
  width: 100%;
  max-height: 400px;
  border-radius: 16px;
  object-fit: cover;
  object-position: center;
}
.city-detail__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 16px;
  background: linear-gradient(transparent, rgba(0,0,0,0.7));
  color: white;
}
.city-detail__back{
  border-radius: 20px;
  padding: 8px 16px;
  font-weight: 500;
  transition: all 0.3s ease;
}
.city-detail__back:hover{
  transform: translateX(-4px);
}
</style>