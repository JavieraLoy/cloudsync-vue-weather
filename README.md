# 🌦️ CloudSync – Weather App (Vue + Auth Version + User System Version)

CloudSync es una aplicación web desarrollada con Vue 3 que permite consultar el clima en distintas ciudades de Chile en tiempo real, utilizando la API pública de OpenWeather.

En esta versión, la aplicación evoluciona incorporando un sistema completo de autenticación con Vuex, registro de usuarios, rutas protegidas y personalización por usuario, manteniendo su arquitectura modular y una interfaz moderna basada en Bootstrap 5.

----------

## 🚀 Características principales:

🌍 Consulta del clima actual en ciudades de Chile
🔍 Búsqueda dinámica de ciudades
🧩 Cards interactivas con acceso a detalle
📊 Vista detallada por ciudad con:

- Temperatura 🌡️
- Humedad 💧
- Viento 🌬️
- Estado del clima

📅 Pronóstico semanal con:

- Temperaturas mínimas y máximas
- Promedio semanal
- Resumen automático del clima

⚠️ Sistema de alertas climáticas
🖼️ Imagen dinámica por ciudad + fallback
🔄 Indicadores de carga y manejo de errores
🌡️ Cambio de unidad de temperatura (°C / °F)
📱 Diseño responsive
✉️ Formulario de contacto validado con Vue + Bootstrap
🧭 Navegación SPA con Vue Router

----------

## 🔐Nuevas funcionalidades (Autenticación y usuario):

🔑 Sistema de login dinámico con Vuex.
📝 Registro de nuevos usuarios.
👤 Manejo de estado global de usuario.
🔒 Rutas protegidas con Vue Router (navigation guards).
🚫 Rutas restringidas para usuarios autenticados(login/registro).
⭐ Sistema de ciudades favoritas por usuario.
💾 Persistencia de sesión y datos con localStorage.
🚪 Cierre de sesión con feedback visual.
🎯 Navbar dinámico según estado de autenticación.

----------

## 🧩 Vistas principales:

🏠 HomeView
Muestra ciudades principales, buscador y listado dinámico de ciudades.

📍 CityDetailView
Muestra el detalle completo del clima y pronóstico de una ciudad.

ℹ️ AboutView
Información sobre la aplicación y su propósito.

✉️ ContactView
Formulario de suscripción con validaciones y feedback visual.

🔐 LoginView
Formulario de inicio de sesión con validación de credenciales.

📝 RegisterView
Formulario de Registro de nuevos usuarios.

⭐ FavoritosView
Muestra las ciudades guardadas por el usuario autenticado.

----------

## 🧭 Rutas (Vue Router):

Ruta	           Vista	           Descripción
/	               HomeView	           Página principal con listado de ciudades.
/ciudad/:name	   CityDetailView	   Detalle del clima por ciudad.
/about	           AboutView	       Información del proyecto.
/contact	       ContactView	       Formulario de contacto.
/login             LoginView           Inicio de sesión.
/registro          RegisterView        Registro de usuario.
/favoritos         FavoritosView       Vista protegida con ciudades favoritas.

🔒 La ruta /favoritos requiere autenticación.
🚫 /login y /registro no están disponibles para usuarios autenticados.

----------

## 🧠 Gestión de estado (Vuex):

Se implementa Vuex para manejar:

• Usuario autenticado
• Estado de sesión (isAuthenticated)
• Lista de favoritos por usuario

Mutations principales:
• SET_USER
• LOGOUT
• AGREGAR_FAVORITO
• ELIMINAR_FAVORITO
• SET_FAVORITOS

Actions:
• login
• logout
• agregarFavorito
• eliminarFavorito
• register
• cargarFavoritos

📌 Los datos se almacenan en localStorage para persistencia.

----------

## 🛠️ Tecnologías utilizadas:

- Vue 3 (Composition API) → Base del desarrollo.
- Vite → Entorno de desarrollo rápido.
- Vue Router → Navegación SPA.
- Vuex → Gestión de estado.
- Bootstrap 5 → Diseño responsive y componentes UI.
- JavaScript ES6 → Lógica de la aplicación.
- Fetch API → Consumo de API.
- CSS personalizado + BEM → Estilos organizados.
- OpenWeather API → Datos climáticos en tiempo real.

----------

## 🌐 API utilizada:

- OpenWeather API
- Documentación: https://openweathermap.org/api

Endpoints utilizados:
• /weather → Clima actual
• /forecast → Pronóstico de 5 días

Configuración:
• Units: metric
• Language: es
• Country: CL

----------

## 🔑 Configuración de API Key:

Para que la aplicación funcione correctamente, es necesario contar con una API Key de OpenWeather.
Por motivos de seguridad, la API Key no se incluye en este repositorio, por lo que cada usuario debe utilizar la suya.

📌 Instrucciones:
1️⃣ Registrarse en: 
https://openweathermap.org/api

2️⃣ Generar una API Key personal.

3️⃣ Dirigirse al archivo:
src/services/apiWeatherService.js

4️⃣ Reemplazar la API Key en el código:
const API_KEY = "TU_API_KEY_AQUI";

🚫 Importante:
• No compartir tu API Key públicamente.
• Cada usuario debe usar su propia clave.
Sin una API Key válida, la aplicación no podrá obtener datos del clima.

----------

## 🧠 Arquitectura del proyecto:

Estructura modular:

• components/ → Componentes reutilizables.
• views/ → Vistas principales.
• services/ → Lógica de negocio:
- API
- Adaptadores
- Cálculos
- Alertas
• store/ → Estado global (Vuex).
• router/ → Configuración de rutas.

----------

## 📁 Estructura del proyecto:
cloudsync-vue/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── css/
│   │   └── img/
│   │
│   ├── components/
│   │   ├── CityList.vue
│   │   ├── Footer.vue
│   │   ├── HeroHeader.vue
│   │   ├── NavBar.vue
│   │   └── WeatherCard.vue
│   │
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── CityDetailView.vue
│   │   ├── AboutView.vue
|   |   ├── LoginView.vue
|   |   ├── FavoritosView.vue
|   |   ├── RegisterView.vue
│   │   └── ContactView.vue
│   │
│   ├── services/
│   │   ├── apiWeatherService.js
│   │   ├── weatherAdapter.js
│   │   ├── statsCalculator.js
│   │   ├── alertsService.js
│   │   ├── cityImages.js
│   │   └── useUnidad.js
│   │
|   ├── store/
│   │   └── index.js
|   |
│   ├── router/
│   │   └── index.js
│   │
│   ├── App.vue
│   ├── main.js
│   └── style.css
│
├── index.html
├── package.json
└── README.md

----------

## ⚙️ Instalación y uso:

1️⃣ Clonar el repositorio:

git clone https://github.com/JavieraLoy/cloudsync-vue-weather.git

2️⃣ Entrar al proyecto:

cd cloudsync-vue

3️⃣ Cambiar a la rama actual:

git checkout feature-registro

4️⃣ Instalar dependencias:

npm install

5️⃣ Ejecutar el servidor de desarrollo:

npm run dev

6️⃣ Abrir en navegador:

http://localhost:5173


🔗 Repositorio

Repositorio público:

https://github.com/JavieraLoy/cloudsync-vue-weather

Rama actual:
feature-registro

👩‍💻 Autor:

Desarrollado por Javiera Loyola
Proyecto enfocado en el aprendizaje de Vue 3, Vuex, Vue router,  consumo de APIs, incorporando autenticación, manejo de estado global y buenas prácticas de arquitectura frontend.