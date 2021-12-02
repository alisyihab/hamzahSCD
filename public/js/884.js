"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[884],{2884:(t,s,a)=>{a.r(s),a.d(s,{default:()=>e});const i={data:function(){return{kd_sidebar:"",in_sidebar:[],canDoStore:!0,canDoUpdate:!0,canDoDestroy:!0,grup_url:"subsidebar"}},mounted:function(){this.kd_sidebar=this.$router.currentRoute.params.kd_sidebar,this.verify_permission(),this.load()},methods:{updateUrutan:function(t){var s=this;this.$toast.df102();var a={urutan_only:!0,urutan_subsidebar:t.target.value};axios.put(this.$api_sub_sidebar+"/"+t.target.id,a).then((function(){s.load(),s.$toast.df200()})).catch((function(t){s.$error.catch(t)}))},verify_permission:function(){var t=this;window.amr_data_permission_users.forEach((function(s){if(s.grup==t.grup_url){var a=s.url.split(".")[1];"store"==a&&(t.canDoStore=!0),"update"==a&&(t.canDoUpdate=!0),"destroy"==a&&(t.canDoDestroy=!0)}}))},create_subsidebar:function(){this.$router.push({name:"subsidebar.store",params:{kd_sidebar:this.kd_sidebar}})},load:function(){var t=this;this.$Progress.start(),axios.get(this.$api_sidebar+"/"+this.kd_sidebar).then((function(s){t.in_sidebar=s.data.in_sidebar,t.$Progress.finish()})).catch((function(s){t.$Progress.fail(),t.$error.catch(s)}))},edit:function(t){this.$router.push({name:"subsidebar.update",params:{kd_sidebar:t.fk_kd_sidebar,kd_sub_sidebar:t.kd_sub_sidebar}})},hapus:function(t){var s=this;konfirmasiHapus.fire().then((function(a){a.isConfirmed&&(s.$toast.df102(),axios.delete(s.$api_sub_sidebar+"/"+t).then((function(){s.$toast.df200(),s.load()})).catch((function(t){s.error.catch(t)})))}))}}};const e=(0,a(1900).Z)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("kembali"),t._v(" "),a("div",{staticClass:"bg-white box-shadow-1 rounded border-radius-10 p-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm col-md als"},[a("div",{staticClass:"m-2 f5-fz font-weight-bolder"},[t._v("Kelola Sidebar : "+t._s(t.in_sidebar.nama_sidebar))])]),t._v(" "),t.canDoStore?a("div",{staticClass:"col-sm col-md-4"},[a("div",{staticClass:"m-2"},[a("button",{staticClass:"btn btn-block btn-sm btn-dark",on:{click:t.create_subsidebar}},[t._v("Tambah Subsidebar")])])]):t._e()]),t._v(" "),a("div",{staticClass:"bg-white"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table-sm table-hover table"},[t._m(0),t._v(" "),a("tbody",t._l(t.in_sidebar.get_subsidebar,(function(s,i){return a("tr",{key:i},[a("td",{staticClass:"px-3"},[t._v(t._s(i+1))]),t._v(" "),a("td",{staticClass:"px-3"},[t._v(t._s(s.nama_sub_sidebar))]),t._v(" "),a("td",{staticClass:"px-3"},[t._v(t._s(t._f("STATUS")(s.status_sub_sidebar)))]),t._v(" "),a("td",{staticClass:"px-3",attrs:{width:"25"}},[a("input",{staticClass:"form-control text-center",attrs:{type:"text",id:s.kd_sub_sidebar},domProps:{value:s.urutan_sub_sidebar},on:{change:t.updateUrutan}})]),t._v(" "),a("td",{staticClass:"px-3"},[a("div",{staticClass:"btn-group"},[t._m(1,!0),t._v(" "),a("div",{staticClass:"dropdown-menu dropdown-menu-right"},[t.canDoUpdate?a("a",{staticClass:"dropdown-item",on:{click:function(a){return t.edit(s)}}},[t._v("Edit")]):t._e(),t._v(" "),t.canDoDestroy?a("a",{staticClass:"dropdown-item",on:{click:function(a){return t.hapus(s.kd_sub_sidebar)}}},[t._v("Hapus")]):t._e()])])])])})),0)])])])])],1)}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("th",{staticClass:"px-3"},[t._v("#")]),t._v(" "),a("th",{staticClass:"px-3"},[t._v("Nama")]),t._v(" "),a("th",{staticClass:"px-3"},[t._v("Status")]),t._v(" "),a("th",{staticClass:"text-center px-3"},[t._v("Urutan")]),t._v(" "),a("th",{staticClass:"px-3"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("button",{staticClass:"btn btn-sm",attrs:{type:"button","data-toggle":"dropdown"}},[s("i",{staticClass:"fa fa-ellipsis-v",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null).exports}}]);