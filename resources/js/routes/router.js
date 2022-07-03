import {createWebHistory,createRouter} from 'vue-router'

import Home from '../components/HomeTicket.vue';
const routes = [{
    path:'/home',
    component:Home,
    children:[{
        path:'/home/dashboard',
        name:'dashboard',
         component: () => import('../components/dashboard.vue')
    
    },
    {
        path:'/home/adminTicket',
        name:'adminTicket',
        component:()=>import('../components/AdminTicket.vue')
    }
    

    ],
    
},
{
    path:'/loginCustomer',
    name:'loginCustomer',
    component:()=>import('../components/loginCustomer.vue')
},
{
    path:'/loginAdmin',
    name:'loginAdmin',
    component:()=>import('../components/loginAdmin.vue')
},


]
 const router = createRouter({
history:createWebHistory(),
routes
 });
export default router;