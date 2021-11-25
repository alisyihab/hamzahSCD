
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
               <div class="text-blue cp" @click="resetPencarian()">Reset</div>
            </section>
            <div class="py-2 table-responsive">
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
                     <td class="px-3 align-middle" width="400">
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
                     <td class="px-3 align-middle small">{{audit_trail.get_creator.nama}}</td>

                     <td
                        class="px-3 align-middle text-center small"
                     >{{ $date(audit_trail.created_at).format('dddd, DD/MMM/YY HH:mm') }}</td>
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
         grup_url: "",
         queryUrlIfExist: ""
      };
   },

   mounted() {
      this.grup_url = this.$router.currentRoute.name.split(".")[0];
      this.queryUrlIfExist = this.$router.currentRoute.query;
      this.load();
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
         this.load();
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
            .get(this.$api_audit_trail, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.in_audit_trail = respon.data.in_audit_trail;
            });
      },

      pencarian() {
         this.resetQueryIfExist();
         this.updateRouteUrl({ cari: this.cari_data });
         this.$Progress.start();
         axios
            .get(this.$api_audit_trail, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.isPencarian = true;
               this.in_audit_trail = respon.data.in_audit_trail;
               this.$Progress.finish();
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },

      load() {
         this.isPencarian = this.checkIsPencarianTrue();
         this.$Progress.start();
         axios
            .get(this.$api_audit_trail, {
               params: this.queryUrlIfExist
            })
            .then(respon => {
               this.in_audit_trail = respon.data.in_audit_trail;
               this.$Progress.finish();
            })
            .catch(e => {
               this.$error.catch(e);
               this.$Progress.fail();
            });
      }
   }
};
</script>
