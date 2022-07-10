import {createWebHistory,createRouter} from 'vue-router'

import Home from '../components/HomeTicket.vue';
import Auth from '../services/auth_service';
const routes = [{
    path:'/home',
    component:Home,
    children:[{
        path:'/home/CustomerTicket',
        name:'home',
         component: () => import('../components/CustomerTicket.vue')
    
    },
    {
        path:'/home/adminTicket',
        name:'adminTicket',
        component:()=>import('../components/AdminTicket.vue')
    }
    

    ],
    beforeEnter: (to, from, next) => {
        if(!Auth.isLoginCustomer()){
            next('loginCustomer')
        }
        else{
         next()
        }
    }
    
    
},

{
    path:'/loginAdmin',
    name:'loginAdmin',
    component:()=>import('../components/AdminTicket')
},
{
    path:'/loginCustomer',
    name:'loginCustomer',
    component:()=>import('../components/loginCustomer.vue')
},



]
 const router = createRouter({
history:createWebHistory(),
routes
 });
export default router;