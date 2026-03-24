<template>
  <HeroHeader @agregar-ciudad="agregarCiudad"/>
  <CityList :ciudades="ciudades"/>
</template>

<script setup>
import {ref} from 'vue';
import HeroHeader from '../components/HeroHeader.vue';
import CityList from '../components/CityList.vue';
import {useStore} from 'vuex';

const store= useStore();
console.log(store.getters.isAuth);

const ciudades= ref([]);

const agregarCiudad= (nuevaCiudad)=>{
  console.log("llego a home", nuevaCiudad);
  const existe= ciudades.value.some(c=> c.name.toLowerCase() === nuevaCiudad.name.toLowerCase());
  
  if(!existe){
    ciudades.value.push(nuevaCiudad);
  }
};

</script>