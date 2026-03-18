import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import CityDetailView from '../views/CityDetailView.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: AboutView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView 
    },
    {
        path: '/city/:name',
        name: 'city-detail',
        component: CityDetailView,
        props: true
    }
];

const router= createRouter({
    history: createWebHistory(),
    routes,
});

export default router;