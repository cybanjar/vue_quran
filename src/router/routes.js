const routes = [{
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{
      path: "",
      component: () => import("pages/Index.vue")
    }]
  },
  {
    path: "/landing",
    component: () => import("pages/Landing.vue")
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  },
  {
    path: "/1",
    component: () => import("pages/Alfatehah.vue")
  }
];

export default routes;
