"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vue_auth_history-per-hit-client_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/history-per-hit-client/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/history-per-hit-client/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      detailHisotry: [],
      isPencarian: false,
      isEditableData: false,
      in_history_per_hit_client: {},
      cari_data: "",
      grup_url: ""
    };
  },
  mounted: function mounted() {
    this.grup_url = this.$router.currentRoute.name.split(".")[0];
    this.verify_permission();
    this.load();
  },
  methods: {
    showDetailsHistoryAsModal: function showDetailsHistoryAsModal(dataHisotry) {
      $("#modal_showDetailsHistoryAsModal").modal("show");
      this.detailHisotry = dataHisotry;
    },
    loadPaginate: function loadPaginate() {
      var _this = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.$router.push(this.$router.currentRoute.path + "?page=" + page);
      axios.get(this.$api_history_per_hit_client + "?page=" + page).then(function (respon) {
        _this.in_history_per_hit_client = respon.data.in_history_per_hit_client;
      });
    },
    verify_permission: function verify_permission() {
      var _this2 = this;

      window.amr_data_permission_users.forEach(function (permission) {
        if (permission.grup == _this2.grup_url) {
          var data_permission = permission.url.split(".")[1];

          if (data_permission == "store") {
            _this2.$canDoStore = true;
          }

          if (data_permission == "update") {
            _this2.$canDoUpdate = true;
          }

          if (data_permission == "destroy") {
            _this2.$canDoDestroy = true;
          }
        }
      });
    },
    pencarian: function pencarian() {
      var _this3 = this;

      this.$Progress.start();
      axios.get(this.$api_history_per_hit_client + "/pencarian?cari=" + this.cari_data).then(function (respon) {
        _this3.isPencarian = true;

        _this3.$Progress.finish();

        _this3.in_history_per_hit_client = respon.data.in_history_per_hit_client;
      })["catch"](function (e) {
        _this3.$Progress.fail();

        _this3.$error["catch"](e);
      });
    },
    load: function load() {
      var _this4 = this;

      this.isPencarian = false;
      this.$Progress.start();
      axios.get(this.$api_history_per_hit_client).then(function (respon) {
        _this4.$Progress.finish();

        _this4.in_history_per_hit_client = respon.data.in_history_per_hit_client;
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

          axios["delete"](_this5.$api_history_per_hit_client + "/" + data_kode).then(function () {
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

/***/ "./resources/vue/auth/history-per-hit-client/index.vue":
/*!*************************************************************!*\
  !*** ./resources/vue/auth/history-per-hit-client/index.vue ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_50d21087___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=50d21087& */ "./resources/vue/auth/history-per-hit-client/index.vue?vue&type=template&id=50d21087&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/vue/auth/history-per-hit-client/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_50d21087___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_50d21087___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/auth/history-per-hit-client/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/vue/auth/history-per-hit-client/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/vue/auth/history-per-hit-client/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/history-per-hit-client/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/auth/history-per-hit-client/index.vue?vue&type=template&id=50d21087&":
/*!********************************************************************************************!*\
  !*** ./resources/vue/auth/history-per-hit-client/index.vue?vue&type=template&id=50d21087& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_50d21087___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_50d21087___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_50d21087___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=50d21087& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/history-per-hit-client/index.vue?vue&type=template&id=50d21087&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/history-per-hit-client/index.vue?vue&type=template&id=50d21087&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/history-per-hit-client/index.vue?vue&type=template&id=50d21087& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
                  placeholder: " Cari Berdasrkan Nama Apliksi"
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
        _c("div", { staticClass: "py-2 table-responsive" }, [
          _c(
            "table",
            { staticClass: "table table-hover" },
            [
              _vm._m(1),
              _vm._v(" "),
              _vm._l(_vm.in_history_per_hit_client.data, function(history, i) {
                return _c("tr", { key: i }, [
                  _c(
                    "td",
                    {
                      staticClass: "px-3 align-middle",
                      attrs: { width: "25" }
                    },
                    [_vm._v(_vm._s(i + 1))]
                  ),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-3 align-middle small" }, [
                    _vm._v(_vm._s(history.get_client_app.app_name))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-3 align-middle" }, [
                    _vm._v(_vm._s(history.path))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-3 align-middle" }, [
                    _vm._v(_vm._s(history.ip_address))
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "px-3 align-middle" }, [
                    _vm._v(_vm._s(history.method))
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    { staticClass: "px-3 align-middle text-center small" },
                    [
                      _vm._v(
                        _vm._s(
                          _vm
                            .$date(history.created_at)
                            .format("dddd, DD/MMM/YY HH:mm")
                        )
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "td",
                    {
                      staticClass: "px-3 align-middle",
                      attrs: { width: "25" }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-sm btn-outline-dark",
                          on: {
                            click: function($event) {
                              return _vm.showDetailsHistoryAsModal(history)
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-eye",
                            attrs: { "aria-hidden": "true" }
                          })
                        ]
                      )
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
                attrs: { limit: 1, data: _vm.in_history_per_hit_client },
                on: { "pagination-change-page": _vm.loadPaginate }
              })
            ],
            1
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      {
        staticClass: "modal fade",
        attrs: { id: "modal_showDetailsHistoryAsModal", tabindex: "-1" }
      },
      [
        _c(
          "div",
          {
            staticClass:
              "modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"
          },
          [
            _c(
              "div",
              {
                staticClass: "modal-content",
                staticStyle: { border: "none !important" }
              },
              [
                _vm._m(2),
                _vm._v(" "),
                _c("div", { staticClass: "modal-body" }, [
                  _c("table", { staticClass: "table table-borderless" }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("Client ID")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.detailHisotry.client_app_id))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Url Path")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.detailHisotry.path))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Ip Address")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.detailHisotry.ip_address))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Method")]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(_vm.detailHisotry.method))])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Browser Name")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.detailHisotry.browserName))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Browser Engine")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.detailHisotry.browserEngine))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Platform Name")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.detailHisotry.platformName))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Platform Family")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.detailHisotry.platformFamily))
                        ])
                      ]),
                      _vm._v(" "),
                      _c("tr", [
                        _c("th", [_vm._v("Device Family")]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm.detailHisotry.deviceFamily))
                        ])
                      ])
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm._m(3)
              ]
            )
          ]
        )
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-sm als" }, [
      _c("div", { staticClass: "font-weight-bolder h4" }, [
        _vm._v("Client Hit History")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tr", [
      _c("th", { staticClass: "px-3 align-middle" }, [_vm._v("#")]),
      _vm._v(" "),
      _c("th", { staticClass: "px-3 align-middle" }, [_vm._v("App")]),
      _vm._v(" "),
      _c("th", { staticClass: "px-3 align-middle" }, [_vm._v("Path")]),
      _vm._v(" "),
      _c("th", { staticClass: "px-3 align-middle" }, [_vm._v("Ip Address")]),
      _vm._v(" "),
      _c("th", { staticClass: "px-3 align-middle", attrs: { width: "25" } }, [
        _vm._v("Method")
      ]),
      _vm._v(" "),
      _c("th", { staticClass: "px-3 align-middle text-center" }, [
        _vm._v("Waktu")
      ]),
      _vm._v(" "),
      _c("th", { staticClass: "px-3 align-middle text-center" }, [
        _c("i", { staticClass: "fa fa-eye", attrs: { "aria-hidden": "true" } })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-header gr-bg-d-blue text-white" }, [
      _c("h5", { staticClass: "modal-title" }, [_vm._v("Detail History Hit")]),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "close text-white",
          attrs: {
            type: "button",
            "data-dismiss": "modal",
            "aria-label": "Close"
          }
        },
        [_c("span", { attrs: { "aria-hidden": "true" } }, [_vm._v("×")])]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-footer" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-sm btn-outline-secondary btn-block",
          attrs: { type: "button", "data-dismiss": "modal" }
        },
        [_vm._v("Close")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);