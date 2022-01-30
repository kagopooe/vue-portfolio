import { createApp } from 'vue'
import App from './App.vue'
import router from './assets/router/index.js'

createApp(App)
.use(router)
.mount('#app')

document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
