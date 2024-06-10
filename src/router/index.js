import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/views/HomePage.vue"
import ServersPage from "@/views/ServersPage.vue";
import CartPage from "@/views/CartPage.vue";
import AboutPage from "@/views/AboutPage.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {title: 'Главная'}

  },
  {
    path: '/servers',
    name: 'servers',
    component: ServersPage,
    meta: {title: 'Сервера'}

  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage,
    meta: {title: 'Корзина'}

  },  {
    path: '/about',
    name: 'about',
    component: AboutPage,
    meta: {title: 'О нас'}
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});
export default router
