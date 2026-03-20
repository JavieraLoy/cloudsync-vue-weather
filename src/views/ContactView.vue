<template>
  <section class="contact py-5">
    <div class="container">
      <div class="contact__box mx-auto text-center">
        <h2 class="contact__title mb-3">Suscríbete y recibe la mejor información del tiempo de tu ciudad</h2>
        <p class="text-muted mb-4">Mantente informado con pronósticos actualizados y alertas climáticas.</p>
        <form @submit.prevent="enviarFormulario" class="row g-3">
        <div class="col-12 mb-3">
          <label class="form-label">Nombre:</label>
          <input v-model.trim="form.nombre" type="text" class="form-control" :class="{'is-invalid': submitted && !form.nombre}" placeholder="Escribe tu nombre..."/>
          <div class="invalid-feedback"> Debe ingresar un nombre</div>
        </div>
        <div class="col-12 mb-3">
          <label class="form-label">Apellido:</label>
          <input v-model.trim="form.apellido" type="text" class="form-control" :class="{'is-invalid': submitted && !form.apellido}" placeholder="Escribe tu apellido..."/>
          <div class="invalid-feedback"> Debe ingresar apellido</div>
        </div>
        <div class="col-12 mb-3">
          <label class="form-label">Email:</label>
          <input v-model.trim="form.email" type="email" class="form-control" :class="{'is-invalid': submitted && !form.email}" placeholder="Ej: contacto@mail.com"/>
          <div class="invalid-feedback"> Debe ingresar un email</div>
        </div>
        <div class="mb-3 col-12">
          <label class="form-label">¿Qué ciudad(es) desea recibir información?</label>
          <textarea v-model.lazy="form.ciudades" class="form-control" rows="2" :class="{'is-invalid': submitted && !form.ciudades}" ></textarea>
          <div class="invalid-feedback"> Debe escribir al menos una ciudad</div>
        </div>
        <div class="col-12 mb-3">
          <label class="form-label">Frecuencia al recibir información:</label>
          <select v-model="form.frecuencia" class="form-select" :class="{'is-invalid': submitted && !form.frecuencia}">
            <option disabled value="">Selecciona...</option>
            <option v-for="f in frecuencias" :key="f" :value="f">
              {{ f }}
            </option>
          </select>
          <div class="invalid-feedback"> Debe seleccionar una opción</div>
        </div>
        <div class="col-12 text-start mb-3">
          <label class="form-label">Preferencias:</label>
          <div :class="{'is-invalid': submitted && form.preferencias.length === 0}">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="alertas" v-model="form.preferencias" />
              <label class="form-check-label">Alertas extremas</label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="pronostico" v-model="form.preferencias" />
              <label class="form-check-label">Pronóstico semanal</label>  
            </div>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="tips" v-model="form.preferencias" />
              <label class="form-check-label">Consejos del clima</label> 
            </div>
          </div>
          <div v-if="submitted && form.preferencias.length === 0" class="text-danger small mt-1">
            Debe seleccionar al menos una preferencia
          </div>         
        </div>
        <div class="col-12 text-start mb-3">
          <input type="checkbox" v-model="form.acepta" class="form-check-input" :class="{'is-invalid': submitted && !form.acepta}" />
          <label class="form-check-label">Acepto términos y condiciones</label>
          <div class="invalid-feedback">Debe aceptar los términos</div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary w-100">
            Enviar
          </button>
        </div>
        <div v-if="enviado" class="text-success mt-3">
          ✅ ¡Formulario enviado con éxito!
        </div>
      </form>
    </div>
  </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const form = ref({
  nombre: "",
  apellido: "",
  email: "",
  ciudades: "",
  frecuencia: "",
  preferencias: [],
  acepta: false
});

const frecuencias= ["Diario","Semanal","Solo Alertas"];
const submitted= ref(false);
const enviado= ref(false);

const enviarFormulario= ()=>{
  submitted.value= true;
  if(
    !form.value.nombre ||
    !form.value.apellido || 
    !form.value.email ||
    !form.value.ciudades ||
    !form.value.frecuencia ||
    form.value.preferencias.length === 0 || 
    !form.value.acepta
    ){
    return;
  }
  console.log("Formulario enviado:", form.value);
  enviado.value= true;
  form.value={
    nombre: "",
    apellido: "",
    email: "",
    ciudades: "",
    frecuencia: "",
    preferencias: [],
    acepta: false
  };
  submitted.value= false;
  setTimeout(()=> (enviado.value= false), 3000);
};
</script>

<style scoped>
.contact {
  min-height: 80vh;
  display: flex;
  align-items: center;
}
.container{
  padding-top: 70px; 
}

.contact__box {
  max-width: 700px;
  width: 100%;
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.contact__title {
  font-weight: 700;
}

</style>