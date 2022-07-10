import { createWebHistory, createRouter } from 'vue-router'

import Home from '../components/HomeCustomerTicket.vue';
import Auth from '../services/auth_service';
const routes = [{
    path: '/home',
    component: Home,
    children: [{
        path: '/home/CustomerTicket',
        name: 'home',
        component: () => import('../components/CustomerTicket.vue')

    },



    ],
    beforeEnter: (to, from, next) => {
        if (!Auth.isLoginCustomer()) {
            next('loginCustomer')
        }
        else {
            next()
        }
    }
},
{
    path: '/loginCustomer',
    name: 'loginCustomer',
    component: () => import('../components/loginCustomer.vue')
},



]
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;