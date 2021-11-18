
<template>
   <div>
      <kembali></kembali>
      <div class="bg-white rounded border">
         <div class="container">
            <div class="row py-3 border-bottom">
               <div class="col-sm">
                  <div class="font-weight-bolder">Kelola Konsumer Key</div>
               </div>
            </div>
         </div>
         <div class="py-2 container">
            <form @submit.prevent="kd_konsumer_key == null ? add() : update() ">
               <table class="table table-borderless">
                  <thead>
                     <tr>
                        <th class="px-3 align-middle">Nama Konsumer</th>
                        <td class="px-3 align-middle">
                           <input
                              type="text"
                              v-model="form.app_name"
                              required
                              class="form-control"
                              id="nama"
                              maxlength="50"
                              minlength="1"
                           />
                           <div
                              class="text-red"  
                              v-if="form.errors.has('app_name')"
                              v-html="form.errors.get('app_name')"
                           />
                        </td>
                     </tr>
                  </thead>
               </table>
               <button class="btn btn-block btn-dark" type="submit">Simpan Konsumer Key</button>
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
            username: ""
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
      add() {
         this.isAdded = false;
         this.$Progress.start();
         this.$toast.df102();
         this.form
            .post(this.$api_konsumer_key)
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
      },
      update() {
         this.$Progress.start();
         this.$toast.df102();
         this.form
            .put(this.$api_konsumer_key + "/" + this.kd_konsumer_key)
            .then(() => {
               this.$Progress.finish();
               this.$toast.df200();
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },

      //if there hase image  upload
      to_base64(e) {
         let file = e.target.files[0];
         let id = e.target.id;
         this.preview = URL.createObjectURL(file);
         let file_reader = new FileReader();
         if (file["size"] / 1024 < 2048) {
            file_reader.onloadend = file => {
               this.form[id] = file_reader.result;
            };
            file_reader.readAsDataURL(file);
         } else {
            window.gambarRule.fire();
         }
      }
   }
};
</script>
