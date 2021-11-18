"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vue_auth_konsumer-key_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/konsumer-key/create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/konsumer-key/create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      isAdded: false,
      konsumer_one_time_data: [],
      kd_konsumer_key: null,
      in_role: [],
      form: new Form({
        kd_konsumer_key: "",
        app_name: "",
        username: ""
      })
    };
  },
  mounted: function mounted() {
    if (this.$route.params.kd_konsumer_key) {
      this.kd_konsumer_key = this.$route.params.kd_konsumer_key;
      this.load_edited_data();
    } else {
      this.load_create();
    }
  },
  methods: {
    load_edited_data: function load_edited_data() {
      var _this = this;

      this.$Progress.start();
      axios.get(this.$api_konsumer_key + "/" + this.kd_konsumer_key + "/edit").then(function (respon) {
        _this.$Progress.finish();

        _this.form.fill(respon.data.in_konsumer_key);
      })["catch"](function (e) {
        _this.$Progress.fail();

        _this.$error["catch"](e);
      });
    },
    add: function add() {
      var _this2 = this;

      this.isAdded = false;
      this.$Progress.start();
      this.$toast.df102();
      this.form.post(this.$api_konsumer_key).then(function (response) {
        _this2.isAdded = true;
        _this2.konsumer_one_time_data = response.data.data;

        _this2.$Progress.finish();

        _this2.$toast.df200();
      })["catch"](function (e) {
        _this2.$Progress.fail();

        _this2.$error["catch"](e);
      });
    },
    update: function update() {
      var _this3 = this;

      this.$Progress.start();
      this.$toast.df102();
      this.form.put(this.$api_konsumer_key + "/" + this.kd_konsumer_key).then(function () {
        _this3.$Progress.finish();

        _this3.$toast.df200();
      })["catch"](function (e) {
        _this3.$Progress.fail();

        _this3.$error["catch"](e);
      });
    },
    //if there hase image  upload
    to_base64: function to_base64(e) {
      var _this4 = this;

      var file = e.target.files[0];
      var id = e.target.id;
      this.preview = URL.createObjectURL(file);
      var file_reader = new FileReader();

      if (file["size"] / 1024 < 2048) {
        file_reader.onloadend = function (file) {
          _this4.form[id] = file_reader.result;
        };

        file_reader.readAsDataURL(file);
      } else {
        window.gambarRule.fire();
      }
    }
  }
});

/***/ }),

/***/ "./resources/vue/auth/konsumer-key/create.vue":
/*!****************************************************!*\
  !*** ./resources/vue/auth/konsumer-key/create.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_638730b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=638730b6& */ "./resources/vue/auth/konsumer-key/create.vue?vue&type=template&id=638730b6&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/vue/auth/konsumer-key/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_638730b6___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_638730b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/auth/konsumer-key/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/vue/auth/konsumer-key/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/vue/auth/konsumer-key/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/konsumer-key/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/auth/konsumer-key/create.vue?vue&type=template&id=638730b6&":
/*!***********************************************************************************!*\
  !*** ./resources/vue/auth/konsumer-key/create.vue?vue&type=template&id=638730b6& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_638730b6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_638730b6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_638730b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=638730b6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/konsumer-key/create.vue?vue&type=template&id=638730b6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/konsumer-key/create.vue?vue&type=template&id=638730b6&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/konsumer-key/create.vue?vue&type=template&id=638730b6& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    [
      _c("kembali"),
      _vm._v(" "),
      _c("div", { staticClass: "bg-white rounded border" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "py-2 container" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  _vm.kd_konsumer_key == null ? _vm.add() : _vm.update()
                }
              }
            },
            [
              _c("table", { staticClass: "table table-borderless" }, [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "px-3 align-middle" }, [
                      _vm._v("Nama Konsumer")
                    ]),
                    _vm._v(" "),
                    _c("td", { staticClass: "px-3 align-middle" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.form.app_name,
                            expression: "form.app_name"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          required: "",
                          id: "nama",
                          maxlength: "50",
                          minlength: "1"
                        },
                        domProps: { value: _vm.form.app_name },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.form, "app_name", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm.form.errors.has("app_name")
                        ? _c("div", {
                            staticClass: "text-red",
                            domProps: {
                              innerHTML: _vm._s(_vm.form.errors.get("app_name"))
                            }
                          })
                        : _vm._e()
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-block btn-dark",
                  attrs: { type: "submit" }
                },
                [_vm._v("Simpan Konsumer Key")]
              )
            ]
          )
        ]),
        _vm._v(" "),
        _vm.isAdded
          ? _c("section", { staticClass: "container" }, [
              _c("div", { staticClass: "border p-2 m-2 rounded" }, [
                _vm._m(1),
                _vm._v(" "),
                _c("table", [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("Client-id")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(_vm._s(_vm.konsumer_one_time_data.client_id))
                      ])
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", [_vm._v("Client-secret")]),
                      _vm._v(" "),
                      _c("td", [
                        _vm._v(
                          _vm._s(
                            _vm.konsumer_one_time_data
                              .one_time_client_secret_show
                          )
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ])
          : _vm._e()
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row py-3 border-bottom" }, [
        _c("div", { staticClass: "col-sm" }, [
          _c("div", { staticClass: "font-weight-bolder" }, [
            _vm._v("Kelola Konsumer Key")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "alert alert-success", attrs: { role: "alert" } },
      [
        _c("h5", { staticClass: "font-weight-bolder" }, [
          _c("i", {
            staticClass: "fa fa-info-circle mr-2",
            attrs: { "aria-hidden": "true" }
          }),
          _vm._v(
            " Mohon untuk simpan data client-secret ini, karna hanya akan di tampilkan sekali\n               "
          )
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);