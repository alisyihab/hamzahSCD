
<template>
   <div class="container">
      <div class="bg-white box-shadow-1 border-radius-10">
         <div class="container">
            <div class="row py-3">
               <div class="col-sm als">
                  <div class="font-weight-bolder h4">Daftar Audit Trail</div>
               </div>
               <div class="col-sm als">
                  <div class="input-group">
                     <input
                        type="text"
                        class="form-control form-control-sm"
                        placeholder=" Cari Berdasrkan Nama Form   "
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
            <div class="py-2">
               <table class="table table-hover">
                  <tr>
                     <th class="px-3 align-middle">Jenis</th>
                     <th class="px-3 align-middle">Form</th>
                     <th class="px-3 align-middle">Trace</th>
                     <th class="px-3 align-middle">Aktor</th>
                     <th class="px-3 align-middle text-center">Waktu</th>
                     <th class="px-3 align-middle text-center" v-if="isEditableData">
                        <i class="fa fa-ellipsis-v"></i>
                     </th>
                  </tr>
                  <tr v-for="(audit_trail,i) in in_audit_trail.data" :key="i">
                     <td class="px-3 align-middle" width="25">{{audit_trail.jenis_kegiatan}}</td>
                     <td class="px-3 align-middle">{{audit_trail.nama_form}}</td>
                     <td class="px-3 align-middle">
                        <table class="table-sm table table-bordered">
                           <tr>
                              <th class="small">Nama Field</th>
                              <th class="small">V.Before</th>
                              <th class="small">V.After</th>
                           </tr>
                           <tr
                              v-for="(nama_field,i) in JSON.parse(audit_trail.nama_field)"
                              :key="i"
                           >
                              <td class="small">{{nama_field}}</td>
                              <td class="small">{{JSON.parse( audit_trail.value_sebelumnya)[i]}}</td>
                              <td class="small">{{JSON.parse(audit_trail.value_terbaru)[i]}}</td>
                           </tr>
                        </table>
                     </td>
                     <td class="px-3 align-middle">{{audit_trail.get_creator.nama}}</td>
                     <!-- <td
                     class="px-3 align-middle text-center"
                     >{{audit_trail.created_at | dayjs('YYYY-MM-DD')}}</td>-->

                     <td
                        class="px-3 align-middle text-center"
                     >{{ $date(audit_trail.created_at).format('dddd, DD/MMM/YY HH:mm') }}</td>
                     <td class="px-3 align-middle text-center" width="25" v-if="isEditableData">
                        <div class="btn-group">
                           <button class="btn btn-sm" type="button" data-toggle="dropdown">
                              <i class="fa fa-ellipsis-v"></i>
                           </button>
                           <div class="dropdown-menu dropdown-menu-right">
                              <router-link
                                 v-if="canDoUpdate"
                                 :to="'audit-trail/create/'+audit_trail.id"
                                 class="dropdown-item"
                              >Edit</router-link>
                              <div
                                 v-if="canDoDestroy"
                                 class="dropdown-item cp"
                                 @click="hapus(audit_trail.id)"
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
                     :data="in_audit_trail"
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
         isEditableData: false,
         in_audit_trail: {},
         cari_data: "",
         canDoStore: false,
         canDoUpdate: false,
         canDoDestroy: false,
         grup_url: "audit-trail"
      };
   },
   mounted() {
      this.verify_permission();
      this.load();
   },
   methods: {
      loadPaginate(page = 1) {
         this.$router.push(this.$router.currentRoute.path + "?page=" + page);
         axios.get(this.$api_audit_trail + "?page=" + page).then(respon => {
            this.in_audit_trail = respon.data.in_audit_trail;
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
      pencarian() {
         this.$Progress.start();
         axios
            .get("/api/audit-trail/pencarian?cari=" + this.cari_data)
            .then(respon => {
               this.isPencarian = true;
               this.$Progress.finish();
               this.in_audit_trail = respon.data.in_audit_trail;
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
            .get(this.$api_audit_trail)
            .then(respon => {
               this.$Progress.finish();
               this.in_audit_trail = respon.data.in_audit_trail;
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
                  .delete("/api/audit-trail/" + data_kode)
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
