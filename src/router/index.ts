import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Posts from "../api/posts.json";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

Posts.data.forEach((item) => {
  router.addRoute("gulp", {
    path: `/posts/${item.id}`,
    name: item.id,
    component: () => import(`../posts/${item.id}.md`),
  });
});

export default router;
