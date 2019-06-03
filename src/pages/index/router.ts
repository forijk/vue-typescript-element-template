import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  mode: 'history',
  // base: `${window.ROUTER_BASE}/apimanage/`,
  base: 'apimanage/',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
    },
    {
      path: '/myClient',
      name: 'myClient',
      component: () => import(/* webpackChunkName: "myClient" */ './views/MyClient.vue'),
    },
  ],
});
