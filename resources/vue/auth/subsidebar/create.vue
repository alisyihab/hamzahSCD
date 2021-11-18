<template>
   <div>
      <kembali></kembali>
      <div class="bg-white p-2 rounded">
         <div class="h5-font-size font-weight-bolder">Kelola Subsidebar</div>
         <hr />
         <form @submit.prevent="isEdit ? update() : submit() ">
            <table class="table table-borderless">
               <thead>
                  <tr>
                     <th>Nama Route</th>
                     <td>
                        <div>
                           <multiselect
                              v-model="form.data_permission"
                              @input="setNameToForm"
                              :options="in_permission"
                              track-by="route_url"
                              label="nama_route"
                           ></multiselect>
                        </div>
                        <!-- <select class="form-control" required v-model="form.data_permission">
                        <option
                           :value="pemission.id"
                           v-for=" (pemission,i)  in  in_permission"
                           :key="i"
                        >{{pemission.nama_route}}</option>
                        </select>-->
                     </td>
                  </tr>
                  <tr>
                     <th>Nama subsidebar</th>
                     <td>
                        <input
                           type="text"
                           class="form-control"
                           required
                           v-model="form.nama_sub_sidebar"
                        />
                     </td>
                  </tr>
                  <tr>
                     <th>Status</th>
                     <td>
                        <select class="form-control" v-model="form.status_sub_sidebar" required>
                           <option value="true">Aktif</option>
                           <option value="false">Nonaktif</option>
                        </select>
                     </td>
                  </tr>
               </thead>
            </table>

            <div class="my-2">
               <button type="submit" class="btn btn-dark btn-block btn-sm btn-submit-data">Simpan</button>
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
         in_permission: [],
         form: new Form({
            kd_sub_sidebar: "",
            nama_sub_sidebar: "",
            data_permission: "",
            fk_kd_sidebar: "",
            status_sub_sidebar: ""
         })
      };
   },
   mounted() {
      this.form.fk_kd_sidebar = this.$router.currentRoute.params.kd_sidebar;
      if (this.$router.currentRoute.params.kd_sub_sidebar) {
         this.isEdit = true;
         this.kd_sub_sidebar = this.$router.currentRoute.params.kd_sub_sidebar;
         this.load_if_edit();
      } else {
         this.load_create();
      }
   },
   methods: {
      setNameToForm() {
         this.form.nama_sub_sidebar = this.form.data_permission["nama_route"];
      },
      load_if_edit() {
         this.$Progress.start();
         axios
            .get(this.$api_sub_sidebar + "/" + this.kd_sub_sidebar + "/edit")
            .then(respon => {
               this.$Progress.finish();
               this.in_permission = respon.data.in_permission;
               let permission_selected = this.in_permission
                  .map(function(e) {
                     return e.route_url;
                  })
                  .indexOf(respon.data.in_sub_sidebar.fk_nama_permission);

               this.form.fill(respon.data.in_sub_sidebar);

               this.form.data_permission = this.in_permission[
                  permission_selected
               ];
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },
      load_create() {
         this.$Progress.start();
         axios
            .get(this.$api_sub_sidebar + "/create")
            .then(respon => {
               this.$Progress.finish();
               this.in_permission = respon.data.in_permission;
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },

      submit() {
         this.form
            .post(this.$api_sub_sidebar)
            .then(() => {
               this.$toast.df200();
            })
            .catch(e => {
               this.$error.catch(e);
            });
      },
      update() {
         this.form
            .put(this.$api_sub_sidebar + "/" + this.form.kd_sub_sidebar)
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