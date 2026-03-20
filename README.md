🌦️ CloudSync – Weather App (Vue Version)

CloudSync es una aplicación web desarrollada con Vue 3 que permite consultar el clima en distintas ciudades de Chile en tiempo real, utilizando la API pública de OpenWeather.

La aplicación está diseñada como una SPA (Single Page Application), incorporando navegación dinámica con Vue Router, arquitectura modular basada en servicios y componentes reutilizables, y una interfaz moderna construida con Bootstrap 5.


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


🧩 Vistas principales:

🏠 HomeView
Muestra ciudades principales, buscador y listado dinámico de ciudades agregadas.

📍 CityDetailView
Muestra el detalle completo del clima y pronóstico de una ciudad.

ℹ️ AboutView
Información sobre la aplicación y su propósito.

✉️ ContactView
Formulario de suscripción con validaciones y feedback visual.

🧭 Rutas (Vue Router):

Ruta	           Vista	           Descripción
/	               HomeView	           Página principal con listado. de ciudades
/ciudad/:name	   CityDetailView	   Detalle del clima por ciudad.
/about	           AboutView	       Información del proyecto.
/contact	       ContactView	       Formulario de contacto.

🛠️ Tecnologías utilizadas:

- Vue 3 (Composition API) → Base del desarrollo.
- Vite → Entorno de desarrollo rápido.
- Vue Router → Navegación SPA.
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

3️⃣ Instalar dependencias:

npm install

4️⃣ Ejecutar el servidor de desarrollo:

npm run dev

5️⃣ Abrir en navegador:

http://localhost:5173


👩‍💻 Autor:

Desarrollado por Javiera Loyola
Proyecto enfocado en el aprendizaje de Vue 3, vue router,  consumo de APIs y desarrollo frontend moderno.