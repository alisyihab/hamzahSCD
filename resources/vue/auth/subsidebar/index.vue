<template>
   <div class="container">
      <kembali></kembali>
      <div class="bg-white box-shadow-1 rounded border-radius-10 p-3">
         <div class="row">
            <div class="col-sm col-md als">
               <div
                  class="m-2 f5-fz font-weight-bolder"
               >Kelola Sidebar : {{in_sidebar.nama_sidebar}}</div>
            </div>
            <div class="col-sm col-md-4" v-if="canDoStore">
               <div class="m-2">
                  <button
                     class="btn btn-block btn-sm btn-dark"
                     @click="create_subsidebar"
                  >Tambah Subsidebar</button>
               </div>
            </div>
         </div>
      </div>
      <div class="bg-white">
         <div class="table-responsive">
            <table class="table-sm table-hover table">
               <tr>
                  <th class="px-3">#</th>
                  <th class="px-3">Nama</th>
                  <th class="px-3">Status</th>
                  <th class="text-center px-3">Urutan</th>
                  <th class="px-3"></th>
               </tr>

               <tbody>
                  <tr v-for="(sub_sidebar,i)  in in_sidebar.get_subsidebar" :key="i">
                     <td class="px-3">{{i+1}}</td>
                     <td class="px-3">{{sub_sidebar.nama_sub_sidebar}}</td>
                     <td class="px-3">{{sub_sidebar.status_sub_sidebar | STATUS}}</td>
                     <td class="px-3" width="25">
                        <input
                           type="text"
                           class="form-control text-center"
                           :value="sub_sidebar.urutan_sub_sidebar"
                           @change="updateUrutan"
                           :id=" sub_sidebar.kd_sub_sidebar"
                        />
                     </td>
                     <td class="px-3">
                        <div class="btn-group">
                           <button class="btn btn-sm" type="button" data-toggle="dropdown">
                              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                           </button>
                           <div class="dropdown-menu dropdown-menu-right">
                              <a
                                 v-if="canDoUpdate"
                                 class="dropdown-item"
                                 @click="edit(sub_sidebar)"
                              >Edit</a>
                              <a
                                 v-if="canDoDestroy"
                                 class="dropdown-item"
                                 @click="hapus(sub_sidebar.kd_sub_sidebar)"
                              >Hapus</a>
                           </div>
                        </div>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         kd_sidebar: "",
         in_sidebar: [],
         canDoStore: true,
         canDoUpdate: true,
         canDoDestroy: true,
         grup_url: "subsidebar"
      };
   },
   mounted() {
      this.kd_sidebar = this.$router.currentRoute.params.kd_sidebar;
      this.verify_permission();
      this.load();
   },
   methods: {
      updateUrutan(e) {
         this.$toast.df102();
         let update_urutan = {
            urutan_only: true,
            urutan_subsidebar: e.target.value
         };
         axios
            .put(this.$api_sub_sidebar + "/" + e.target.id, update_urutan)
            .then(() => {
               this.load();
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
      create_subsidebar() {
         this.$router.push({
            name: "subsidebar.store",
            params: {
               kd_sidebar: this.kd_sidebar
            }
         });
      },
      load() {
         this.$Progress.start();
         axios
            .get(this.$api_sidebar + "/" + this.kd_sidebar)
            .then(respon => {
               this.in_sidebar = respon.data.in_sidebar;
               this.$Progress.finish();
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },
      edit(sub_sidebar) {
         // return console.log(sub_sidebar);
         this.$router.push({
            name: "subsidebar.update",
            params: {
               kd_sidebar: sub_sidebar.fk_kd_sidebar,
               kd_sub_sidebar: sub_sidebar.kd_sub_sidebar
            }
         });
      },
      hapus(kd_sub_sidebar) {
         konfirmasiHapus.fire().then(result => {
            if (result.isConfirmed) {
               this.$toast.df102();
               axios
                  .delete(this.$api_sub_sidebar + "/" + kd_sub_sidebar)
                  .then(() => {
                     this.$toast.df200();
                     this.load();
                  })
                  .catch(e => {
                     this.error.catch(e);
                  });
            }
         });
      }
   }
};
</script>