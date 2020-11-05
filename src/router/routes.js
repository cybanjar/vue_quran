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
    name: "alfatehah",
    component: () => import("pages/Alfatehah.vue")
  },
  {
    path: "/2",
    name: "albaqarah",
    component: () => import("pages/AlBaqarah.vue")
  },
  {
    path: "/pages/:id",
    name: "pages-details",
    component: () => import("pages/SingleBlog.vue")
  }

];

export default routes;
