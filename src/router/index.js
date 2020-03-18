import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/e00-05",
    name: "e00-05",
    component: () => import("../views/E00_05.vue")
  },
  {
    path: "/e06-10",
    name: "e06-10",
    component: () => import("../views/E06_10.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
