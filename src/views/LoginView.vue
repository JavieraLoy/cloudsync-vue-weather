<template>
  <section class="login">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="login__box shadow">
        <h2 class="login__title text-center mb-3">Iniciar Sesión</h2>
        <p class="text-center text-muted mb-4">
          Accede para gestionar tus preferencias climáticas ☁️
        </p>
        <div v-if="mensajeLogout" class="alert alert-success text-center">
          {{ mensajeLogout }}
        </div>
        <form @submit.prevent="handleLogin" novalidate>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input
              v-model.trim="email"
              type="email"
              class="form-control"
              :class="{'is-invalid': error && !email }"
              placeholder="correo@mail.com"
            />
            <div v-if="error && !email" class="invalid-feedback">
              Debes ingresar un email
            </div>
          </div>
          <div class="mb-3">
            <label class="form-label">Contraseña</label>
            <input
              v-model.trim="password"
              type="password"
              class="form-control"
              :class="{ 'is-invalid': error && !password }"
              placeholder="****"
            />
            <div v-if="error && !password" class="invalid-feedback">
              Debes ingresar una contraseña
            </div>
          </div>
          <div v-if="loginError" class="alert alert-danger text-center">
            ❌ Usuario o contraseña incorrectos
          </div>
          <button class="btn btn-primary w-100 login__btn">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const email = ref("");
const password = ref("");

const error = ref(false);
const loginError = ref(false);

const handleLogin = async () => {
  error.value = false;
  loginError.value = false;

  if (!email.value || !password.value) {
    error.value = true;
    return;
  }
  const success = await store.dispatch("login", {
    email: email.value,
    password: password.value
  });

  if (success) {
    await  router.push("/");
  } else {
    loginError.value = true;
  }
};
const mensajeLogout= ref('');
onMounted(()=>{
  const mensaje= localStorage.getItem('logoutMessage');
  if(mensaje){
    mensajeLogout.value= mensaje;
    localStorage.removeItem('logoutMessage');
    
    setTimeout(()=>{
      mensajeLogout.value= "";
    }, 3000);
  }
});
</script>

<style scoped>
.login {
  min-height: 100vh;
  padding-top: 100px; 
  display: flex;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(155, 191, 230, 0.4),
    rgba(255, 255, 255, 1)
  );
}
.login__box {
  width: 100%;
  max-width: 420px;
  background: white;
  padding: 32px;
  border-radius: 16px;
}
.login__title {
  font-weight: 700;
  color: #406bce;
}
.login__btn {
  margin-top: 8px;
  border-radius: 8px;
}
</style>