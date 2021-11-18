<template>
   <div class="container">
      <div class="bg-white box-shadow-1 border-radius-10">
         <div class="container">
            <div class="row py-3">
               <div class="col-sm als">
                  <div class="font-weight-bolder h4">Client Hit History</div>
               </div>
               <div class="col-sm als">
                  <div class="input-group">
                     <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder=" Cari Berdasrkan Nama Apliksi"
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
                     <th class="px-3 align-middle">App</th>
                     <th class="px-3 align-middle">Path</th>
                     <th class="px-3 align-middle">Ip Address</th>
                     <th class="px-3 align-middle" width="25">Method</th>
                     <th class="px-3 align-middle text-center">Waktu</th>
                     <th class="px-3 align-middle text-center">
                        <i class="fa fa-eye" aria-hidden="true"></i>
                     </th>
                  </tr>
                  <tr v-for="(history,i) in in_history_per_hit_client.data" :key="i">
                     <td class="px-3 align-middle" width="25">{{i+1}}</td>
                     <td class="px-3 align-middle small">{{history.get_client_app.app_name}}</td>

                     <td class="px-3 align-middle">{{history.path}}</td>
                     <td class="px-3 align-middle">{{history.ip_address}}</td>
                     <td class="px-3 align-middle">{{history.method}}</td>
                     <td
                        class="px-3 align-middle text-center small"
                     >{{ $date(history.created_at).format('dddd, DD/MMM/YY HH:mm') }}</td>
                     <td class="px-3 align-middle" width="25">
                        <button
                           class="btn btn-sm btn-outline-dark"
                           @click="showDetailsHistoryAsModal(history)"
                        >
                           <i class="fa fa-eye" aria-hidden="true"></i>
                        </button>
                     </td>
                  </tr>
               </table>
               <div class="container">
                  <pagination
                     class="mt-3"
                     :limit="1"
                     :data="in_history_per_hit_client"
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
         detailHisotry: [],
         isPencarian: false,
         isEditableData: false,
         in_history_per_hit_client: {},
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
      showDetailsHistoryAsModal(dataHisotry) {
         $("#modal_showDetailsHistoryAsModal").modal("show");
         this.detailHisotry = dataHisotry;
      },
      loadPaginate(page = 1) {
         this.$router.push(this.$router.currentRoute.path + "?page=" + page);
         axios
            .get(this.$api_history_per_hit_client + "?page=" + page)
            .then(respon => {
               this.in_history_per_hit_client =
                  respon.data.in_history_per_hit_client;
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
            .get(
               this.$api_history_per_hit_client +
                  "/pencarian?cari=" +
                  this.cari_data
            )
            .then(respon => {
               this.isPencarian = true;
               this.$Progress.finish();
               this.in_history_per_hit_client =
                  respon.data.in_history_per_hit_client;
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
            .get(this.$api_history_per_hit_client)
            .then(respon => {
               this.$Progress.finish();
               this.in_history_per_hit_client =
                  respon.data.in_history_per_hit_client;
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
                  .delete(this.$api_history_per_hit_client + "/" + data_kode)
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
