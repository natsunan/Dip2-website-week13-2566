import { createRouter, createWebHistory } from "vue-router";
const HomeView =()=>import  ("@/views/HomeView.vue");
const AboutView=()=>import   ("@/views/AboutView.vue");
const route =[
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ]
const router = createRouter({
  history: createWebHistory(),
  route,
});

export default router;
