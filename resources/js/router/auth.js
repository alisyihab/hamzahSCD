const routes = [
    {
        path: "/",
        component: () => import("../../vue/home.vue"),
        name: "home"
    },
    {
        path: "/dashboard",
        component: () => import("../../vue/auth/dashboard.vue"),
        name: "dashboard"
    },
    {
        path: "/sidebar",
        component: () => import("../../vue/auth/sidebar/index.vue"),
        name: "sidebar.index"
    },
    {
        path: "/sidebar/create",
        component: () => import("../../vue/auth/sidebar/create.vue"),
        name: "sidebar.store"
    },
    {
        path: "/sidebar/create/:kd_sidebar",
        component: () => import("../../vue/auth/sidebar/create.vue"),
        name: "sidebar.update"
    },

    {
        path: "/sidebar/:kd_sidebar/subsidebar/",
        component: () => import("../../vue/auth/subsidebar/index.vue"),
        name: "subsidebar.index"
    },
    {
        path: "/sidebar/:kd_sidebar/subsidebar/create",
        component: () => import("../../vue/auth/subsidebar/create.vue"),
        name: "subsidebar.store"
    },
    {
        path: "/sidebar/:kd_sidebar/subsidebar/:kd_sub_sidebar",
        component: () => import("../../vue/auth/subsidebar/create.vue"),
        name: "subsidebar.update"
    },

    {
        path: "/kelola-user",
        component: () => import("../../vue/auth/kelola-user/index.vue"),
        name: "kelola-user.index"
    },
    {
        path: "/kelola-user/create",
        component: () => import("../../vue/auth/kelola-user/create.vue"),
        name: "kelola-user.store"
    },
    {
        path: "/kelola-user/create/:kd_user",
        component: () => import("../../vue/auth/kelola-user/create.vue"),
        name: "kelola-user.update"
    },

    {
        path: "/konsumer-key",
        component: () => import("../../vue/auth/konsumer-key/index.vue"),
        name: "konsumer-key.index"
    },
    {
        path: "/konsumer-key/create",
        component: () => import("../../vue/auth/konsumer-key/create.vue"),
        name: "konsumer-key.store"
    },
    {
        path: "/konsumer-key/create/:kd_konsumer_key",
        component: () => import("../../vue/auth/konsumer-key/create.vue"),
        name: "konsumer-key.update"
    },
    {
        path: "/konsumer-key/reset/:kd_konsumer_key",
        component: () => import("../../vue/auth/konsumer-key/reset.vue"),
        name: "konsumer-key.reset"
    },

    {
        path: "/role",
        component: () => import("../../vue/auth/role/index.vue"),
        name: "role.index"
    },
    {
        path: "/role/create",
        component: () => import("../../vue/auth/role/create.vue"),
        name: "role.store"
    },
    {
        path: "/role/create/:kd_role",
        component: () => import("../../vue/auth/role/create.vue"),
        name: "role.update"
    },
    {
        path: "/role/permission/:kd_role",
        component: () => import("../../vue/auth/role/kelola-akses/index.vue"),
        name: "impl-role-to-permission.index"
    },
    {
        path: "/role/permission/:kd_role/add",
        component: () => import("../../vue/auth/role/kelola-akses/create.vue"),
        name: "impl-role-to-permission.store"
    },
    {
        path: "/permission",
        component: () => import("../../vue/auth/permission/index.vue"),
        name: "permission.index"
    },

    {
        path: "/audit-trail",
        component: () => import("../../vue/auth/auditTrail/index.vue"),
        name: "audit-trail.index"
    },
    {
        path: "/oapi-audit-trail",
        component: () => import("../../vue/auth/oapi-audit-trail/index.vue"),
        name: "oapi-audit-trail.index"
    },

    {
        path: "/*",
        component: () => import("../../vue/404.vue"),
        name: "notfound"
    }
];

export default routes;
