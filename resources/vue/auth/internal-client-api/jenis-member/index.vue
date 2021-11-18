<template>
   <div class="container">
      <div class="bg-white box-shadow-1 border-radius-10">
         <div class="container">
            <div class="row py-3">
               <div class="col-sm als">
                  <div class="font-weight-bolder h4">Jenis Member</div>
               </div>
               <div class="col-sm als">
                  <div class="input-group">
                     <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder=" Cari Berdasrkan Nama Jenis Member"
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
               <div class="text-blue cp" @click="load()">Reset</div>
            </section>
            <div class="py-2 table-responsive">
               <table class="table table-hover">
                  <tr>
                     <th class="px-3 align-middle">#</th>
                     <th class="px-3 align-middle">nama_jenis_member</th>
                     <th class="px-3 align-middle">status</th>
                     <th class="px-3 align-middle">App Name</th>
                     <th class="px-3 align-middle">client_app_id</th>
                  </tr>
                  <tr v-for="(jenis_member,i) in in_jenis_member.data" :key="i">
                     <td class="px-3 align-middle" width="25">{{i+1}}</td>
                     <th class="px-3 align-middle">{{jenis_member.nama_jenis_member}}</th>
                     <th class="px-3 align-middle">{{jenis_member.status}}</th>
                     <th class="px-3 align-middle">{{jenis_member.get_client_app.app_name}}</th>
                     <th class="px-3 align-middle">{{jenis_member.client_app_id}}</th>
                  </tr>
               </table>
               <div class="container">
                  <pagination
                     class="mt-3"
                     :limit="1"
                     :data="in_jenis_member"
                     @pagination-change-page="loadPaginate"
                  ></pagination>
               </div>
            </div>
         </div>
      </div>

      <!-- Modal -->
      <div class="modal fade" id="modal_showDetailsHistoryAsModal" tabindex="-1">
         <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div class="modal-content" style="border:none !important">
               <div class="modal-header gr-bg-d-blue text-white">
                  <h5 class="modal-title">Detail History Hit</h5>
                  <button
                     type="button"
                     class="close text-white"
                     data-dismiss="modal"
                     aria-label="Close"
                  >
                     <span aria-hidden="true">&times;</span>
                  </button>
               </div>
               <div class="modal-body">
                  <table class="table table-borderless">
                     <thead>
                        <tr>
                           <th>Client ID</th>
                           <td>{{detailHisotry.client_app_id}}</td>
                        </tr>
                        <tr>
                           <th>Url Path</th>
                           <td>{{detailHisotry.path}}</td>
                        </tr>
                        <tr>
                           <th>Ip Address</th>
                           <td>{{detailHisotry.ip_address}}</td>
                        </tr>
                        <tr>
                           <th>Method</th>
                           <td>{{detailHisotry.method}}</td>
                        </tr>
                        <tr>
                           <th>Browser Name</th>
                           <td>{{detailHisotry.browserName}}</td>
                        </tr>
                        <tr>
                           <th>Browser Engine</th>
                           <td>{{detailHisotry.browserEngine}}</td>
                        </tr>
                        <tr>
                           <th>Platform Name</th>
                           <td>{{detailHisotry.platformName}}</td>
                        </tr>
                        <tr>
                           <th>Platform Family</th>
                           <td>{{detailHisotry.platformFamily}}</td>
                        </tr>
                        <tr>
                           <th>Device Family</th>
                           <td>{{detailHisotry.deviceFamily}}</td>
                        </tr>
                     </thead>
                  </table>
               </div>
               <div class="modal-footer">
                  <button
                     type="button"
                     class="btn btn-sm btn-outline-secondary btn-block"
                     data-dismiss="modal"
                  >Close</button>
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
         isEditableData: false,
         in_jenis_member: {},
         cari_data: "",
         grup_url: ""
      };
   },
   mounted() {
      this.grup_url = this.$router.currentRoute.name.split(".")[0];
      this.verify_permission();
      this.load();
   },
   methods: {
      loadPaginate(page = 1) {
         this.$router.push(this.$router.currentRoute.path + "?page=" + page);
         axios.get(this.$ica_jenis_member + "?page=" + page).then(respon => {
            this.in_jenis_member = respon.data.api_data;
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
         this.$Progress.start();
         axios
            .get(this.$ica_jenis_member + "/pencarian?cari=" + this.cari_data)
            .then(respon => {
               this.isPencarian = true;
               this.$Progress.finish();
               this.in_jenis_member = respon.data.api_data;
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },
      load() {
         this.isPencarian = false;
         this.$Progress.start();
         axios
            .get(this.$ica_jenis_member)
            .then(respon => {
               this.$Progress.finish();
               this.in_jenis_member = respon.data.api_data;
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
                  .delete(this.$ica_jenis_member + "/" + data_kode)
                  .then(() => {
                     this.$toast.df200();
                     this.load();
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
