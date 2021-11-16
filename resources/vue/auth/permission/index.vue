
<template>
   <div>
      <div class="bg-white rounded border">
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
         <section v-if="isPencarian" class="container">
            Hasil Dari : {{cari_data}}
            <div class="text-blue cp" @click="load_kelola_user()">Reset</div>
         </section>
         <div class="py-2">
            <table class="table table-hover">
               <tr>
                  <th class="px-3 align-middle">Nama Route</th>
                  <th class="px-3 align-middle">Nama Grup</th>
                  <th class="px-3 align-middle">Route URL</th>
                  <th class="px-3 align-middle"></th>
               </tr>
               <tr v-for="(permission,i) in in_permission" :key="i">
                  <td class="px-3 align-middle">{{permission.nama_route}}</td>
                  <td class="px-3 align-middle">{{permission.nama_grup}}</td>
                  <td class="px-3 align-middle">{{permission.route_url}}</td>
                  <td width="25" class="ox-3 align-middle">
                     <i
                        class="fa fa-trash text-danger"
                        @click="hapus(permission.kd_permission)"
                        aria-hidden="true"
                     ></i>
                  </td>
               </tr>
            </table>
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
         canDoStore: false,
         canDoUpdate: false,
         canDoDestroy: false,
         grup_url: "permission",
         isPencarian: false
      };
   },
   mounted() {
      this.verify_permission();
      this.load_permission();
   },
   methods: {
      verify_permission() {
         window.amr_data_permission_users.forEach(permission => {
            if (permission.grup == this.grup_url) {
               let data_permission = permission.url.split(".")[1];
               if (data_permission == "store") {
                  this.canDoStore = true;
               }
               if (data_permission == "update") {
                  this.canDoUpdate = true;
               }
               if (data_permission == "destroy") {
                  this.canDoDestroy = true;
               }
            }
         });
      },
      pencarian() {
         this.isPencarian = true;
         this.$Progress.start();
         axios
            .get("/api/permission/pencarian?cari=" + this.cari_data)
            .then(respon => {
               this.$Progress.finish();
               this.in_permission = respon.data.in_permission;
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },
      load_permission() {
         this.isPencarian = false;
         this.cari_data = null;
         this.$Progress.start();
         axios
            .get("/api/permission")
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
                  .delete("/api/permission/" + data_kode)
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
