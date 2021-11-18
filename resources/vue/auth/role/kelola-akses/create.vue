
<template>
   <div class="container">
      <kembali></kembali>
      <div class="bg-white box-shadow-1 border-radius-10">
         <div class="container">
            <div class="row py-3">
               <div class="col-sm als">
                  <div class="font-weight-bolder h5-font-size">Daftar Akses</div>
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
            <section v-if="isPencarian">
               Hasil Dari : {{cari_data}}
               <div class="text-blue cp" @click="reset()">Reset</div>
            </section>
            <div class="py-2 table-responsive">
               <table class="table table-hover">
                  <tr>
                     <th class="px-3 align-middle">Deskripsi Route</th>
                     <th class="px-3 align-middle">grup</th>
                     <th class="px-3 align-middle">Nama Route</th>
                     <th></th>
                  </tr>
                  <tr v-for="(permission,i) in in_permission" :key="i">
                     <td class="px-3 align-middle">{{permission.nama_route}}</td>
                     <td class="px-3 align-middle">{{permission.nama_grup}}</td>
                     <td class="px-3 align-middle">{{permission.route_url}}</td>
                     <td>
                        <button
                           class="btn btn-block btn-dark btn-block btn-sm"
                           @click="pilih_akses(permission.route_url)"
                        >
                           <i class="fa fa-check mr-2" aria-hidden="true"></i>
                           Pilih
                        </button>
                     </td>
                  </tr>
               </table>
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
         kd_role: "",
         isPencarian: false
      };
   },
   mounted() {
      this.kd_role = this.$router.currentRoute.params.kd_role;
      this.load_permission();
   },
   methods: {
      reset() {
         this.isPencarian = false;
         this.load_permission();
      },
      pilih_akses(kd_permission) {
         let impl = {
            fk_kd_role: this.kd_role,
            route_url: kd_permission
         };
         this.$toast.df102();
         axios
            .post(this.$api_role_permission + "/" + this.kd_role, impl)
            .then(() => {
               this.load_permission();
               this.$toast.df200();
            })
            .catch(e => {
               this.$error.catch(e);
            });
      },
      pencarian() {
         this.$Progress.start();
         axios
            .get(
               this.$api_role_permission +
                  "/" +
                  this.kd_role +
                  "/pencarian?cari=" +
                  this.cari_data
            )
            .then(respon => {
               this.$Progress.finish();
               this.isPencarian = true;
               this.in_permission = respon.data.in_permission;
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },
      load_permission() {
         if (this.isPencarian) {
            return this.pencarian();
         }

         this.$Progress.start();
         axios
            .get(this.$api_role_permission + "/" + this.kd_role)
            .then(respon => {
               this.isPencarian = false;
               this.$Progress.finish();
               this.in_permission = respon.data.in_permission;
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      }
   }
};
</script>
