import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import CityDetailView from '../views/CityDetailView.vue';
import LoginView from '../views/LoginView.vue';
import FavoritosView from '../views/FavoritosView.vue';
import store from '../store/index';
import RegisterView from '../views/RegisterView.vue';

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
        path: '/ciudad/:name',
        name: 'cityDetail',
        component:CityDetailView,
        props: true
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: {guestOnly: true}
    },
    {
        path: '/registro',
        name: 'registro',
        component: RegisterView,
        meta: {guestOnly: true}
    },
    {
        path: '/favoritos',
        name: 'favoritos',
        component: FavoritosView,
        meta: {requiresAuth: true}
    }
    
];

const router= createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to)=>{
    const user= store.state.user;
    if(to.meta.requiresAuth && !user){
        return {name: 'login'};
    }
    if(to.meta.guestOnly && user){
        return {name: 'home'};
    }
    return true;
});

export default router;