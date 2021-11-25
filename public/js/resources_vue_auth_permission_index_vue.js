"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vue_auth_permission_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/permission/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/permission/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      in_permission: {},
      cari_data: "",
      grup_url: "",
      queryUrlIfExist: "",
      isPencarian: false
    };
  },
  mounted: function mounted() {
    this.grup_url = this.$router.currentRoute.name.split(".")[0];
    this.queryUrlIfExist = this.$router.currentRoute.query;
    this.verify_permission();
    this.load_permission();
  },
  methods: {
    checkIsPencarianTrue: function checkIsPencarianTrue() {
      if (this.$router.currentRoute.query.cari) {
        this.cari_data = this.$router.currentRoute.query.cari;
        return true;
      }

      return false;
    },
    resetQueryIfExist: function resetQueryIfExist() {
      this.$router.push(this.grup_url);
      this.queryUrlIfExist = [];
    },
    resetPencarian: function resetPencarian() {
      this.cari_data = null;
      this.resetQueryIfExist();
      this.load_permission();
    },
    updateRouteUrl: function updateRouteUrl(data) {
      this.$router.push({
        path: this.$router.currentRoute.fullPath,
        query: data
      });
      this.queryUrlIfExist = this.$router.currentRoute.query;
    },
    loadPaginate: function loadPaginate() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.updateRouteUrl({
        page: page
      });
      axios.get(this.$api_permission, {
        params: this.queryUrlIfExist
      }).then(function (respon) {
        _this.in_permission = respon.data.in_permission;
      });
    },
    verify_permission: function verify_permission() {
      var _this2 = this;

      window.amr_data_permission_users.forEach(function (permission) {
        if (permission.grup == _this2.grup_url) {
          var data_permission = permission.url.split(".")[1];

          if (data_permission == "destroy") {
            _this2.$canDoDestroy = true;
          }
        }
      });
    },
    pencarian: function pencarian() {
      var _this3 = this;

      this.resetQueryIfExist();
      this.updateRouteUrl({
        cari: this.cari_data
      });
      this.$Progress.start();
      axios.get(this.$api_permission, {
        params: this.queryUrlIfExist
      }).then(function (respon) {
        _this3.isPencarian = true;

        _this3.$Progress.finish();

        _this3.in_permission = respon.data.in_permission;
      })["catch"](function (e) {
        _this3.$Progress.fail();

        _this3.$error["catch"](e);
      });
    },
    load_permission: function load_permission() {
      var _this4 = this;

      this.isPencarian = this.checkIsPencarianTrue();
      this.$Progress.start();
      axios.get(this.$api_permission, {
        params: this.queryUrlIfExist
      }).then(function (respon) {
        _this4.$Progress.finish();

        _this4.in_permission = respon.data.in_permission;
      })["catch"](function (e) {
        _this4.$Progress.fail();

        _this4.$error["catch"](e);
      });
    },
    hapus: function hapus(data_kode) {
      var _this5 = this;

      konfirmasiHapus.fire().then(function (result) {
        if (result.isConfirmed) {
          _this5.$toast.df102();

          axios["delete"](_this5.$api_permission + "/" + data_kode).then(function () {
            _this5.$toast.df200();

            _this5.load_permission();
          })["catch"](function (e) {
            _this5.$error["catch"](e);
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/vue/auth/permission/index.vue":
/*!*************************************************!*\
  !*** ./resources/vue/auth/permission/index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_848cdc70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=848cdc70& */ "./resources/vue/auth/permission/index.vue?vue&type=template&id=848cdc70&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/vue/auth/permission/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_848cdc70___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_848cdc70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/auth/permission/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/vue/auth/permission/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/vue/auth/permission/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/permission/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/auth/permission/index.vue?vue&type=template&id=848cdc70&":
/*!********************************************************************************!*\
  !*** ./resources/vue/auth/permission/index.vue?vue&type=template&id=848cdc70& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_848cdc70___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_848cdc70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_848cdc70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=848cdc70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/permission/index.vue?vue&type=template&id=848cdc70&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/permission/index.vue?vue&type=template&id=848cdc70&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/permission/index.vue?vue&type=template&id=848cdc70& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "bg-white box-shadow-1 border-radius-10" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row py-3" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm als" }, [
            _c("div", { staticClass: "input-group" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.cari_data,
                    expression: " cari_data "
                  }
                ],
                staticClass: "form-control form-control-sm",
                attrs: {
                  type: "text",
                  placeholder: " Cari Berdasrkan Nama permission  "
                },
                domProps: { value: _vm.cari_data },
                on: {
                  keyup: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.pencarian.apply(null, arguments)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.cari_data = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _c("span", { staticClass: "input-group-prepend" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-outline-dark btn-sm round-right",
                    on: { click: _vm.pencarian }
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-search",
                      attrs: { "aria-hidden": "true" }
                    })
                  ]
                )
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _vm.isPencarian
          ? _c("section", { staticClass: "container" }, [
              _vm._v(
                "\n            Hasil Dari : " +
                  _vm._s(_vm.cari_data) +
                  "\n            "
              ),
              _c(
                "div",
                {
                  staticClass: "text-blue cp",
                  on: {
                    click: function($event) {
                      return _vm.resetPencarian()
                    }
                  }
                },
                [_vm._v("Reset")]
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c("div", { staticClass: "py-2" }, [
          _c(
            "table",
            { staticClass: "table table-hover" },
            [
              _vm._m(2),
              _vm._v(" "),
              _vm._l(_vm.in_permission.data, function(permission, i) {
                return _c("tr", { key: i }, [
                  _c("td", { staticClass: "px-3 align-middle" }, [
                    _vm._v(_vm._s(permission.nama_route))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-3 align-middle" }, [
                    _vm._v(_vm._s(permission.nama_grup))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-3 align-middle" }, [
                    _vm._v(_vm._s(permission.route_url))
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "ox-3 align-middle",
                      attrs: { width: "25" }
                    },
                    [
                      _vm.$canDoDestroy
                        ? _c("i", {
                            staticClass: "fa fa-trash text-danger",
                            attrs: { "aria-hidden": "true" },
                            on: {
                              click: function($event) {
                                return _vm.hapus(permission.kd_permission)
                              }
                            }
                          })
                        : _vm._e()
                    ]
                  )
                ])
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container" },
            [
              _c("pagination", {
                staticClass: "mt-3",
                attrs: { limit: 1, data: _vm.in_permission },
                on: { "pagination-change-page": _vm.loadPaginate }
              })
            ],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm als" }, [
      _c("div", { staticClass: "font-weight-bolder h4" }, [
        _vm._v("Daftar permission")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "alert alert-dark", attrs: { role: "alert" } },
      [
        _c("h4", { staticClass: "alert-heading" }, [
          _vm._v("Kelola Permission")
        ]),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Untuk mengelola permission hanya bisa dilakukan saat menggenerate api terbaru, pastikan melakukan regenerate saat telah mengimplementasikan api baru"
          )
        ]),
        _vm._v(" "),
        _c("p", { staticClass: "mb-0" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { staticClass: "px-3 align-middle" }, [_vm._v("Nama Route")]),
      _vm._v(" "),
      _c("th", { staticClass: "px-3 align-middle" }, [_vm._v("Nama Grup")]),
      _vm._v(" "),
      _c("th", { staticClass: "px-3 align-middle" }, [_vm._v("Route URL")]),
      _vm._v(" "),
      _c("th", { staticClass: "px-3 align-middle" })
    ])
  }
]
render._withStripped = true



/***/ })

}]);