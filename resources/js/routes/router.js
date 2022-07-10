import {createWebHistory,createRouter} from 'vue-router'

import Home from '../components/HomeTicket.vue';
const routes = [{
    path:'/home',
    component:Home,
    children:[{
        path:'/home/CustomerTicket',
        name:'dashboard',
         component: () => import('../components/CustomerTicket.vue')
    
    },
    {
        path:'/home/adminTicket',
        name:'adminTicket',
        component:()=>import('../components/AdminTicket.vue')
    }
    

    ],
    
    
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