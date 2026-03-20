<script setup>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

</script>

<template>
  <NavBar/>
  <main class="main-content">
    <router-view></router-view>
  </main>
  <Footer></Footer>
</template>
