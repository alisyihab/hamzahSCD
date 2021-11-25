
<template>
   <div class="container">
      <div class="bg-white box-shadow-1 border-radius-10">
         <div class="container">
            <div class="row py-3">
               <div class="col-sm als">
                  <div class="font-weight-bolder h4">Daftar Sidebar</div>
               </div>
               <div class="col-sm als">
                  <div class="input-group">
                     <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder=" Cari Berdasrkan Nama Sidebar"
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
                  <div class="row">
                     <div class="col-sm">
                        <div class="my-2">
                           <router-link
                              to="/sidebar/create"
                              class="btn btn-dark btn-block btn-sm"
                           >Tambah Sidebar</router-link>
                        </div>
                     </div>
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
                     <th class>Nama</th>
                     <th class>Icon</th>
                     <th class>Urutan</th>
                     <th class>Status</th>
                     <th class>Subsidebar</th>
                     <th class></th>
                     <th class="text-center">
                        <i class="fa fa-ellipsis-v"></i>
                     </th>
                  </tr>
                  <tr v-for="(sidebar,i) in in_sidebar.data" :key="i">
                     <td>{{i+1}}</td>
                     <td>{{sidebar.nama_sidebar}}</td>
                     <td>
                        <i :class="'fa '+sidebar.icon_sidebar" class="mr-2"></i>
                        {{sidebar.icon_sidebar}}
                     </td>
                     <td width="25">
                        <input
                           type="text"
                           class="form-control text-center"
                           :value="sidebar.urutan_sidebar"
                           @change="updateUrutan"
                           :id=" sidebar.kd_sidebar "
                        />
                     </td>
                     <td>{{sidebar.status_sidebar | STATUS}}</td>
                     <td>
                        <div
                           v-for="(subsidebar,i) in  sidebar.get_subsidebar"
                           :key="i"
                        >{{subsidebar.nama_sub_sidebar}}</div>
                        <div v-if="sidebar.get_subsidebar.length == 0 ">
                           <i class="small">Subsidebar Kosong</i>
                        </div>
                     </td>
                     <td>
                        <button
                           class="btn btn-dark btn-block btn-sm"
                           @click="tambah_sub(sidebar.kd_sidebar)"
                        >
                           <i class="fa fa-plus-circle mr-2" aria-hidden="true"></i>
                           Subsidebar
                        </button>
                     </td>

                     <td class="text-center" width="25">
                        <div class="btn-group">
                           <button class="btn btn-sm" type="button" data-toggle="dropdown">
                              <i class="fa fa-ellipsis-v"></i>
                           </button>
                           <div class="dropdown-menu dropdown-menu-right">
                              <router-link
                                 v-if="$canDoUpdate"
                                 :to="'sidebar/create/'+sidebar.kd_sidebar"
                                 class="dropdown-item"
                              >Edit</router-link>
                              <div
                                 v-if="$canDoDestroy"
                                 class="dropdown-item cp"
                                 @click="hapus(sidebar.kd_sidebar)"
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
                     :data="in_sidebar"
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
         in_sidebar: {},
         cari_data: "",
         grup_url: "",
         queryUrlIfExist: ""
      };
   },
   mounted() {
      this.grup_url = this.$router.currentRoute.name.split(".")[0];
      this.queryUrlIfExist = this.$router.currentRoute.query;
      this.verify_permission();
      this.load_sidebar();
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
         this.load_sidebar();
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
            .get(this.$api_sidebar, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.in_sidebar = respon.data.in_sidebar;
            });
      },

      updateUrutan(e) {
         this.$toast.df102();
         let update_urutan = {
            urutan_only: true,
            urutan_sidebar: e.target.value
         };
         axios
            .put(this.$api_sidebar + "/" + e.target.id, update_urutan)
            .then(() => {
               this.load_sidebar();
               this.$toast.df200();
            })
            .catch(e => {
               this.$error.catch(e);
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
      tambah_sub(kd_sidebar) {
         this.$router.push({
            name: "subsidebar.index",
            params: { kd_sidebar: kd_sidebar }
         });
      },
      pencarian() {
         this.resetQueryIfExist();
         this.updateRouteUrl({ cari: this.cari_data });
         this.$Progress.start();
         axios
            .get(this.$api_sidebar, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.isPencarian = true;
               this.in_sidebar = respon.data.in_sidebar;
               this.$Progress.finish();
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },
      load_sidebar() {
         this.isPencarian = this.checkIsPencarianTrue();
         this.$Progress.start();
         axios
            .get(this.$api_sidebar, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.in_sidebar = respon.data.in_sidebar;
               this.$Progress.finish();
            })
            .catch(e => {
               this.$error.catch(e);
               this.$Progress.fail();
            });
      },
      hapus(data_kode) {
         konfirmasiHapus.fire().then(result => {
            if (result.isConfirmed) {
               this.$toast.df102();
               axios
                  .delete(this.$api_sidebar + "/" + data_kode)
                  .then(() => {
                     this.$toast.df200();
                     this.load_sidebar();
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
