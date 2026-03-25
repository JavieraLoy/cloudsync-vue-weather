import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';
import CityDetailView from '../views/CityDetailView.vue';
import LoginView from '../views/LoginView.vue';
import FavoritosView from '../views/FavoritosView.vue';
import store from '../store/index';

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
        component: LoginView
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
    return true;
});

export default router;