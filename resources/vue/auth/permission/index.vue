
<template>
   <div class="container">
      <div class="bg-white box-shadow-1 border-radius-10">
         <div class="container">
            <div class="row py-3">
               <div class="col-sm als">
                  <div class="font-weight-bolder h4">Daftar permission</div>
               </div>
               <div class="col-sm als">
                  <div class="input-group">
                     <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder=" Cari Berdasrkan Nama permission  "
                        v-model=" cari_data "
                        @keyup.enter="pencarian"
                     />
                     <span class="input-group-prepend">
                        <button class="btn btn-outline-dark btn-sm round-right" @click="pencarian">
                           <i class="fa fa-search" aria-hidden="true"></i>
                        </button>
                     </span>
                  </div>
               </div>
            </div>
         </div>
         <div class="alert alert-dark" role="alert">
            <h4 class="alert-heading">Kelola Permission</h4>
            <p>Untuk mengelola permission hanya bisa dilakukan saat menggenerate api terbaru, pastikan melakukan regenerate saat telah mengimplementasikan api baru</p>
            <p class="mb-0"></p>
         </div>
         <div class="container">
            <section v-if="isPencarian" class="container">
               Hasil Dari : {{cari_data}}
               <div class="text-blue cp" @click="resetPencarian()">Reset</div>
            </section>
            <div class="py-2">
               <table class="table table-hover">
                  <tr>
                     <th class="px-3 align-middle">Nama Route</th>
                     <th class="px-3 align-middle">Nama Grup</th>
                     <th class="px-3 align-middle">Route URL</th>
                     <th class="px-3 align-middle"></th>
                  </tr>
                  <tr v-for="(permission,i) in in_permission.data" :key="i">
                     <td class="px-3 align-middle">{{permission.nama_route}}</td>
                     <td class="px-3 align-middle">{{permission.nama_grup}}</td>
                     <td class="px-3 align-middle">{{permission.route_url}}</td>
                     <td width="25" class="ox-3 align-middle">
                        <i
                           v-if="$canDoDestroy"
                           class="fa fa-trash text-danger"
                           @click="hapus(permission.kd_permission)"
                           aria-hidden="true"
                        ></i>
                     </td>
                  </tr>
               </table>
               <div class="container">
                  <pagination
                     class="mt-3"
                     :limit="1"
                     :data="in_permission"
                     @pagination-change-page="loadPaginate"
                  ></pagination>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         in_permission: {},
         cari_data: "",
         grup_url: "",
         queryUrlIfExist: "",
         isPencarian: false
      };
   },
   mounted() {
      this.grup_url = this.$router.currentRoute.name.split(".")[0];
      this.queryUrlIfExist = this.$router.currentRoute.query;
      this.verify_permission();
      this.load_permission();
   },
   methods: {
      checkIsPencarianTrue() {
         if (this.$router.currentRoute.query.cari) {
            this.cari_data = this.$router.currentRoute.query.cari;
            return true;
         }
         return false;
      },

      resetQueryIfExist() {
         this.$router.push(this.grup_url);
         this.queryUrlIfExist = [];
      },

      resetPencarian() {
         this.cari_data = null;
         this.resetQueryIfExist();
         this.load_permission();
      },

      updateRouteUrl(data) {
         this.$router.push({
            path: this.$router.currentRoute.fullPath,
            query: data
         });
         this.queryUrlIfExist = this.$router.currentRoute.query;
      },

      loadPaginate(page = 1) {
         this.updateRouteUrl({ page: page });
         axios
            .get(this.$api_permission, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.in_permission = respon.data.in_permission;
            });
      },
      verify_permission() {
         window.amr_data_permission_users.forEach(permission => {
            if (permission.grup == this.grup_url) {
               let data_permission = permission.url.split(".")[1];
               if (data_permission == "destroy") {
                  this.$canDoDestroy = true;
               }
            }
         });
      },
      pencarian() {
         this.resetQueryIfExist();
         this.updateRouteUrl({ cari: this.cari_data });
         this.$Progress.start();

         axios
            .get(this.$api_permission, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.isPencarian = true;
               this.$Progress.finish();
               this.in_permission = respon.data.in_permission;
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },

      load_permission() {
         this.isPencarian = this.checkIsPencarianTrue();
         this.$Progress.start();
         axios
            .get(this.$api_permission, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.$Progress.finish();
               this.in_permission = respon.data.in_permission;
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },
      hapus(data_kode) {
         konfirmasiHapus.fire().then(result => {
            if (result.isConfirmed) {
               this.$toast.df102();
               axios
                  .delete(this.$api_permission + "/" + data_kode)
                  .then(() => {
                     this.$toast.df200();
                     this.load_permission();
                  })
                  .catch(e => {
                     this.$error.catch(e);
                  });
            }
         });
      }
   }
};
</script>
