import { createApp } from 'vue';
import App from './App.vue';
import router from './routes/router';
import store from './store';

const main = createApp(App);

main.use(router);
main.use(store);

main.mount('#app');
