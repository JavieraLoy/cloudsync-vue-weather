<template>
  <header class="hero hero--weather" :style="{backgroundImage:`linear-gradient(rgba(15, 23, 42, 0.3), rgba(15, 23, 42, 0.3)), url(${heroImg})`}">
    <div class="container hero__container">
      <div class="row">
        <div class="col-lg-6 hero__content">
          <h1 class="hero__title">Consulta el clima en tiempo real</h1>
          <p class="hero__subtitle">
            Descubre el pronóstico actual y extendido de cualquier ciudad
            en segundos.
          </p>
          <div class="weather-search">
            <div class="weather-search__group input-group">
              <input v-model="ciudad" @keyup.enter="buscarCiudad" type="text" class="form-control weather-search__input" placeholder="Buscar ciudad..."/>
              <button class="btn btn-primary rounded-end weather-search__btn" @click="buscarCiudad">Buscar</button>
            </div>
            <div v-if="resultado" class="weather-search__result mt-3">
              <button class="weather-search__close" @click="resultado = null">Cerrar</button>
              <div class="weather-search__text">
                <div class="d-flex align-items-center gap-3">
                  <img :src="resultado.iconUrl" style="width:80px;" />
                  <div>
                    <strong>{{ resultado.name }}</strong><br>
                    {{ convertirTemp(resultado.temp) }}°{{ unidad }} - {{ resultado.estado }}<br>
                    💧 {{ resultado.humedad }}%<br>
                    🌬️ {{ resultado.viento }} km/h
                  </div>
                </div>
              </div>
            </div>
            <div v-if="status" class="mt-2 small text-light">{{ status }}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import heroImg from '../assets/img/weather-hero.jpg';
import { obtenerClimaActual } from "../services/apiWeatherService";
import {useUnidad} from '../services/useUnidad';

const {unidad, convertirTemp} = useUnidad();
const emit= defineEmits(["agregar-ciudad"]);
const ciudad = ref("");
const resultado = ref(null);
const status = ref("");

const buscarCiudad = async () => {
  if (!ciudad.value.trim()) {
    status.value = "⚠️ Ingresa una ciudad";
    return;
  }

  try {
    status.value = "⏳ Cargando...";
    resultado.value = null;

    const data = await obtenerClimaActual(ciudad.value);

    const ciudadProcesada = {
      name: data.name,
      temp: Math.round(data.main.temp),
      humedad: data.main.humidity,
      viento: Math.round(data.wind.speed * 3.6),
      estado: data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };
    resultado.value= ciudadProcesada;
    emit("agregar-ciudad", ciudadProcesada);
    console.log("emit ejecutado", ciudadProcesada);
    status.value = "";

  } catch (error) {
    status.value = "❌ Ciudad no encontrada";
  }
};
</script>
<style scoped>
.hero {
  min-height: 100vh;
  padding-top: 90px;
  display: flex;
  align-items: center;
  color: #fff;
}
.hero--weather {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.hero__container {
  width: 100%;
}
.hero__content {
  max-width: 600px;
}
.hero__title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 16px;
}
.hero__subtitle {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 24px;
}
.weather-search {
  position: relative;
  max-width: 500px;
}
.weather-search__result {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #406bce;
  color: #fff;
  padding: 16px;
  margin-top: 4px;
  border-radius: 0 0 12px 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.35);
  z-index: 10;
}
.weather-search__close {
  background: none;
  border: none;
  color: #fff;
  position: absolute;
  top: 4px;
  right: 8px;
  font-size: 1.1rem;
  cursor: pointer;
}

</style>