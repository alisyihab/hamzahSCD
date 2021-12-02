"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[482],{1482:(t,a,e)=>{e.r(a),e.d(a,{default:()=>n});function i(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}const s={data:function(){var t;return i(t={isPencarian:!1,queryUrlIfExist:"",api_data:{},cari_data:""},"isPencarian",!1),i(t,"grup_url",""),t},mounted:function(){this.grup_url=this.$router.currentRoute.name.split(".")[0],this.queryUrlIfExist=this.$router.currentRoute.query,this.verify_permission(),this.load_data()},methods:{checkIsPencarianTrue:function(){return!!this.$router.currentRoute.query.cari&&(this.cari_data=this.$router.currentRoute.query.cari,!0)},resetQueryIfExist:function(){this.$router.push(this.grup_url),this.queryUrlIfExist=[]},resetPencarian:function(){this.cari_data=null,this.resetQueryIfExist(),this.load_data()},updateRouteUrl:function(t){this.$router.push({path:this.$router.currentRoute.fullPath,query:t}),this.queryUrlIfExist=this.$router.currentRoute.query},loadPaginate:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.updateRouteUrl({page:a}),axios.get(this.$api_jenis_member,{params:this.queryUrlIfExist}).then((function(a){t.api_data=a.data.api_data}))},verify_permission:function(){var t=this;window.amr_data_permission_users.forEach((function(a){if(a.grup==t.grup_url){var e=a.url.split(".")[1];"store"==e&&(t.$canDoStore=!0),"update"==e&&(t.$canDoUpdate=!0),"destroy"==e&&(t.$canDoDestroy=!0)}}))},pencarian:function(){var t=this;this.resetQueryIfExist(),this.updateRouteUrl({cari:this.cari_data}),this.$Progress.start(),axios.get(this.$api_jenis_member,{params:this.queryUrlIfExist}).then((function(a){t.$Progress.finish(),t.api_data=a.data.api_data,t.isPencarian=!0})).catch((function(a){t.$Progress.fail(),t.$error.catch(a)}))},load_data:function(){var t=this;this.isPencarian=this.checkIsPencarianTrue(),this.$Progress.start(),axios.get(this.$api_jenis_member,{params:this.queryUrlIfExist}).then((function(a){t.$Progress.finish(),t.api_data=a.data.api_data})).catch((function(a){t.$Progress.fail(),t.$error.catch(a)}))},hapus:function(t){var a=this;konfirmasiHapus.fire().then((function(e){e.isConfirmed&&(a.$toast.df102(),axios.delete(a.$api_jenis_member+"/"+t).then((function(){a.$toast.df200(),a.load_data()})).catch((function(t){a.$error.catch(t)})))}))}}};var r=(0,e(1900).Z)(s,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"bg-white box-shadow-1 rounded border-radius-10"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row py-3"},[t._m(0),t._v(" "),e("div",{staticClass:"col-sm als"},[e("div",{staticClass:"input-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.cari_data,expression:" cari_data "}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:" Cari Berdasrkan Nama Jenis Member  "},domProps:{value:t.cari_data},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.pencarian.apply(null,arguments)},input:function(a){a.target.composing||(t.cari_data=a.target.value)}}}),t._v(" "),e("span",{staticClass:"input-group-prepend"},[e("button",{staticClass:"btn btn-outline-dark btn-sm round-right",on:{click:t.pencarian}},[e("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])])]),t._v(" "),t.$canDoStore?e("div",{staticClass:"col-sm-5"},[e("div",{staticClass:"my-2"},[e("router-link",{staticClass:"btn btn-dark btn-block btn-sm",attrs:{to:"/jenis-member/create"}},[t._v("Tambah Jenis Member")])],1)]):t._e()]),t._v(" "),t.isPencarian?e("section",[t._v("\n            Hasil Dari : "+t._s(t.cari_data)+"\n            "),e("div",{staticClass:"text-blue cp",on:{click:function(a){return t.resetPencarian()}}},[t._v("Reset")])]):t._e(),t._v(" "),e("div",{staticClass:"py-2 table-responsive"},[e("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),t._l(t.api_data.data,(function(a,i){return e("tr",{key:i},[e("td",[t._v(t._s(i+1))]),t._v(" "),e("td",{staticClass:"px-3 align-middle"},[t._v(t._s(a.nama_jenis_member))]),t._v(" "),e("td",{staticClass:"px-3 align-middle"},[t._v(t._s(t._f("STATUS")(a.status)))]),t._v(" "),e("td",{staticClass:"px-3 align-middle text-center",attrs:{width:"25"}},[e("div",{staticClass:"btn-group"},[t._m(2,!0),t._v(" "),e("div",{staticClass:"dropdown-menu dropdown-menu-right"},[t.$canDoUpdate?e("router-link",{staticClass:"dropdown-item",attrs:{to:"jenis-member/edit/"+a.kd_jenis_member}},[t._v("Edit")]):t._e(),t._v(" "),t.$canDoDestroy?e("div",{staticClass:"dropdown-item cp",on:{click:function(e){return t.hapus(a.kd_jenis_member)}}},[t._v("Delete")]):t._e()],1)])])])}))],2),t._v(" "),e("div",{staticClass:"container"},[e("pagination",{staticClass:"mt-3",attrs:{limit:1,data:t.api_data},on:{"pagination-change-page":t.loadPaginate}})],1)])])])])}),[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-sm als"},[e("div",{staticClass:"font-weight-bolder h4"},[t._v("Daftar Jenis Member")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("#")]),t._v(" "),e("th",{staticClass:"px-3 align-middle"},[t._v("Nama")]),t._v(" "),e("th",{staticClass:"px-3 align-middle"},[t._v("Status")]),t._v(" "),e("th",{staticClass:"px-3 align-middle text-center"},[e("i",{staticClass:"fa fa-ellipsis-v"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("button",{staticClass:"btn btn-sm",attrs:{type:"button","data-toggle":"dropdown"}},[a("i",{staticClass:"fa fa-ellipsis-v"})])}],!1,null,null,null);const n=r.exports}}]);