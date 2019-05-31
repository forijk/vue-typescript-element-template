import Vue from 'vue';
import '@/pages/initialize';
import App from './App.vue';

new Vue({
  render: h => h(App),
}).$mount('#app');
