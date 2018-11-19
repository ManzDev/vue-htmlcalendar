import Vue from 'vue/dist/vue.esm';
import VueRouter from 'vue-router';
import App from './App.vue';

const HomePage = { template: '<h1>Home</h1>' };
const AboutPage = { template: '<h1>About {{ $route.params.name }}</h1>' };
const NotFoundPage = { template: '<h1>404</h1>' };

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  {
    name: 'year',
    path: '/year/:year(\\d+)',
    component: App,
    props: router => ({ year: Number(router.params.year) })
  },
  { path: '*', component: NotFoundPage }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

Vue.use(VueRouter);

new Vue({
  router,
  mounted() {
    //router.push({ name: 'year', params: { year: (this.year - 1) } });
  },
  update() {
    console.log('Update:', this);
  }
  //render: h => h(App)
}).$mount('#app');