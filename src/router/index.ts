import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import { useUserStore } from "@/stores/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      alias: "/home",
      name: "Home",
      meta: { requiresAuth: true },
      component: Home,
      children: [
        {
          path: "/:name/:id",
          name: "Board",
          component: () => import("@/components/Home/ColumnView.vue"),
        },
      ],
    },
    {
      path: "/login",
      name: "Login",
      meta: { requiresUnAuth: true },
      component: () => import("@/views/Login.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next("/login");
  } else if (to.meta.requiresUnAuth && userStore.isAuthenticated) {
    next("/");
  } else {
    next();
  }
});

export default router;
