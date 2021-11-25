
<template>
   <div class="container">
      <div class="bg-white box-shadow-1 border-radius-10">
         <div class="container">
            <div class="row py-3">
               <div class="col-sm als">
                  <div class="font-weight-bolder h4">Daftar role</div>
               </div>
               <div class="col-sm als">
                  <div class="input-group">
                     <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder=" Cari Berdasrkan Nama role  "
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
               <div class="col-sm-5">
                  <div class="row">
                     <div class="col-sm" v-if="$canDoStore">
                        <div class="my-2">
                           <router-link
                              to="/role/create"
                              class="btn btn-dark btn-block btn-sm"
                           >Tambah role</router-link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <section v-if="isPencarian">
               Hasil Dari : {{cari_data}}
               <div class="text-blue cp" @click="resetPencarian()">Reset</div>
            </section>
            <div class="py-2">
               <table class="table table-hover">
                  <tr>
                     <th class="px-3 align-middle">Nama Role</th>
                     <th class="px-3 align-middle">Created By</th>
                     <th class="px-3 align-middle text-center">
                        <i class="fa fa-key mr-2" aria-hidden="true"></i> Akses
                     </th>

                     <th class="px-3 align-middle text-center">
                        <i class="fa fa-ellipsis-v"></i>
                     </th>
                  </tr>
                  <tr v-for="(role,i) in in_role.data" :key="i">
                     <td class="px-3 align-middle">{{role.nama_role}}</td>
                     <td class="px-3 align-middle">{{role.get_creator.nama}}</td>
                     <td class="px-3 align-middle" width="200">
                        <button
                           class="btn btn-dark btn-block btn-sm"
                           @click="$router.push({name:'impl-role-to-permission.index',params:{kd_role:role.kd_role}}) "
                        >
                           <i class="fa fa-plus mr-2" aria-hidden="true"></i> Kelola Akses
                        </button>
                     </td>

                     <td class="px-3 align-middle text-center" width="25">
                        <div class="btn-group">
                           <button class="btn btn-sm" type="button" data-toggle="dropdown">
                              <i class="fa fa-ellipsis-v"></i>
                           </button>
                           <div class="dropdown-menu dropdown-menu-right">
                              <router-link
                                 v-if="$canDoUpdate"
                                 :to="'role/create/'+role.kd_role"
                                 class="dropdown-item"
                              >Edit</router-link>
                              <div
                                 v-if="$canDoDestroy"
                                 class="dropdown-item cp"
                                 @click="hapus(role.kd_role)"
                              >Delete</div>
                           </div>
                        </div>
                     </td>
                  </tr>
               </table>
               <pagination
                  class="mt-3"
                  :limit="1"
                  :data="in_role"
                  @pagination-change-page="loadPaginate"
               ></pagination>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         isPencarian: false,
         in_role: {},
         cari_data: "",
         grup_url: "",
         queryUrlIfExist: ""
      };
   },
   mounted() {
      this.grup_url = this.$router.currentRoute.name.split(".")[0];
      this.queryUrlIfExist = this.$router.currentRoute.query;
      this.verify_permission();
      this.load_role();
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
         this.load_role();
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
            .get(this.$api_role, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.in_role = respon.data.in_role;
            });
      },

      verify_permission() {
         window.amr_data_permission_users.forEach(permission => {
            if (permission.grup == this.grup_url) {
               let data_permission = permission.url.split(".")[1];
               if (data_permission == "store") {
                  this.$canDoStore = true;
               }
               if (data_permission == "update") {
                  this.$canDoUpdate = true;
               }
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
            .get(this.$api_role, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.isPencarian = true;
               this.in_role = respon.data.in_role;
               this.$Progress.finish();
            })
            .catch(e => {
               this.$error.catch(e);
               this.$Progress.fail();
            });
      },
      load_role() {
         this.isPencarian = this.checkIsPencarianTrue();
         this.$Progress.start();
         axios
            .get(this.$api_role, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.in_role = respon.data.in_role;
               this.$Progress.finish();
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
                  .delete(this.$api_role + "/" + data_kode)
                  .then(() => {
                     this.$toast.df200();
                     this.load_role();
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
