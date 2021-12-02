"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_vue_auth_kostumer-member_create_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/kostumer-member/create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/kostumer-member/create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    var _Form;

    return {
      kd_kostumer_member: null,
      in_role: [],
      api_data: null,
      wilayah: [],
      kecamatan: [],
      kelurahan: [],
      kodepos: [],
      form: new Form((_Form = {
        nama: "",
        nama_jenis_member: "",
        kelamin: "",
        agama: "",
        tgl_lahir: "",
        kewarganegaraan: "",
        status: "",
        daerah: "",
        email: "",
        telp1: "",
        telp2: "",
        provinsi: ""
      }, _defineProperty(_Form, "daerah", ""), _defineProperty(_Form, "kecamatan", ""), _defineProperty(_Form, "kelurahan", ""), _defineProperty(_Form, "kodepos", ""), _defineProperty(_Form, "fk_kd_jenis_member", ""), _Form))
    };
  },
  mounted: function mounted() {
    if (this.$route.params.kd_kostumer_member) {
      this.kd_kostumer_member = this.$route.params.kd_kostumer_member;
      this.load_kostumer_if_edit();
    }

    this.load_create_dependency();
  },
  methods: {
    getDataKodeposAfterSetKelurahan: function getDataKodeposAfterSetKelurahan() {
      var _this = this;

      axios.post(this.$api_kodepos, this.form.kelurahan).then(function (respon) {
        _this.kodepos = respon.data.api_data;
      })["catch"](function (e) {
        _this.$error["catch"](e);
      });
    },
    getDataKelurahanAfterSetKecamatan: function getDataKelurahanAfterSetKecamatan() {
      var _this2 = this;

      axios.post(this.$api_kelurahan, this.form.kecamatan).then(function (respon) {
        _this2.kelurahan = respon.data.api_data;
      })["catch"](function (e) {
        _this2.$error["catch"](e);
      });
    },
    getDataKecamatanAfterSetWilayah: function getDataKecamatanAfterSetWilayah() {
      var _this3 = this;

      axios.post(this.$api_kecamatan, this.form.daerah).then(function (respon) {
        _this3.kecamatan = respon.data.api_data;
      })["catch"](function (e) {
        _this3.$error["catch"](e);
      });
    },
    getDataWilayahAfterSetProvinsi: function getDataWilayahAfterSetProvinsi() {
      var _this4 = this;

      axios.post(this.$api_wilayah, this.form.provinsi).then(function (respon) {
        _this4.wilayah = respon.data.api_data;
      })["catch"](function (e) {
        _this4.$error["catch"](e);
      });
    },
    load_create_dependency: function load_create_dependency() {
      var _this5 = this;

      this.$Progress.start();
      axios.get(this.$api_kostumer_member + "/create").then(function (respon) {
        _this5.api_data = respon.data.api_data;

        _this5.$Progress.finish();
      })["catch"](function (e) {
        _this5.$Progress.fail();

        _this5.$error["catch"](e);
      });
    },
    load_kostumer_if_edit: function load_kostumer_if_edit() {
      var _this6 = this;

      this.$Progress.start();
      axios.get(this.$api_kostumer_member + "/" + this.kd_kostumer_member + "/edit").then(function (respon) {
        _this6.$Progress.finish();

        _this6.in_role = respon.data.in_role;

        _this6.form.fill(respon.data.api_data);

        _this6.form.tgl_lahir = _this6.$date(respon.data.api_data.tgl_lahir).format('YYYY-MM-DD');
      })["catch"](function (e) {
        _this6.$Progress.fail();

        _this6.$error["catch"](e);
      });
    },
    add: function add() {
      var _this7 = this;

      this.$Progress.start();
      this.$toast.df102();
      this.form.post(this.$api_kostumer_member).then(function () {
        _this7.$Progress.finish();

        _this7.$toast.df200();
      })["catch"](function (e) {
        _this7.$Progress.fail();

        _this7.$error["catch"](e);
      });
    },
    update: function update() {
      var _this8 = this;

      this.$Progress.start();
      this.$toast.df102();
      this.form.put(this.$api_kostumer_member + "/" + this.kd_kostumer_member).then(function () {
        _this8.$Progress.finish();

        _this8.$toast.df200();
      })["catch"](function (e) {
        _this8.$Progress.fail();

        _this8.$error["catch"](e);
      });
    },
    //if there hase image  upload
    to_base64: function to_base64(e) {
      var _this9 = this;

      var file = e.target.files[0];
      var id = e.target.id;
      this.preview = URL.createObjectURL(file);
      var file_reader = new FileReader();

      if (file["size"] / 1024 < 2048) {
        file_reader.onloadend = function (file) {
          _this9.form[id] = file_reader.result;
        };

        file_reader.readAsDataURL(file);
      } else {
        window.gambarRule.fire();
      }
    }
  }
});

/***/ }),

/***/ "./resources/vue/auth/kostumer-member/create.vue":
/*!*******************************************************!*\
  !*** ./resources/vue/auth/kostumer-member/create.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _create_vue_vue_type_template_id_422253c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=422253c4& */ "./resources/vue/auth/kostumer-member/create.vue?vue&type=template&id=422253c4&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/vue/auth/kostumer-member/create.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_422253c4___WEBPACK_IMPORTED_MODULE_0__.render,
  _create_vue_vue_type_template_id_422253c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/vue/auth/kostumer-member/create.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/vue/auth/kostumer-member/create.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/vue/auth/kostumer-member/create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/kostumer-member/create.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/vue/auth/kostumer-member/create.vue?vue&type=template&id=422253c4&":
/*!**************************************************************************************!*\
  !*** ./resources/vue/auth/kostumer-member/create.vue?vue&type=template&id=422253c4& ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_422253c4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_422253c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_422253c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./create.vue?vue&type=template&id=422253c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/kostumer-member/create.vue?vue&type=template&id=422253c4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/kostumer-member/create.vue?vue&type=template&id=422253c4&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/vue/auth/kostumer-member/create.vue?vue&type=template&id=422253c4& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
                  _vm.kd_kostumer_member == null ? _vm.add() : _vm.update()
                }
              }
            },
            [
              _c("div", { staticClass: "font-weight-bolder h5" }, [
                _vm._v("Keterangan Biodata")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "px-3" }, [
                _c("table", { staticClass: "table table-borderless" }, [
                  _c("thead", [
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "px-3 align-middle",
                          attrs: { width: "200" }
                        },
                        [_vm._v("Nama Kostumer")]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.nama,
                                expression: "form.nama"
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
                            domProps: { value: _vm.form.nama },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "nama", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.form.errors.has("nama")
                            ? _c("validasi", {
                                attrs: { msg: _vm.form.errors.get("nama") }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { staticClass: "px-3 align-middle" }, [
                        _vm._v("Kelamin")
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.kelamin,
                                  expression: "form.kelamin"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { required: "" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "kelamin",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "pria" } }, [
                                _vm._v("Pria")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "wanita" } }, [
                                _vm._v("Wanita")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.form.errors.has("kelamin")
                            ? _c("validasi", {
                                attrs: { msg: _vm.form.errors.get("kelamin") }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { staticClass: "px-3 align-middle" }, [
                        _vm._v("agama")
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.agama,
                                  expression: "form.agama"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { required: "" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "agama",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "test" } }, [
                                _vm._v("Test")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "islam" } }, [
                                _vm._v("Islam")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "kristern" } }, [
                                _vm._v("kristen")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.form.errors.has("agama")
                            ? _c("validasi", {
                                attrs: { msg: _vm.form.errors.get("agama") }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { staticClass: "px-3 align-middle" }, [
                        _vm._v("Tanggal Lahir")
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.tgl_lahir,
                                expression: "form.tgl_lahir"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "date", required: "", id: "nama" },
                            domProps: { value: _vm.form.tgl_lahir },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "tgl_lahir",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.form.errors.has("tgl_lahir")
                            ? _c("validasi", {
                                attrs: { msg: _vm.form.errors.get("tgl_lahir") }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { staticClass: "px-3 align-middle" }, [
                        _vm._v("kewarganegaraan")
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _vm.api_data != null
                            ? _c("multiselect", {
                                attrs: {
                                  options: _vm.api_data["negara"],
                                  "track-by": "nama_negara",
                                  label: "nama_negara"
                                },
                                model: {
                                  value: _vm.form.kewarganegaraan,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "kewarganegaraan", $$v)
                                  },
                                  expression: "form.kewarganegaraan"
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.errors.has("kewarganegaraan")
                            ? _c("validasi", {
                                attrs: {
                                  msg: _vm.form.errors.get("kewarganegaraan")
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { staticClass: "px-3 align-middle" }, [
                        _vm._v("Status Kostumer")
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.form.status_kostumer,
                                  expression: "form.status_kostumer"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { required: "" },
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.form,
                                    "status_kostumer",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "true" } }, [
                                _vm._v("Aktif")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "false" } }, [
                                _vm._v("Nonaktif")
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _vm.form.errors.has("status_kostumer")
                            ? _c("validasi", {
                                attrs: {
                                  msg: _vm.form.errors.get("status_kostumer")
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "font-weight-bolder h5" }, [
                _vm._v("Keterangan Alamat")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "px-3" }, [
                _c("table", { staticClass: "table table-borderless" }, [
                  _c("thead", [
                    _c("tr", [
                      _c("th", { staticClass: "px-3 align-middle" }, [
                        _vm._v("Provinsi")
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _vm.api_data != null
                            ? _c("multiselect", {
                                attrs: {
                                  options: _vm.api_data["provinsi"],
                                  "track-by": "provinsi",
                                  label: "provinsi"
                                },
                                on: {
                                  input: _vm.getDataWilayahAfterSetProvinsi
                                },
                                model: {
                                  value: _vm.form.provinsi,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "provinsi", $$v)
                                  },
                                  expression: "form.provinsi"
                                }
                              })
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.form.errors.has("provinsi")
                            ? _c("validasi", {
                                attrs: { msg: _vm.form.errors.get("provinsi") }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "px-3 align-middle",
                          attrs: { width: "200" }
                        },
                        [_vm._v("Wilayah (Kota / Kabupaten)")]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _c("multiselect", {
                            attrs: {
                              options: _vm.wilayah,
                              "track-by": "wilayah",
                              label: "wilayah"
                            },
                            on: { input: _vm.getDataKecamatanAfterSetWilayah },
                            model: {
                              value: _vm.form.daerah,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "daerah", $$v)
                              },
                              expression: "form.daerah"
                            }
                          }),
                          _vm._v(" "),
                          _vm.form.errors.has("daerah")
                            ? _c("validasi", {
                                attrs: { msg: _vm.form.errors.get("daerah") }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "px-3 align-middle",
                          attrs: { width: "200" }
                        },
                        [_vm._v("Kecamatan")]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _c("multiselect", {
                            attrs: {
                              options: _vm.kecamatan,
                              "track-by": "kecamatan",
                              label: "kecamatan"
                            },
                            on: {
                              input: _vm.getDataKelurahanAfterSetKecamatan
                            },
                            model: {
                              value: _vm.form.kecamatan,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "kecamatan", $$v)
                              },
                              expression: "form.kecamatan"
                            }
                          }),
                          _vm._v(" "),
                          _vm.form.errors.has("kecamatan")
                            ? _c("validasi", {
                                attrs: { msg: _vm.form.errors.get("kecamatan") }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "px-3 align-middle",
                          attrs: { width: "200" }
                        },
                        [_vm._v("Kelurahan")]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _c("multiselect", {
                            attrs: {
                              options: _vm.kelurahan,
                              "track-by": "kelurahan",
                              label: "kelurahan"
                            },
                            on: { input: _vm.getDataKodeposAfterSetKelurahan },
                            model: {
                              value: _vm.form.kelurahan,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "kelurahan", $$v)
                              },
                              expression: "form.kelurahan"
                            }
                          }),
                          _vm._v(" "),
                          _vm.form.errors.has("kelurahan")
                            ? _c("validasi", {
                                attrs: { msg: _vm.form.errors.get("kelurahan") }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "px-3 align-middle",
                          attrs: { width: "200" }
                        },
                        [_vm._v("Kodepos")]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _c("multiselect", {
                            attrs: {
                              options: _vm.kodepos,
                              "track-by": "kode_pos",
                              label: "kode_pos"
                            },
                            model: {
                              value: _vm.form.kodepos,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "kodepos", $$v)
                              },
                              expression: "form.kodepos"
                            }
                          }),
                          _vm._v(" "),
                          _vm.form.errors.has("kodepos")
                            ? _c("validasi", {
                                attrs: { msg: _vm.form.errors.get("kodepos") }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "px-3 align-middle",
                          attrs: { width: "200" }
                        },
                        [_vm._v("Alamat Lengkap")]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.alamat_lengkap,
                                expression: "form.alamat_lengkap"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.form.alamat_lengkap },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "alamat_lengkap",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.form.errors.has("alamat_lengkap")
                            ? _c("validasi", {
                                attrs: {
                                  msg: _vm.form.errors.get("alamat_lengkap")
                                }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "font-weight-bolder h5" }, [
                _vm._v("Kontak Aktif")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "px-3" }, [
                _c("table", { staticClass: "table table-borderless" }, [
                  _c("thead", [
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "px-3 align-middle",
                          attrs: { width: "200" }
                        },
                        [_vm._v("Email")]
                      ),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.email,
                                expression: "form.email"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "text", required: "" },
                            domProps: { value: _vm.form.email },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "email", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.form.errors.has("email")
                            ? _c("validasi", {
                                attrs: { msg: _vm.form.errors.get("email") }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { staticClass: "px-3 align-middle" }, [
                        _vm._v("Nomor Telp 1")
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.telp1,
                                expression: "form.telp1"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", required: "" },
                            domProps: { value: _vm.form.telp1 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "telp1", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.form.errors.has("telp1")
                            ? _c("validasi", {
                                attrs: { msg: _vm.form.errors.get("telp1") }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c("tr", [
                      _c("th", { staticClass: "px-3 align-middle" }, [
                        _vm._v("Nomor Telp 2")
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "px-3 align-middle" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.telp2,
                                expression: "form.telp2"
                              }
                            ],
                            staticClass: "form-control",
                            attrs: { type: "number", required: "" },
                            domProps: { value: _vm.form.telp2 },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "telp2", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.form.errors.has("telp2")
                            ? _c("validasi", {
                                attrs: { msg: _vm.form.errors.get("telp2") }
                              })
                            : _vm._e()
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "font-weight-bolder h5" }, [
                _vm._v("Jenis Member Kostumer")
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "px-3" }, [
                _c("table", { staticClass: "table table-borderless" }, [
                  _c("thead", [
                    _c("tr", [
                      _c(
                        "th",
                        {
                          staticClass: "px-3 align-middle",
                          attrs: { width: "200" }
                        },
                        [_vm._v("Member")]
                      ),
                      _vm._v(" "),
                      _vm.api_data != null
                        ? _c(
                            "td",
                            { staticClass: "px-3 align-middle" },
                            [
                              _c("multiselect", {
                                attrs: {
                                  options: _vm.api_data["jenis_member"],
                                  "track-by": "kd_jenis_member",
                                  label: "nama_jenis_member"
                                },
                                model: {
                                  value: _vm.form.fk_kd_jenis_member,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form,
                                      "fk_kd_jenis_member",
                                      $$v
                                    )
                                  },
                                  expression: "form.fk_kd_jenis_member"
                                }
                              }),
                              _vm._v(" "),
                              _vm.form.errors.has("kodepos")
                                ? _c("validasi", {
                                    attrs: {
                                      msg: _vm.form.errors.get("kodepos")
                                    }
                                  })
                                : _vm._e()
                            ],
                            1
                          )
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
                [_vm._v("Simpan Kostumer")]
              )
            ]
          )
        ])
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
            _vm._v("Kelola Kostumer")
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);