require('./bootstrap');
import App from './components/App.vue';
import router from './routes/router';
import { createApp } from 'vue';
import VueSweetalert2 from 'vue-sweetalert2';
const app = createApp(App)
app.use(router);
app.use(VueSweetalert2)
app.mount('#app');
