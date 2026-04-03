<template>
    <section class="register">
        <div class="container register__container d-flex justify-content-center align-items-center">
            <div class="register__card shadow-sm">
                <h2 class="register__title text-center mb-4">Crear cuenta</h2>
                <div v-if="error" class="alert alert-danger text-center">
                    {{ error }}
                </div>
                <form @submit.prevent="handleRegister">
                    <div class="mb-3">
                        <label class="form-label register__label">Nombre</label>
                        <input v-model.trim="name" type="text" class="form-control register__input" :class="{'is-invalid': submitted && !name}"/>
                        <div class="invalid-feedback">
                            El nombre es obligatorio
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label register__label">Email</label>
                        <input v-model.trim="email" type="email" class="form-control register__input" :class="{'is-invalid': submitted && !email}"/>
                        <div class="invalid-feedback">
                            El email es obligatorio
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="dorm-label register__label">Contraseña</label>
                        <input v-model.trim="password" type="password" class="form-control register__input" :class="{'is-invalid': submitted && !password}"/>
                        <div class="invalid-feedback">
                            La contraseña es obligatoria
                        </div>
                    </div>
                    <button class="btn btn-primary w-100 register__btn">
                        Registrarse
                    </button>
                </form>
                <p class="text-center mt-3 register__text">
                    ¿Ya tienes cuenta?
                    <router-link to="/login" class="register__link">
                        Iniciar sesión
                    </router-link>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import {ref} from 'vue';
import { useStore } from 'vuex';
import {useRouter} from 'vue-router';

const store= useStore();
const router= useRouter();

const name= ref('');
const email= ref('');
const password= ref('');

const error= ref('');
const submitted= ref(false);

const handleRegister= ()=>{
    submitted.value= true;
    error.value= '';

    if(!name.value || !email.value || !password.value){
        error.value= "Todos los campos son obligatorios";
        return;
    }
    const success= store.dispatch("register", {
        name: name.value,
        email: email.value,
        password: password.value
    });
    if(!success){
        error.value= "El usuario ya existe";
    }else{
        router.push("/login");
    }
};
</script>

<style scoped>
.register { 
  padding-top: 120px; 
  min-height: 100vh; 
  background: linear-gradient(
    rgba(155, 191, 230, 0.2), 
    rgba(47, 93, 140, 0.15) ); 
}

.register__container {
  min-height: calc(100vh - 120px); 
} 

.register__card {
  background-color: #fff; 
  padding: 2rem; 
  border-radius: 10px; 
  max-width: 420px; 
  width: 100%; 
}

.register__title { 
  color: #2f5d8c; 
  font-weight: 600; 
}

.register__label {
  font-size: 14px;
  color: #555;
}

.register__input {
  border-radius: 6px;
}

.register__btn {
  background-color: #2f5d8c;
  border: none;
}

.register__btn:hover {
  background-color: #24496e;
}

.register__text {
  font-size: 14px;
}

.register__link {
  color: #2f5d8c;
  font-weight: 500;
  text-decoration: underline;
}
</style>