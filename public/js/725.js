"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[725],{9725:(t,s,r)=>{r.r(s),r.d(s,{default:()=>o});function n(t,s){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),r.push.apply(r,n)}return r}function e(t,s,r){return s in t?Object.defineProperty(t,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[s]=r,t}const i={data:function(){return{in_data:{}}},name:"home",computed:function(t){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?n(Object(r),!0).forEach((function(s){e(t,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(r,s))}))}return t}({},(0,r(629).rn)({count:function(t){return t.count}})),mounted:function(){this.load()},methods:{konfirmasi_hapus:function(){var t=this;konfirmasiHapus.fire().then((function(s){s.isConfirmed&&(t.progress_finish(),t.$toast.df102())}))},progress_finish:function(){this.$Progress.start(),this.$Progress.finish()},progress_fail:function(){this.$Progress.start(),this.$Progress.fail()},cek:function(t){console.log(t)},load:function(){var t=this;this.$Progress.start(),axios.get("https://shop.hamzahbatik.co.id/api/homepage?aktif=1").then((function(s){t.in_data=s.data.in_section,t.$Progress.finish()})).catch((function(s){t.$Progress.fail(),t.$error.catch(s)}))}}};const o=(0,r(1900).Z)(i,(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("div",{staticClass:"text-center"},[r("h3",{staticClass:"font-weight-bolder"},[t._v("New Amrullah Apps Dev Boiler")]),t._v(" "),r("hr"),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm"},[r("div",{staticClass:"m-1"},[r("label",{attrs:{for:""}},[t._v("Progress Bar")]),t._v(" "),r("br"),t._v(" "),r("button",{staticClass:"m-1 btn btn-primary",on:{click:function(s){return t.$Progress.start()}}},[t._v("Prgress Start")]),t._v(" "),r("button",{staticClass:"m-1 btn btn-success",on:{click:t.progress_finish}},[t._v("Prgress Finish")]),t._v(" "),r("button",{staticClass:"m-1 btn btn-danger",on:{click:t.progress_fail}},[t._v("Prgress Fail")])])]),t._v(" "),r("div",{staticClass:"col-sm"},[r("div",{staticClass:"m-1"},[r("label",{attrs:{for:""}},[t._v("Toast Group")]),t._v(" "),r("br"),t._v(" "),r("button",{staticClass:"m-1 btn btn-primary",on:{click:function(s){return t.$toast.df102()}}},[t._v("Loading")]),t._v(" "),r("button",{staticClass:"m-1 btn btn-success",on:{click:function(s){return t.$toast.df200()}}},[t._v("Success")]),t._v(" "),r("button",{staticClass:"m-1 btn btn-warning",on:{click:function(s){return t.$toast.df500()}}},[t._v("Test HTTP 500")]),t._v(" "),r("button",{staticClass:"m-1 btn btn-danger",on:{click:function(s){return t.$error.catch()}}},[t._v("Catch Error")]),t._v(" "),r("button",{staticClass:"m-1 btn btn-dark",on:{click:t.konfirmasi_hapus}},[t._v("Delete Confirmation")])])]),t._v(" "),r("div",{staticClass:"col-sm"},[r("div",{staticClass:"m-1"},[r("label",{attrs:{for:""}},[t._v("Test Vuext Setter Getter")]),t._v(" "),r("h1",[t._v(t._s(t.count))]),t._v(" "),r("button",{staticClass:"m-1 btn btn-primary",on:{click:function(s){return t.$store.commit("INCREMENT")}}},[t._v("INCREMENT")])])]),t._v(" "),r("div",{staticClass:"col-sm"},[r("div",{staticClass:"m-1"},[r("label",{attrs:{for:""}},[t._v("Default Component")]),t._v(" "),r("div",[r("kembali")],1),t._v(" "),r("div",[r("loading")],1),t._v(" "),r("div",[r("kosong")],1)])]),t._v(" "),r("div",{staticClass:"col-sm"},[r("div",{staticClass:"m-1"},[r("label",{attrs:{for:""}},[t._v("V-Money Input")]),t._v(" "),r("div",[r("money",{staticClass:"form-control"})],1)])])])])}),[],!1,null,null,null).exports}}]);