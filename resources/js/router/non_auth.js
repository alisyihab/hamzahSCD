const routes = [
    {
        path: "/",
        component: () => import("../../vue/homepage.vue"),
        name: "home",
    },
    {
        path: "/login",
        component: () => import("../../vue/login.vue"),
        name: "login",
    },

    // {
    //     path: "/registrasi",
    //     component: () => import("../../vue/registrasi.vue"),
    //     name: "registrasi"
    // },

    {
        path: "/img_compress",
        component: () => import("../../vue/demo/img_compresor.vue"),
        name: "img_compress",
    },

    {
        path: "/*",
        component: () => import("../../vue/404.vue"),
        name: "notfound",
    },
];

export default routes;
