"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[957],{1957:(t,s,a)=>{a.r(s),a.d(s,{default:()=>e});const i={data:function(){return{isEdit:!1,in_permission:[],form:new Form({kd_sub_sidebar:"",nama_sub_sidebar:"",data_permission:"",fk_kd_sidebar:"",status_sub_sidebar:""})}},mounted:function(){this.form.fk_kd_sidebar=this.$router.currentRoute.params.kd_sidebar,this.$router.currentRoute.params.kd_sub_sidebar?(this.isEdit=!0,this.kd_sub_sidebar=this.$router.currentRoute.params.kd_sub_sidebar,this.load_if_edit()):this.load_create()},methods:{setNameToForm:function(){this.form.nama_sub_sidebar=this.form.data_permission.nama_route},load_if_edit:function(){var t=this;this.$Progress.start(),axios.get(this.$api_sub_sidebar+"/"+this.kd_sub_sidebar+"/edit").then((function(s){t.$Progress.finish(),t.in_permission=s.data.in_permission;var a=t.in_permission.map((function(t){return t.route_url})).indexOf(s.data.in_sub_sidebar.fk_nama_permission);t.form.fill(s.data.in_sub_sidebar),t.form.data_permission=t.in_permission[a]})).catch((function(s){t.$Progress.fail(),t.$error.catch(s)}))},load_create:function(){var t=this;this.$Progress.start(),axios.get(this.$api_sub_sidebar+"/create").then((function(s){t.$Progress.finish(),t.in_permission=s.data.in_permission})).catch((function(s){t.$Progress.fail(),t.$error.catch(s)}))},submit:function(){var t=this;this.form.post(this.$api_sub_sidebar).then((function(){t.$toast.df200()})).catch((function(s){t.$error.catch(s)}))},update:function(){var t=this;this.form.put(this.$api_sub_sidebar+"/"+this.form.kd_sub_sidebar).then((function(){t.$toast.df200()})).catch((function(s){t.$error.catch(s)}))}}};const e=(0,a(1900).Z)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("kembali"),t._v(" "),a("div",{staticClass:"bg-white p-2 rounded"},[a("div",{staticClass:"h5-font-size font-weight-bolder"},[t._v("Kelola Subsidebar")]),t._v(" "),a("hr"),t._v(" "),a("form",{on:{submit:function(s){s.preventDefault(),t.isEdit?t.update():t.submit()}}},[a("table",{staticClass:"table table-borderless"},[a("thead",[a("tr",[a("th",[t._v("Nama Route")]),t._v(" "),a("td",[a("div",[a("multiselect",{attrs:{options:t.in_permission,"track-by":"route_url",label:"nama_route"},on:{input:t.setNameToForm},model:{value:t.form.data_permission,callback:function(s){t.$set(t.form,"data_permission",s)},expression:"form.data_permission"}})],1)])]),t._v(" "),a("tr",[a("th",[t._v("Nama subsidebar")]),t._v(" "),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.form.nama_sub_sidebar,expression:"form.nama_sub_sidebar"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.form.nama_sub_sidebar},on:{input:function(s){s.target.composing||t.$set(t.form,"nama_sub_sidebar",s.target.value)}}})])]),t._v(" "),a("tr",[a("th",[t._v("Status")]),t._v(" "),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:t.form.status_sub_sidebar,expression:"form.status_sub_sidebar"}],staticClass:"form-control",attrs:{required:""},on:{change:function(s){var a=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.form,"status_sub_sidebar",s.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"true"}},[t._v("Aktif")]),t._v(" "),a("option",{attrs:{value:"false"}},[t._v("Nonaktif")])])])])])]),t._v(" "),t._m(0)])])],1)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"my-2"},[a("button",{staticClass:"btn btn-dark btn-block btn-sm btn-submit-data",attrs:{type:"submit"}},[t._v("Simpan")])])}],!1,null,null,null).exports}}]);