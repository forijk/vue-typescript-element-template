import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  mode: 'history',
  // base: `${window.ROUTER_BASE}/index/`,
  base: 'index/',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue'),
    },
  ],
});
