<template>
   <div class="container">
      <div class="bg-white box-shadow-1 rounded border-radius-10">
         <div class="container">
            <div class="row py-3">
               <div class="col-sm als">
                  <div class="font-weight-bolder h4">Daftar Jenis Member</div>
               </div>
               <div class="col-sm als">
                  <div class="input-group">
                     <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder=" Cari Berdasrkan Nama Jenis Member  "
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
                        to="/jenis-member/create"
                        class="btn btn-dark btn-block btn-sm"
                     >Tambah Jenis Member</router-link>
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
                     <th class="px-3 align-middle">Status</th>
                     <th class="px-3 align-middle text-center">
                        <i class="fa fa-ellipsis-v"></i>
                     </th>
                  </tr>
                  <tr v-for="(jenis_member,i) in api_data.data" :key="i">
                     <td>{{i+1}}</td>
                     <td class="px-3 align-middle">{{jenis_member.nama_jenis_member}}</td>
                     <td class="px-3 align-middle">{{jenis_member.status | STATUS}}</td>

                     <td class="px-3 align-middle text-center" width="25">
                        <div class="btn-group">
                           <button class="btn btn-sm" type="button" data-toggle="dropdown">
                              <i class="fa fa-ellipsis-v"></i>
                           </button>
                           <div class="dropdown-menu dropdown-menu-right">
                              <router-link
                                 v-if="$canDoUpdate"
                                 :to="'jenis-member/edit/'+jenis_member.kd_jenis_member"
                                 class="dropdown-item"
                              >Edit</router-link>
                              <div
                                 class="dropdown-item cp"
                                 v-if="$canDoDestroy"
                                 @click="hapus(jenis_member.kd_jenis_member)"
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
                     :data="api_data"
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
         api_data: {},
         cari_data: "",
         isPencarian: false,
         grup_url: ""
      };
   },
   mounted() {
      this.grup_url = this.$router.currentRoute.name.split(".")[0];
      this.queryUrlIfExist = this.$router.currentRoute.query;
      this.verify_permission();
      this.load_data();
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
         this.load_data();
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
            .get(this.$api_jenis_member, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.api_data = respon.data.api_data;
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
            .get(this.$api_jenis_member, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.$Progress.finish();
               this.api_data = respon.data.api_data;
               this.isPencarian = true;
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },

      load_data() {
         this.isPencarian = this.checkIsPencarianTrue();
         this.$Progress.start();
         axios
            .get(this.$api_jenis_member, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.$Progress.finish();
               this.api_data = respon.data.api_data;
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
                  .delete(this.$api_jenis_member + "/" + data_kode)
                  .then(() => {
                     this.$toast.df200();
                     this.load_data();
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
