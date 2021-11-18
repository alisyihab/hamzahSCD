
<template>
   <div>
      <kembali></kembali>
      <div class="bg-white rounded border">
         <div class="container">
            <div class="row py-3 border-bottom">
               <div class="col-sm">
                  <div class="font-weight-bolder">Reset Konsumer Secret Key</div>
               </div>
            </div>
         </div>
         <div class="py-2 container">
            <div class="alert alert-warning fade show" role="alert">
               <strong>
                  <i class="fa fa-exclamation-circle mr-2" aria-hidden="true"></i> Perhatian
               </strong> Anda akan mereset sebuah client-secret !
            </div>
            <form @submit.prevent=" reset ">
               <table class="table table-borderless">
                  <thead>
                     <tr>
                        <th class="px-3 align-middle" width="250">Nama Konsumer</th>
                        <td>
                           <div class="form-control font-weight-bolder">{{form.app_name}}</div>
                        </td>
                     </tr>
                     <tr>
                        <th class="px-3 align-middle">Konfirmasi Nama Konsumer</th>
                        <td>
                           <input
                              type="text"
                              class="form-control"
                              v-model="form.app_name_confirmation"
                              maxlength="50"
                           />
                           <div
                              class="text-red"
                              v-if="form.errors.has('app_name_confirmation')"
                              v-html="form.errors.get('app_name_confirmation')"
                           />
                        </td>
                     </tr>
                  </thead>
               </table>
               <button class="btn btn-block btn-dark" type="submit">Rest Konsumer Key</button>
            </form>
         </div>
         <section v-if="isAdded" class="container">
            <div class="border p-2 m-2 rounded">
               <div class="alert alert-success" role="alert">
                  <h5 class="font-weight-bolder">
                     <i class="fa fa-info-circle mr-2" aria-hidden="true"></i> Mohon untuk simpan data client-secret ini, karna hanya akan di tampilkan sekali
                  </h5>
               </div>
               <table>
                  <thead>
                     <tr>
                        <th>Client-id</th>
                        <td>{{konsumer_one_time_data.client_id}}</td>
                     </tr>
                     <tr>
                        <th>Client-secret</th>
                        <td>{{konsumer_one_time_data.one_time_client_secret_show}}</td>
                     </tr>
                  </thead>
               </table>
            </div>
         </section>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         isAdded: false,
         konsumer_one_time_data: [],
         kd_konsumer_key: null,
         in_role: [],
         form: new Form({
            kd_konsumer_key: "",
            app_name: "",
            app_name_confirmation: ""
         })
      };
   },
   mounted() {
      if (this.$route.params.kd_konsumer_key) {
         this.kd_konsumer_key = this.$route.params.kd_konsumer_key;
         this.load_edited_data();
      } else {
         this.load_create();
      }
   },
   methods: {
      load_edited_data() {
         this.$Progress.start();
         axios
            .get(this.$api_konsumer_key + "/" + this.kd_konsumer_key + "/edit")
            .then(respon => {
               this.$Progress.finish();
               this.form.fill(respon.data.in_konsumer_key);
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },
      reset() {
         this.isAdded = false;
         this.$Progress.start();
         this.$toast.df102();
         this.form
            .put(
               this.$api_konsumer_key +
                  "/config/reset-secret/" +
                  this.kd_konsumer_key
            )
            .then(response => {
               this.isAdded = true;
               this.konsumer_one_time_data = response.data.data;
               this.$Progress.finish();
               this.$toast.df200();
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      }
   }
};
</script>
