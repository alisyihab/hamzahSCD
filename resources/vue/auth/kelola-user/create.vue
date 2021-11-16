
<template>
   <div>
      <kembali></kembali>
      <div class="bg-white rounded border">
         <div class="container">
            <div class="row py-3 border-bottom">
               <div class="col-sm">
                  <div class="font-weight-bolder">Kelola Kelola User</div>
               </div>
            </div>
         </div>
         <div class="py-2 container">
            <form @submit.prevent="kd_user == null ? add() : update() ">
               <table class="table table-borderless">
                  <tr>
                     <th class="px-3 align-middle">Nama</th>
                     <td class="px-3 align-middle">
                        <input
                           type="text"
                           v-model="form.nama"
                           required
                           class="form-control"
                           id="nama"
                           maxlength="50"
                           minlength="1"
                        />
                     </td>
                  </tr>
                  <tr>
                     <th class="px-3 align-middle">Username</th>
                     <td class="px-3 align-middle">
                        <input
                           type="text"
                           v-model="form.username"
                           required
                           class="form-control"
                           id="username"
                           maxlength="100"
                           minlength="1"
                        />
                     </td>
                  </tr>
                  <tr>
                     <th class="px-3 align-middle">Email</th>
                     <td class="px-3 align-middle">
                        <input
                           type="text"
                           v-model="form.email"
                           required
                           class="form-control"
                           id="email"
                           maxlength="100"
                           minlength="1"
                        />
                     </td>
                  </tr>
                  <tr v-if="this.kd_user == null">
                     <th class="px-3 align-middle">Password</th>
                     <td class="px-3 align-middle">
                        <input
                           type="text"
                           v-model="form.password"
                           required
                           class="form-control"
                           id="password"
                           maxlength="100"
                           minlength="1"
                        />
                     </td>
                  </tr>
                  <tr>
                     <th class="px-3 align-middle">role</th>
                     <td class="px-3 align-middle">
                        <select v-model="form.role" required class="form-control">
                           <option
                              v-for="(role,i) in  in_role"
                              :key="i"
                              :value="role.kd_role"
                           >{{role.nama_role}}</option>
                        </select>
                     </td>
                  </tr>
                  <tr>
                     <th class="px-3 align-middle">Status Users</th>
                     <td class="px-3 align-middle">
                        <select v-model="form.status_user" required class="form-control">
                           <option value="true">Aktif</option>
                           <option value="false">Nonaktif</option>
                        </select>
                     </td>
                  </tr>
               </table>
               <button class="btn btn-block btn-dark" type="submit">Simpan Kelola User</button>
            </form>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         kd_user: null,
         in_role: [],
         form: new Form({
            kd_user: "",
            nama: "",
            username: "",
            email: "",
            password: "",
            role: "",
            status_user: ""
         })
      };
   },
   mounted() {
      if (this.$route.params.kd_user) {
         this.kd_user = this.$route.params.kd_user;
         this.load_kelola_user();
      } else {
         this.load_create();
      }
   },
   methods: {
      load_create() {
         this.$Progress.start();
         axios
            .get(this.$api_kelola_user + "/create")
            .then(respon => {
               this.in_role = respon.data.in_role;
               this.$Progress.finish();
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },
      load_kelola_user() {
         this.$Progress.start();
         axios
            .get(this.$api_kelola_user + "/" + this.kd_user + "/edit")
            .then(respon => {
               this.$Progress.finish();
               this.in_role = respon.data.in_role;
               this.form.fill(respon.data.in_kelola_user);
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
            .post("/api/kelola-user")
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
            .put(this.$api_kelola_user + "/" + this.kd_user)
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
