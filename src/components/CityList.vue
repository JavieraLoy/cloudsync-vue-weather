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
          v-for="(ciudad, i) in ciudadesFinales" 
          :key="i"
          class="col-lg-4 col-md-6 mb-3"
        >
          <WeatherCard :ciudad="ciudad" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import WeatherCard from "../components/WeatherCard.vue";
import { obtenerClimaActual } from "../services/apiWeatherService";

const props= defineProps({
  ciudades: {
    type: Array,
    default: ()=> []
  }
});

const ciudadesIniciales = [
  "Santiago",
  "Antofagasta",
  "Vina del mar",
  "Valparaiso",
  "Concepcion"
];

const ciudadesBase = ref([]);

const cargarCiudades = async () => {
  const promesas = ciudadesIniciales.map(ciudad =>
    obtenerClimaActual(ciudad)
  );

  const resultados = await Promise.all(promesas);

  ciudadesBase.value = resultados.map(data => ({
    name: data.name,
    temp: Math.round(data.main.temp),
    humedad: data.main.humidity,
    viento: Math.round(data.wind.speed * 3.6),
    estado: data.weather[0].description,
    iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  }));
};
onMounted(cargarCiudades);

const ciudadesFinales= computed(()=>{
  const todas= [...ciudadesBase.value, ...props.ciudades];
  const unicas= [];
  const nombres= new Set();
  for(const c of todas){
    const nombre= c.name.toLowerCase();
    if(!nombres.has(nombre)){
      nombres.add(nombre);
      unicas.push(c);
    }
  }
  return unicas;
});

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