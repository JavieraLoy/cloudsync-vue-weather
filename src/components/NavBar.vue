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
            </ul>
        </div>
    </div>
  </nav>
</template>

<script setup>
import logo from '../assets/img/logo-cloudsync.png';
</script>

<style scoped>
.main-nav {
  background-color: rgba(47, 93, 140, 0.5);
}
.main-nav__toggler {
  border: none;
}
.main-nav__logo {
  max-height: 50px;
  width: auto;
}
.main-nav__list{
  padding-left: 25px;
}
.main-nav__link {
  color: #fff;
  margin-right: 1rem;
}
</style>