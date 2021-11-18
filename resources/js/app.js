require("./bootstrap");
require("admin-lte");

window.Vue = require("vue").default;
import Vue from "vue";
import VueRouter from "vue-router";

import router from "./router/router";
import store from "./store/index";
import App from "./app.vue";

Vue.use(VueRouter);

// Dependencies

// Vue Multi select
import Multiselect from "vue-multiselect";
Vue.component("multiselect", Multiselect);
// =========

// Vue Carousel
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);
// ===
// Vform Component
import { Form } from "vform";
window.Form = Form;
// ===============

// Progress Componen
import VueProgressBar from "vue-progressbar";
import options from "./config/progressbar";
Vue.use(VueProgressBar, options);
// =====

// Progress Componen
import imageCompressor from "vue-image-compressor";
Vue.use(imageCompressor);
// =====

// Swal Manual
import swal from "sweetalert2";
window.Swal = swal;
// =========

//  money component
import money from "v-money";
Vue.use(money, {
    decimal: ",",
    thousands: ".",
    prefix: "Rp ",
    suffix: " ",
    precision: 0
});
// =====
// Day JS
import VueDayjs from "vue-dayjs-plugin";
Vue.use(VueDayjs);
// =====

// Kostum
window.nv = new Vue();

// Toast Component
import toast from "./config/toast";
Vue.prototype.$toast = new toast();
//  ======

// Kelola Button AS disabled after click
window.btn_kelola = bol => {
    $(".btn-submit-data").attr("disabled", bol);
};
// ====

// Catch Component
import error from "./config/catch";
Vue.prototype.$error = new error();
//  ======
// Konfirmasi Hapus Component
import konfirmasiHapus from "./config/delete_confirmation";
window.konfirmasiHapus = konfirmasiHapus;
// ====

// Komponen
Vue.component("pagination", require("laravel-vue-pagination"));
Vue.component("kosong", require("./components/kosong.vue").default);
Vue.component("kembali", require("./components/kembali.vue").default);
Vue.component("loading", require("./components/loading.vue").default);

// API
Vue.prototype.$api_role = "/api/role";
Vue.prototype.$api_permission = "/api/permission";
Vue.prototype.$api_sidebar = "/api/sidebar";
Vue.prototype.$api_sub_sidebar = "/api/subsidebar";
Vue.prototype.$api_kelola_user = "/api/kelola-user";
Vue.prototype.$api_role_permission = "/api/role-permission";
Vue.prototype.$api_audit_trail = "/api/audit-trail";
Vue.prototype.$api_jenis_ketentuan = "/api/jenis-ketentuan";
Vue.prototype.$api_ketentuan_penggunaan = "/api/ketentuan-penggunaan";
Vue.prototype.$api_user_agreement = "/api/user-agreement";
Vue.prototype.$api_konsumer_key = "/api/konsumer-key";
Vue.prototype.$api_oapi_audit_trail = "/api/oapi-audit-trail";

Vue.prototype.$canDoStore = false;
Vue.prototype.$canDoUpdate = false;
Vue.prototype.$canDoDestroy = false;

Vue.filter("STATUS", function(data) {
    if (data == 1) {
        return "Aktif";
    } else {
        return "Nonaktif";
    }
});

const app = new Vue({
    el: "#app",
    router,
    store,
    components: { App }
});
