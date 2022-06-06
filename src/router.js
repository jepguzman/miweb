import { createRouter, createWebHistory } from "vue-router";
import BlogContenidos from "./views/BlogContenidos.vue";
import About from "./views/About.vue";
import Login from "./views/Login.vue";

const routes = [
  { path: "/", component: BlogContenidos },
  { path: "/Login", component: Login },
  { path: "/About", component: About }
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;