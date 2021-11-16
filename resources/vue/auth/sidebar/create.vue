<template>
   <div>
      <kembali></kembali>
      <div class="bg-white p-2 rounded border">
         <div class="h5-font-size font-weight-bolder">Kelola Sidebar</div>
         <hr />
         <form @submit.prevent="isEdit ?  update() : submit()">
            <table class="table table-borderless">
               <thead>
                  <tr>
                     <th>Nama Sidebar</th>
                     <td>
                        <input
                           type="text"
                           class="form-control"
                           required
                           v-model="form.nama_sidebar"
                           min="1"
                           max="100"
                        />
                     </td>
                  </tr>
                  <tr>
                     <th>Icon Sidebar</th>
                     <td>
                        <input
                           type="text"
                           class="form-control"
                           required
                           v-model="form.icon_sidebar"
                           min="1"
                           max="100"
                        />
                        <small>
                           Icon Menggunakan Font Awesome 4 , untuk daftar iconnya dapat dilihat
                           <a
                              href="https://fontawesome.bootstrapcheatsheets.com/"
                              target="_blank"
                           >disini</a>
                        </small>
                     </td>
                  </tr>
                  <tr>
                     <th>Status Sidebar</th>
                     <td>
                        <select class="form-control" v-model="form.status_sidebar" required>
                           <option value="1">Aktif</option>
                           <option value="0">Nonaktif</option>
                        </select>
                     </td>
                  </tr>
               </thead>
            </table>

            <div class="my-2">
               <button type="submit" class="btn btn-block btn-sm btn-dark">Simpan</button>
            </div>
         </form>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         isEdit: false,
         kd_sidebar: "",
         in_permission: [],
         form: new Form({
            nama_sidebar: "",
            status_sidebar: "",
            icon_sidebar: "",
            nama_group_route: ""
         })
      };
   },
   mounted() {
      if (this.$router.currentRoute.params.kd_sidebar) {
         this.isEdit = true;
         this.kd_sidebar = this.$router.currentRoute.params.kd_sidebar;
         this.load_if_edit();
      }
   },
   methods: {
      load_if_edit() {
         this.$Progress.start();
         axios
            .get(this.$api_sidebar + "/" + this.kd_sidebar + "/edit")
            .then(respon => {
               this.form.fill(respon.data.in_sidebar);
               this.$Progress.finish();
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },
      submit() {
         this.$toast.df102();
         this.form
            .post(this.$api_sidebar)
            .then(() => {
               this.$toast.df200();
            })
            .catch(e => {
               this.$error.catch(e);
            });
      },
      update() {
         this.$toast.df102();
         this.form
            .put(this.$api_sidebar + "/" + this.kd_sidebar)
            .then(() => {
               this.$toast.df200();
            })
            .catch(e => {
               this.$error.catch(e);
            });
      }
   }
};
</script>