"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vue_auth_subsidebar_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/subsidebar/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/subsidebar/index.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      kd_sidebar: "",
      in_sidebar: [],
      canDoStore: true,
      canDoUpdate: true,
      canDoDestroy: true,
      grup_url: "subsidebar"
    };
  },
  mounted: function mounted() {
    this.kd_sidebar = this.$router.currentRoute.params.kd_sidebar;
    this.verify_permission();
    this.load();
  },
  methods: {
    updateUrutan: function updateUrutan(e) {
      var _this = this;

      this.$toast.df102();
      var update_urutan = {
        urutan_only: true,
        urutan_subsidebar: e.target.value
      };
      axios.put(this.$api_sub_sidebar + "/" + e.target.id, update_urutan).then(function () {
        _this.load();

        _this.$toast.df200();
      })["catch"](function (e) {
        _this.$error["catch"](e);
      });
    },
    verify_permission: function verify_permission() {
      var _this2 = this;

      window.amr_data_permission_users.forEach(function (permission) {
        if (permission.grup == _this2.grup_url) {
          var data_permission = permission.url.split(".")[1];

          if (data_permission == "store") {
            _this2.canDoStore = true;
          }

          if (data_permission == "update") {
            _this2.canDoUpdate = true;
          }

          if (data_permission == "destroy") {
            _this2.canDoDestroy = true;
          }
        }
      });
    },
    create_subsidebar: function create_subsidebar() {
      this.$router.push({
        name: "subsidebar.store",
        params: {
          kd_sidebar: this.kd_sidebar
        }
      });
    },
    load: function load() {
      var _this3 = this;

      this.$Progress.start();
      axios.get(this.$api_sidebar + "/" + this.kd_sidebar).then(function (respon) {
        _this3.in_sidebar = respon.data.in_sidebar;

        _this3.$Progress.finish();
      })["catch"](function (e) {
        _this3.$Progress.fail();

        _this3.$error["catch"](e);
      });
    },
    edit: function edit(sub_sidebar) {
      // return console.log(sub_sidebar);
      this.$router.push({
        name: "subsidebar.update",
        params: {
          kd_sidebar: sub_sidebar.fk_kd_sidebar,
          kd_sub_sidebar: sub_sidebar.kd_sub_sidebar
        }
      });
    },
    hapus: function hapus(kd_sub_sidebar) {
      var _this4 = this;

      konfirmasiHapus.fire().then(function (result) {
        if (result.isConfirmed) {
          _this4.$toast.df102();

          axios["delete"](_this4.$api_sub_sidebar + "/" + kd_sub_sidebar).then(function () {
            _this4.$toast.df200();

            _this4.load();
          })["catch"](function (e) {
            _this4.error["catch"](e);
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/vue/auth/subsidebar/index.vue":
/*!*************************************************!*\
  !*** ./resources/vue/auth/subsidebar/index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_a326d656___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a326d656& */ "./resources/vue/auth/subsidebar/index.vue?vue&type=template&id=a326d656&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/vue/auth/subsidebar/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a326d656___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_a326d656___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/auth/subsidebar/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/vue/auth/subsidebar/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/vue/auth/subsidebar/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/subsidebar/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/auth/subsidebar/index.vue?vue&type=template&id=a326d656&":
/*!********************************************************************************!*\
  !*** ./resources/vue/auth/subsidebar/index.vue?vue&type=template&id=a326d656& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a326d656___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a326d656___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a326d656___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=a326d656& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/subsidebar/index.vue?vue&type=template&id=a326d656&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/subsidebar/index.vue?vue&type=template&id=a326d656&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/subsidebar/index.vue?vue&type=template&id=a326d656& ***!
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
  return _c(
    "div",
    { staticClass: "container" },
    [
      _c("kembali"),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "bg-white box-shadow-1 rounded border-radius-10 p-3" },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm col-md als" }, [
              _c("div", { staticClass: "m-2 f5-fz font-weight-bolder" }, [
                _vm._v(
                  "Kelola Sidebar : " + _vm._s(_vm.in_sidebar.nama_sidebar)
                )
              ])
            ]),
            _vm._v(" "),
            _vm.canDoStore
              ? _c("div", { staticClass: "col-sm col-md-4" }, [
                  _c("div", { staticClass: "m-2" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-block btn-sm btn-dark",
                        on: { click: _vm.create_subsidebar }
                      },
                      [_vm._v("Tambah Subsidebar")]
                    )
                  ])
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "bg-white" }, [
            _c("div", { staticClass: "table-responsive" }, [
              _c("table", { staticClass: "table-sm table-hover table" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.in_sidebar.get_subsidebar, function(
                    sub_sidebar,
                    i
                  ) {
                    return _c("tr", { key: i }, [
                      _c("td", { staticClass: "px-3" }, [
                        _vm._v(_vm._s(i + 1))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-3" }, [
                        _vm._v(_vm._s(sub_sidebar.nama_sub_sidebar))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-3" }, [
                        _vm._v(
                          _vm._s(
                            _vm._f("STATUS")(sub_sidebar.status_sub_sidebar)
                          )
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3", attrs: { width: "25" } },
                        [
                          _c("input", {
                            staticClass: "form-control text-center",
                            attrs: {
                              type: "text",
                              id: sub_sidebar.kd_sub_sidebar
                            },
                            domProps: { value: sub_sidebar.urutan_sub_sidebar },
                            on: { change: _vm.updateUrutan }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "px-3" }, [
                        _c("div", { staticClass: "btn-group" }, [
                          _vm._m(1, true),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "dropdown-menu dropdown-menu-right"
                            },
                            [
                              _vm.canDoUpdate
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-item",
                                      on: {
                                        click: function($event) {
                                          return _vm.edit(sub_sidebar)
                                        }
                                      }
                                    },
                                    [_vm._v("Edit")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.canDoDestroy
                                ? _c(
                                    "a",
                                    {
                                      staticClass: "dropdown-item",
                                      on: {
                                        click: function($event) {
                                          return _vm.hapus(
                                            sub_sidebar.kd_sub_sidebar
                                          )
                                        }
                                      }
                                    },
                                    [_vm._v("Hapus")]
                                  )
                                : _vm._e()
                            ]
                          )
                        ])
                      ])
                    ])
                  }),
                  0
                )
              ])
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { staticClass: "px-3" }, [_vm._v("#")]),
      _vm._v(" "),
      _c("th", { staticClass: "px-3" }, [_vm._v("Nama")]),
      _vm._v(" "),
      _c("th", { staticClass: "px-3" }, [_vm._v("Status")]),
      _vm._v(" "),
      _c("th", { staticClass: "text-center px-3" }, [_vm._v("Urutan")]),
      _vm._v(" "),
      _c("th", { staticClass: "px-3" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "button",
      {
        staticClass: "btn btn-sm",
        attrs: { type: "button", "data-toggle": "dropdown" }
      },
      [
        _c("i", {
          staticClass: "fa fa-ellipsis-v",
          attrs: { "aria-hidden": "true" }
        })
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);