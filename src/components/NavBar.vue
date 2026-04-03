<template>
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top main-nav">
    <div class="container-fluid main-nav__container">
        <button class="navbar-toggler main-nav__toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse main-nav__menu" id="navbarToggler">
            <router-link class="navbar-brand main-nav__brand" to="/">
                <img class="main-nav__logo" :src="logo" alt="CloudSync"/>
            </router-link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 main-nav__list">
                <li class="nav-item main-nav__item">
                  <router-link class="nav-link main-nav__link" to="/" active-class="active">
                    Home
                  </router-link>
                </li>
                <li class="nav-item main-nav__item">
                  <router-link class="nav-link main-nav__link" to="/about" active-class="active">
                    Sobre Nosotros
                  </router-link>
                </li>
                <li class="nav-item main-nav__item">
                  <router-link class="nav-link main-nav__link" to="/contact" active-class="active">
                    Contacto
                  </router-link>
                </li>
                <li v-if="store.state.user" class="nav-item main-nav__item">
                  <router-link class="nav-link main-nav__link" to="/favoritos">
                    Favoritos ⭐
                  </router-link>
                </li>
            </ul>
            <div class="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 mt-3 mt-lg-0 main-nav__actions">
              <button @click="toggleUnidad" class="btn btn-sm btn-light main-nav__btn">
                °{{ unidad }}
              </button>
              <template v-if="!user">
                <router-link to="/login" class="btn btn-sm btn-outline-light main-nav__btn">
                  Login
                </router-link>
                <router-link to="/registro" class="btn btn-sm btn-outline-light main-nav__btn">
                  Registrarse
                </router-link>
              </template>
              <template v-else>
                <span class="main-nav__user">
                  Hola 👋, {{ user.name }}
                </span>
                <button @click="logout" class="btn btn-sm btn-danger main-nav__btn">
                  Salir
                </button>
              </template>
            </div>
        </div>
    </div>
  </nav>
</template>

<script setup>
import logo from '../assets/img/logo-cloudsync.png';
import { useUnidad } from '../services/useUnidad';
import {useStore} from 'vuex';
import {computed, onMounted} from 'vue';
import {useRouter} from 'vue-router';

const {unidad, toggleUnidad}= useUnidad();
const store= useStore();
const router=useRouter();

const user= computed(()=> store.state.user);
const logout=()=>{
  store.dispatch("logout");
  localStorage.setItem("logoutMessage","Sesión cerrada correctamente");
  router.push("/login");
};

onMounted(()=>{
  if(store.state.user && store.state.user.email){
    store.dispatch("cargarFavoritos");
  }
});
</script>

<style scoped>
.main-nav {
  background-color: rgba(47, 93, 140, 0.5);
  font-size: 16px;
  backdrop-filter: blur(6px);
  padding: 8px 0;
}
.main-nav__toggler {
  border: none;
}
.main-nav__logo {
  max-height: 40px;
  width: auto;
}
.main-nav__list{
  padding-left: 10px;
}
.main-nav__link {
  color: #fff;
  margin-right: 1rem;
}
.main-nav__actions{
  padding-right: 10px;
}
.main-nav__btn{
  border-radius: 20px;
  font-size: 0.85rem;
  padding: 4px 10px;
}
.main-nav__btn:hover{
  transform: scale(1.05);
  transition:0.2s;
}
.main-nav__user{
  color:#fff;
  font-size: 0.9rem;
  margin: 0 5px;
  white-space: nowrap;
}
</style>