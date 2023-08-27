import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ShoppingView from "@/views/ShoppingView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
  {
    path: "/shopping",
    component: ShoppingView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
