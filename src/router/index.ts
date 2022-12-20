import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "Home",
      component: Home,
      children: [
        {
          path: '/:name/:id',
          name: 'Board',
          component:()=> import('@/components/Home/ColumnView.vue')
        }
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login.vue"),
    },
  ],
});

export default router;
