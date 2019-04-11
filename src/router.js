import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("./views/Portfolio.vue")
    },
    {
      path: "/stocks",
      name: "stocks",
      component: () => import("./views/Stocks.vue")
    },
    {
      path: "/save-load",
      name: "save-load",
      component: () => import("./views/SaveLoad.vue")
    },
    {
      path: "/end-day",
      name: "end-day",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/EndDay.vue")
    }
  ]
});
