"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vue_auth_auditTrail_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/auditTrail/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/auditTrail/index.vue?vue&type=script&lang=js& ***!
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
      isPencarian: false,
      isEditableData: false,
      in_audit_trail: {},
      cari_data: "",
      canDoStore: false,
      canDoUpdate: false,
      canDoDestroy: false,
      grup_url: "audit-trail"
    };
  },
  mounted: function mounted() {
    this.verify_permission();
    this.load();
  },
  methods: {
    loadPaginate: function loadPaginate() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.$router.push(this.$router.currentRoute.path + "?page=" + page);
      axios.get(this.$api_audit_trail + "?page=" + page).then(function (respon) {
        _this.in_audit_trail = respon.data.in_audit_trail;
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
    pencarian: function pencarian() {
      var _this3 = this;

      this.$Progress.start();
      axios.get("/api/audit-trail/pencarian?cari=" + this.cari_data).then(function (respon) {
        _this3.isPencarian = true;

        _this3.$Progress.finish();

        _this3.in_audit_trail = respon.data.in_audit_trail;
      })["catch"](function (e) {
        _this3.$Progress.fail();

        _this3.$error["catch"](e);
      });
    },
    load: function load() {
      var _this4 = this;

      this.isPencarian = false;
      this.$Progress.start();
      axios.get(this.$api_audit_trail).then(function (respon) {
        _this4.$Progress.finish();

        _this4.in_audit_trail = respon.data.in_audit_trail;
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

          axios["delete"]("/api/audit-trail/" + data_kode).then(function () {
            _this5.$toast.df200();

            _this5.load();
          })["catch"](function (e) {
            _this5.$error["catch"](e);
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/vue/auth/auditTrail/index.vue":
/*!*************************************************!*\
  !*** ./resources/vue/auth/auditTrail/index.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_250bafe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=250bafe4& */ "./resources/vue/auth/auditTrail/index.vue?vue&type=template&id=250bafe4&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/vue/auth/auditTrail/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_250bafe4___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_250bafe4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/auth/auditTrail/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/vue/auth/auditTrail/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/vue/auth/auditTrail/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/auditTrail/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/auth/auditTrail/index.vue?vue&type=template&id=250bafe4&":
/*!********************************************************************************!*\
  !*** ./resources/vue/auth/auditTrail/index.vue?vue&type=template&id=250bafe4& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_250bafe4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_250bafe4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_250bafe4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=250bafe4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/auditTrail/index.vue?vue&type=template&id=250bafe4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/auditTrail/index.vue?vue&type=template&id=250bafe4&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/auditTrail/index.vue?vue&type=template&id=250bafe4& ***!
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
                  placeholder: " Cari Berdasrkan Nama Form   "
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
        ]),
        _vm._v(" "),
        _vm.isPencarian
          ? _c("section", [
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
                      return _vm.load()
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
              _c("tr", [
                _c("th", { staticClass: "px-3 align-middle" }, [
                  _vm._v("Jenis")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "px-3 align-middle" }, [
                  _vm._v("Form")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "px-3 align-middle" }, [
                  _vm._v("Trace")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "px-3 align-middle" }, [
                  _vm._v("Aktor")
                ]),
                _vm._v(" "),
                _c("th", { staticClass: "px-3 align-middle text-center" }, [
                  _vm._v("Waktu")
                ]),
                _vm._v(" "),
                _vm.isEditableData
                  ? _c("th", { staticClass: "px-3 align-middle text-center" }, [
                      _c("i", { staticClass: "fa fa-ellipsis-v" })
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              _vm._l(_vm.in_audit_trail.data, function(audit_trail, i) {
                return _c("tr", { key: i }, [
                  _c(
                    "td",
                    {
                      staticClass: "px-3 align-middle",
                      attrs: { width: "25" }
                    },
                    [_vm._v(_vm._s(audit_trail.jenis_kegiatan))]
                  ),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-3 align-middle" }, [
                    _vm._v(_vm._s(audit_trail.nama_form))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-3 align-middle" }, [
                    _c(
                      "table",
                      { staticClass: "table-sm table table-bordered" },
                      [
                        _vm._m(1, true),
                        _vm._v(" "),
                        _vm._l(JSON.parse(audit_trail.nama_field), function(
                          nama_field,
                          i
                        ) {
                          return _c("tr", { key: i }, [
                            _c("td", { staticClass: "small" }, [
                              _vm._v(_vm._s(nama_field))
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "small" }, [
                              _vm._v(
                                _vm._s(
                                  JSON.parse(audit_trail.value_sebelumnya)[i]
                                )
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "small" }, [
                              _vm._v(
                                _vm._s(JSON.parse(audit_trail.value_terbaru)[i])
                              )
                            ])
                          ])
                        })
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-3 align-middle" }, [
                    _vm._v(_vm._s(audit_trail.get_creator.nama))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-3 align-middle text-center" }, [
                    _vm._v(
                      _vm._s(
                        _vm
                          .$date(audit_trail.created_at)
                          .format("dddd, DD/MMM/YY HH:mm")
                      )
                    )
                  ]),
                  _vm._v(" "),
                  _vm.isEditableData
                    ? _c(
                        "td",
                        {
                          staticClass: "px-3 align-middle text-center",
                          attrs: { width: "25" }
                        },
                        [
                          _c("div", { staticClass: "btn-group" }, [
                            _vm._m(2, true),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass: "dropdown-menu dropdown-menu-right"
                              },
                              [
                                _vm.canDoUpdate
                                  ? _c(
                                      "router-link",
                                      {
                                        staticClass: "dropdown-item",
                                        attrs: {
                                          to:
                                            "audit-trail/create/" +
                                            audit_trail.id
                                        }
                                      },
                                      [_vm._v("Edit")]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.canDoDestroy
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: "dropdown-item cp",
                                        on: {
                                          click: function($event) {
                                            return _vm.hapus(audit_trail.id)
                                          }
                                        }
                                      },
                                      [_vm._v("Delete")]
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          ])
                        ]
                      )
                    : _vm._e()
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
                attrs: { limit: 1, data: _vm.in_audit_trail },
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
        _vm._v("Daftar Audit Trail")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { staticClass: "small" }, [_vm._v("Nama Field")]),
      _vm._v(" "),
      _c("th", { staticClass: "small" }, [_vm._v("V.Before")]),
      _vm._v(" "),
      _c("th", { staticClass: "small" }, [_vm._v("V.After")])
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
      [_c("i", { staticClass: "fa fa-ellipsis-v" })]
    )
  }
]
render._withStripped = true



/***/ })

}]);