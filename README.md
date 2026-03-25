🌦️ CloudSync – Weather App (Vue + Auth Version)

CloudSync es una aplicación web desarrollada con Vue 3 que permite consultar el clima en distintas ciudades de Chile en tiempo real, utilizando la API pública de OpenWeather.

En esta versión, la aplicación evoluciona incorporando un sistema de autenticación con Vuex, rutas protegidas y personalización por usuario, manteniendo su arquitectura modular y una interfaz moderna basada en Bootstrap 5.

🚀 Características principales

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

🔐Nuevas funcionalidades (Autenticación y usuario)

🔑 Sistema de login con Vuex
👤 Manejo de estado global de usuario
🔒 Rutas protegidas con Vue Router (navigation guards)
⭐ Sistema de ciudades favoritas por usuario
💾 Persistencia con localStorage
🚪 Cierre de sesión con feedback visual
🎯 UI dinámica según estado de autenticación (login/logout/navbar)


🧩 Vistas principales:

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

⭐ FavoritosView
Muestra las ciudades guardadas por el usuario autenticado.


🧭 Rutas (Vue Router):

Ruta	           Vista	           Descripción
/	               HomeView	           Página principal con listado de ciudades.
/ciudad/:name	   CityDetailView	   Detalle del clima por ciudad.
/about	           AboutView	       Información del proyecto.
/contact	       ContactView	       Formulario de contacto.
/login             LoginView           Inicio de sesión.
/favoritos         FavoritosView       Vista protegida con ciudades favoritas.

🔒 La ruta /favoritos requiere autenticación mediante guards de Vue Router.

🧠 Gestión de estado (Vuex)

Se implementa Vuex para manejar:

• Usuario autenticado
• Estado de sesión (isAuthenticated)
• Lista de favoritos

Mutations principales:
• SET_USER
• LOGOUT
• AGREGAR_FAVORITO
• ELIMINAR_FAVORITO

Actions:
• login
• logout
• agregarFavorito
• eliminarFavorito

La información se persiste en localStorage para mantener la sesión activa.

🛠️ Tecnologías utilizadas:

- Vue 3 (Composition API) → Base del desarrollo.
- Vite → Entorno de desarrollo rápido.
- Vue Router → Navegación SPA.
- Vuex → Gestión de estado.
- Bootstrap 5 → Diseño responsive y componentes UI.
- JavaScript ES6 → Lógica de la aplicación.
- Fetch API → Consumo de API.
- CSS personalizado + BEM → Estilos organizados.
- OpenWeather API → Datos climáticos en tiempo real.

🌐 API utilizada

- OpenWeather API
- Documentación: https://openweathermap.org/api

Endpoints utilizados:
/weather → Clima actual
/forecast → Pronóstico de 5 días

Configuración:
Units: metric
Language: es
Country: CL

🧠 Arquitectura del proyecto:

La aplicación sigue una arquitectura modular separando responsabilidades:
components/ → Componentes reutilizables (cards, navbar, footer).
views/ → Vistas principales (páginas).
services/ → Lógica de negocio:
- API
- Adaptadores
- Cálculos
- Alertas
store/ → Manejo global del estado(Vuex).
router/ → Configuración de rutas.

📁 Estructura del proyecto
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

⚙️ Instalación y uso

1️⃣ Clonar el repositorio:

git clone https://github.com/JavieraLoy/cloudsync-vue-weather.git

2️⃣ Entrar al proyecto:

cd cloudsync-vue

3️⃣ Cambiar a la rama actual:

git checkout feature-auth-vuex

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
feature-auth-vuex

👩‍💻 Autor:

Desarrollado por Javiera Loyola
Proyecto enfocado en el aprendizaje de Vue 3, Vuex, vue router,  consumo de APIs y desarrollo frontend moderno, incorporando autenticación, manejo de estado global y buenas prácticas de arquitectura.