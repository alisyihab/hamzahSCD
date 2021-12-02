"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[827],{2827:(t,i,a)=>{a.r(i),a.d(i,{default:()=>e});const s={data:function(){return{queryUrlIfExist:"",detailHisotry:[],isPencarian:!1,isEditableData:!1,in_history_per_hit_client:{},cari_data:"",grup_url:""}},mounted:function(){this.grup_url=this.$router.currentRoute.name.split(".")[0],this.queryUrlIfExist=this.$router.currentRoute.query,this.verify_permission(),this.load()},methods:{checkIsPencarianTrue:function(){return!!this.$router.currentRoute.query.cari&&(this.cari_data=this.$router.currentRoute.query.cari,!0)},resetQueryIfExist:function(){this.$router.push(this.grup_url),this.queryUrlIfExist=[]},resetPencarian:function(){this.cari_data=null,this.resetQueryIfExist(),this.load()},updateRouteUrl:function(t){this.$router.push({path:this.$router.currentRoute.fullPath,query:t}),this.queryUrlIfExist=this.$router.currentRoute.query},showDetailsHistoryAsModal:function(t){$("#modal_showDetailsHistoryAsModal").modal("show"),this.detailHisotry=t},loadPaginate:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.updateRouteUrl({page:i}),axios.get(this.$api_history_per_hit_client,{params:this.queryUrlIfExist}).then((function(i){t.in_history_per_hit_client=i.data.in_history_per_hit_client}))},verify_permission:function(){var t=this;window.amr_data_permission_users.forEach((function(i){if(i.grup==t.grup_url){var a=i.url.split(".")[1];"store"==a&&(t.$canDoStore=!0),"update"==a&&(t.$canDoUpdate=!0),"destroy"==a&&(t.$canDoDestroy=!0)}}))},pencarian:function(){var t=this;this.resetQueryIfExist(),this.updateRouteUrl({cari:this.cari_data}),this.$Progress.start(),axios.get(this.$api_history_per_hit_client,{params:this.queryUrlIfExist}).then((function(i){t.isPencarian=!0,t.in_history_per_hit_client=i.data.in_history_per_hit_client,t.$Progress.finish()})).catch((function(i){t.$Progress.fail(),t.$error.catch(i)}))},load:function(){var t=this;this.isPencarian=this.checkIsPencarianTrue(),this.$Progress.start(),axios.get(this.$api_history_per_hit_client,{params:this.queryUrlIfExist}).then((function(i){t.in_history_per_hit_client=i.data.in_history_per_hit_client,t.$Progress.finish()})).catch((function(i){t.$error.catch(i),t.$Progress.fail()}))},hapus:function(t){var i=this;konfirmasiHapus.fire().then((function(a){a.isConfirmed&&(i.$toast.df102(),axios.delete(i.$api_history_per_hit_client+"/"+t).then((function(){i.$toast.df200(),i.load()})).catch((function(t){i.$error.catch(t)})))}))}}};const e=(0,a(1900).Z)(s,(function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"container"},[a("div",{staticClass:"bg-white box-shadow-1 border-radius-10"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row py-3"},[t._m(0),t._v(" "),a("div",{staticClass:"col-sm als"},[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.cari_data,expression:" cari_data "}],staticClass:"form-control form-control-sm",attrs:{type:"text",placeholder:" Cari Berdasrkan Nama Apliksi"},domProps:{value:t.cari_data},on:{keyup:function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.pencarian.apply(null,arguments)},input:function(i){i.target.composing||(t.cari_data=i.target.value)}}}),t._v(" "),a("span",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-outline-dark btn-sm round-right",on:{click:t.pencarian}},[a("i",{staticClass:"fa fa-search",attrs:{"aria-hidden":"true"}})])])])])]),t._v(" "),t.isPencarian?a("section",[t._v("\n            Hasil Dari : "+t._s(t.cari_data)+"\n            "),a("div",{staticClass:"text-blue cp",on:{click:function(i){return t.resetPencarian()}}},[t._v("Reset")])]):t._e(),t._v(" "),a("div",{staticClass:"py-2 table-responsive"},[a("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),t._l(t.in_history_per_hit_client.data,(function(i,s){return a("tr",{key:s},[a("td",{staticClass:"px-3 align-middle",attrs:{width:"25"}},[t._v(t._s(s+1))]),t._v(" "),a("td",{staticClass:"px-3 align-middle small"},[t._v(t._s(i.get_client_app.app_name))]),t._v(" "),a("td",{staticClass:"px-3 align-middle"},[t._v(t._s(i.path))]),t._v(" "),a("td",{staticClass:"px-3 align-middle"},[t._v(t._s(i.ip_address))]),t._v(" "),a("td",{staticClass:"px-3 align-middle"},[t._v(t._s(i.method))]),t._v(" "),a("td",{staticClass:"px-3 align-middle text-center small"},[t._v(t._s(t.$date(i.created_at).format("dddd, DD/MMM/YY HH:mm")))]),t._v(" "),a("td",{staticClass:"px-3 align-middle",attrs:{width:"25"}},[a("button",{staticClass:"btn btn-sm btn-outline-dark",on:{click:function(a){return t.showDetailsHistoryAsModal(i)}}},[a("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})])])])}))],2),t._v(" "),a("div",{staticClass:"container"},[a("pagination",{staticClass:"mt-3",attrs:{limit:1,data:t.in_history_per_hit_client},on:{"pagination-change-page":t.loadPaginate}})],1)])])]),t._v(" "),a("div",{staticClass:"modal fade",attrs:{id:"modal_showDetailsHistoryAsModal",tabindex:"-1"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg"},[a("div",{staticClass:"modal-content",staticStyle:{border:"none !important"}},[t._m(2),t._v(" "),a("div",{staticClass:"modal-body"},[a("table",{staticClass:"table table-borderless"},[a("thead",[a("tr",[a("th",[t._v("Client ID")]),t._v(" "),a("td",[t._v(t._s(t.detailHisotry.client_app_id))])]),t._v(" "),a("tr",[a("th",[t._v("Url Path")]),t._v(" "),a("td",[t._v(t._s(t.detailHisotry.path))])]),t._v(" "),a("tr",[a("th",[t._v("Ip Address")]),t._v(" "),a("td",[t._v(t._s(t.detailHisotry.ip_address))])]),t._v(" "),a("tr",[a("th",[t._v("Method")]),t._v(" "),a("td",[t._v(t._s(t.detailHisotry.method))])]),t._v(" "),a("tr",[a("th",[t._v("Browser Name")]),t._v(" "),a("td",[t._v(t._s(t.detailHisotry.browserName))])]),t._v(" "),a("tr",[a("th",[t._v("Browser Engine")]),t._v(" "),a("td",[t._v(t._s(t.detailHisotry.browserEngine))])]),t._v(" "),a("tr",[a("th",[t._v("Platform Name")]),t._v(" "),a("td",[t._v(t._s(t.detailHisotry.platformName))])]),t._v(" "),a("tr",[a("th",[t._v("Platform Family")]),t._v(" "),a("td",[t._v(t._s(t.detailHisotry.platformFamily))])]),t._v(" "),a("tr",[a("th",[t._v("Device Family")]),t._v(" "),a("td",[t._v(t._s(t.detailHisotry.deviceFamily))])])])])]),t._v(" "),t._m(3)])])])])}),[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"col-sm als"},[a("div",{staticClass:"font-weight-bolder h4"},[t._v("Client Hit History")])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("tr",[a("th",{staticClass:"px-3 align-middle"},[t._v("#")]),t._v(" "),a("th",{staticClass:"px-3 align-middle"},[t._v("App")]),t._v(" "),a("th",{staticClass:"px-3 align-middle"},[t._v("Path")]),t._v(" "),a("th",{staticClass:"px-3 align-middle"},[t._v("Ip Address")]),t._v(" "),a("th",{staticClass:"px-3 align-middle",attrs:{width:"25"}},[t._v("Method")]),t._v(" "),a("th",{staticClass:"px-3 align-middle text-center"},[t._v("Waktu")]),t._v(" "),a("th",{staticClass:"px-3 align-middle text-center"},[a("i",{staticClass:"fa fa-eye",attrs:{"aria-hidden":"true"}})])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"modal-header gr-bg-d-blue text-white"},[a("h5",{staticClass:"modal-title"},[t._v("Detail History Hit")]),t._v(" "),a("button",{staticClass:"close text-white",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-sm btn-outline-secondary btn-block",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])}],!1,null,null,null).exports}}]);