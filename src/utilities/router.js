import {
  createRouter,
  createWebHashHistory,
} from "vue-router";

const basePath = process.env.VUE_APP_PATH;

export default createRouter({
  history: createWebHashHistory(basePath),
  routes: [
    {
      path: "/",
      redirect: "/it",
    },
    {
      path: "/:lang",
      alias: "/:lang/index.html",
      name: "home",
      component: () => import("@/views/HelloWorld.vue"),
      children: [
        {
          path: "nested-route",
          alias: "nested-route/index.html",
          component: () => import("@/views/NestedRoute.vue"),
        },
      ],
    },
    {
      path: "/:lang/about",
      alias: "/:lang/about/index.html",
      name: "about",
      component: () => import("@/views/About.vue"),
    },
    {
      path: "/:lang/test",
      alias: "/:lang/test/index.html",
      name: "test",
      component: () => import("@/views/TestPageForDevs.vue"),
    },
  ],
});
