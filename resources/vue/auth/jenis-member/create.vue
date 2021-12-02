<template>
   <div>
      <kembali></kembali>
      <div class="bg-white rounded border">
         <div class="container">
            <div class="row py-3 border-bottom">
               <div class="col-sm">
                  <div class="font-weight-bolder">Kelola Jenis Member</div>
               </div>
            </div>
         </div>
         <div class="py-2 container">
            <form @submit.prevent="kd_jenis_member == null ? add() : update() ">
               <table class="table table-borderless">
                  <thead>
                     <tr>
                        <th class="px-3 align-middle">Nama Jenis Member</th>
                        <td class="px-3 align-middle">
                           <input
                              type="text"
                              v-model="form.nama_jenis_member"
                              class="form-control"
                              id="nama"
                              required
                              maxlength="50"
                              minlength="1"
                           />
                           <validasi
                              v-if="form.errors.has('nama_jenis_member')"
                              :msg="form.errors.get('nama_jenis_member')"
                           ></validasi>
                        </td>
                     </tr>
                     <tr>
                        <th class="px-3 align-middle">Status Jenis Member</th>
                        <td class="px-3 align-middle">
                           <select v-model="form.status" required class="form-control">
                              <option value="true">Aktif</option>
                              <option value="false">Nonaktif</option>
                           </select>
                           <validasi
                              v-if="form.errors.has('status')"
                              :msg="form.errors.get('status')"
                           ></validasi>
                        </td>
                     </tr>
                  </thead>
               </table>
               <button class="btn btn-block btn-dark" type="submit">Simpan Jenis Member</button>
            </form>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         kd_jenis_member: null,
         in_role: [],
         form: new Form({
            kd_jenis_member: "",
            nama_jenis_member: "",
            status: ""
         })
      };
   },
   mounted() {
      if (this.$route.params.kd_jenis_member) {
         this.kd_jenis_member = this.$route.params.kd_jenis_member;
         this.load_jenis_member_if_edit();
      }
   },
   methods: {
      load_jenis_member_if_edit() {
         this.$Progress.start();
         axios
            .get(this.$api_jenis_member + "/" + this.kd_jenis_member + "/edit")
            .then(respon => {
               this.$Progress.finish();
               this.in_role = respon.data.in_role;
               this.form.fill(respon.data.api_data);
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
            .post(this.$api_jenis_member)
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
            .put(this.$api_jenis_member + "/" + this.kd_jenis_member)
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
