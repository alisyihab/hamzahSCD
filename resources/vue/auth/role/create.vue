
<template>
   <div>
      <kembali></kembali>
      <div class="bg-white rounded border">
         <div class="container">
            <div class="row py-3 border-bottom">
               <div class="col-sm">
                  <div class="font-weight-bolder">Kelola role</div>
               </div>
            </div>
         </div>
         <div class="py-2 container">
            <form @submit.prevent="id == null ? add() : update() ">
               <table class="table table-borderless">
                  <thead>
                     <tr>
                        <th class="px-3 align-middle">Nama Role</th>
                        <td class="px-3 align-middle">
                           <input
                              type="text"
                              v-model="form.nama_role"
                              required
                              class="form-control"
                              id="nama_role"
                              maxlength="50"
                              minlength="1"
                           />
                        </td>
                     </tr>
                  </thead>
               </table>
               <button class="btn btn-block btn-dark" type="submit">Simpan role</button>
            </form>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         id: null,
         form: new Form({
            id: "",
            nama_role: "",
            created_by: ""
         })
      };
   },
   mounted() {
      if (this.$route.params.kd_role) {
         this.id = this.$route.params.kd_role;
         this.load_role();
      }
   },
   methods: {
      load_role() {
         this.$Progress.start();
         axios
            .get("/api/role/" + this.id)
            .then(respon => {
               this.$Progress.finish();
               this.form.fill(respon.data.in_role);
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },
      add() {
         this.$Progress.start();
         this.$toast.df102();
         this.form
            .post("/api/role")
            .then(() => {
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
            .put("/api/role/" + this.id)
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
