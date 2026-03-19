<template>
  <section class="locations">
    <div class="container">
      <div class="locations__header text-center">
        <h2 class="locations__title">
          Clima en las principales ciudades de Chile
        </h2>
        <p class="locations__subtitle">
          Consulta el estado del tiempo actual y el pronóstico semanal de las localidades más importantes del país.
        </p>
      </div>
      <div class="row g-4 locations__grid">
        <div 
          v-for="ciudad in ciudades" 
          :key="ciudad.name"
          class="col-lg-4 col-md-6 mb-3"
        >
          <WeatherCard :ciudad="ciudad" />
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import WeatherCard from "../components/WeatherCard.vue";
import { obtenerClimaActual } from "../services/apiWeatherService";

const ciudadesIniciales = [
  "Santiago",
  "Valparaiso",
  "Concepcion"
];

const ciudades = ref([]);

const cargarCiudades = async () => {
  const promesas = ciudadesIniciales.map(ciudad =>
    obtenerClimaActual(ciudad)
  );

  const resultados = await Promise.all(promesas);

  ciudades.value = resultados.map(data => ({
    name: data.name,
    temp: Math.round(data.main.temp),
    humedad: data.main.humidity,
    viento: Math.round(data.wind.speed * 3.6),
    estado: data.weather[0].description,
    iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }));
};

onMounted(cargarCiudades);
</script>

<style scoped>
.locations {
  padding: 48px 0;
}
.locations__header {
  margin-top: 48px;
}
.locations__title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 8px;
}
.locations__subtitle {
  color: #6c757d;
}
</style>