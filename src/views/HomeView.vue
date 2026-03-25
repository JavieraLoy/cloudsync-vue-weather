<template>
  <HeroHeader @agregar-ciudad="agregarCiudad"/>
  <CityList :ciudades="ciudades"/>
</template>

<script setup>
import {ref} from 'vue';
import HeroHeader from '../components/HeroHeader.vue';
import CityList from '../components/CityList.vue';


const ciudades= ref([]);

const agregarCiudad= (nuevaCiudad)=>{
  const existe= ciudades.value.some(c=> c.name.toLowerCase() === nuevaCiudad.name.toLowerCase());
  
  if(!existe){
    ciudades.value.push(nuevaCiudad);
  }
};

</script>