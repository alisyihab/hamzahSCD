
<template>
   <div class="container">
      <div class="bg-white box-shadow-1 rounded border-radius-10">
         <div class="container">
            <div class="row py-3">
               <div class="col-sm als">
                  <div class="font-weight-bolder h4">Daftar User</div>
               </div>
               <div class="col-sm als">
                  <div class="input-group">
                     <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder=" Cari Berdasrkan Nama Kelola User  "
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
               <div class="col-sm-5" v-if="$canDoStore">
                  <div class="my-2">
                     <router-link
                        to="/kelola-user/create"
                        class="btn btn-dark btn-block btn-sm"
                     >Tambah Kelola User</router-link>
                  </div>
               </div>
            </div>
            <section v-if="isPencarian">
               Hasil Dari : {{cari_data}}
               <div class="text-blue cp" @click="resetPencarian()">Reset</div>
            </section>

            <div class="py-2 table-responsive">
               <table class="table table-hover">
                  <tr>
                     <th>#</th>
                     <th class="px-3 align-middle">Nama</th>
                     <th class="px-3 align-middle">Email</th>
                     <th class="px-3 align-middle">Username</th>
                     <th class="px-3 align-middle">role</th>
                     <th class="px-3 align-middle">Status</th>
                     <th class="px-3 align-middle text-center">
                        <i class="fa fa-ellipsis-v"></i>
                     </th>
                  </tr>
                  <tr v-for="(kelola_user,i) in in_kelola_user.data" :key="i">
                     <td>{{i+1}}</td>
                     <td class="px-3 align-middle">{{kelola_user.nama}}</td>
                     <td class="px-3 align-middle">{{kelola_user.email}}</td>
                     <td class="px-3 align-middle">{{kelola_user.username}}</td>
                     <td
                        class="px-3 align-middle"
                     >{{kelola_user.get_role ? kelola_user.get_role.nama_role : "-" }}</td>
                     <td class="px-3 align-middle">{{kelola_user.status_user | STATUS}}</td>

                     <td class="px-3 align-middle text-center" width="25">
                        <div class="btn-group">
                           <button class="btn btn-sm" type="button" data-toggle="dropdown">
                              <i class="fa fa-ellipsis-v"></i>
                           </button>
                           <div class="dropdown-menu dropdown-menu-right">
                              <router-link
                                 v-if="$canDoUpdate"
                                 :to="'kelola-user/create/'+kelola_user.kd_user"
                                 class="dropdown-item"
                              >Edit</router-link>
                              <div
                                 class="dropdown-item cp"
                                 v-if="$canDoDestroy"
                                 @click="hapus(kelola_user.kd_user)"
                              >Delete</div>
                           </div>
                        </div>
                     </td>
                  </tr>
               </table>
               <div class="container">
                  <pagination
                     class="mt-3"
                     :limit="1"
                     :data="in_kelola_user"
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
         isPencarian: false,
         queryUrlIfExist: "",
         in_kelola_user: {},
         cari_data: "",
         isPencarian: false,
         grup_url: ""
      };
   },
   mounted() {
      this.grup_url = this.$router.currentRoute.name.split(".")[0];
      this.queryUrlIfExist = this.$router.currentRoute.query;
      this.verify_permission();
      this.load_kelola_user();
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
         this.load_kelola_user();
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
            .get(this.$api_kelola_user, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.in_kelola_user = respon.data.in_kelola_user;
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
            .get(this.$api_kelola_user, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.$Progress.finish();
               this.in_kelola_user = respon.data.in_kelola_user;
               this.isPencarian = true;
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },

      load_kelola_user() {
         this.isPencarian = this.checkIsPencarianTrue();
         this.$Progress.start();
         axios
            .get(this.$api_kelola_user, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.$Progress.finish();
               this.in_kelola_user = respon.data.in_kelola_user;
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
                  .delete(this.$api_kelola_user + "/" + data_kode)
                  .then(() => {
                     this.$toast.df200();
                     this.load_kelola_user();
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
