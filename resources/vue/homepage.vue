<template>
   <div style=" overflow-y:hidden" class="gr-bg-d-blue-tl text-white">
      <div class="row no-gutters" style="height:100vh">
         <div class="col-md data_center d-md-block d-none">
            <div
               style="
                  position: fixed;
                  top: 50%;
                  left: 50%;
                  transform: translate(-50%, -50%);
                  "
            >
               <h2 class="font-weight-bolder text-white">Hamzah Data Center</h2>
            </div>
         </div>
         <div class="col-md-4 my-auto">
            <div class="p-3">
               <div class="px-5 text-center font-weight-bold h3">
                  <div class="f5-fz">Masuk</div>
               </div>
               <div class="form-group p-2">
                  <form @submit.prevent="login">
                     <div class="form-group">
                        <label for>Username</label>
                        <input
                           type="text"
                           class="form-control form-control-sm"
                           v-model="form.username"
                        />
                     </div>
                     <div class="form-group">
                        <label for>Password</label>
                        <div class="input-group">
                           <input
                              type="password"
                              id="password"
                              class="form-control form-control-sm"
                              v-model="form.password"
                           />
                           <span class="input-group-prepend">
                              <button
                                 class="btn btn-sm btn btn-outline-light ml-1 als round-right"
                                 @click="show_password"
                                 type="button"
                              >
                                 <i class="fa fa-eye"></i>
                              </button>
                           </span>
                        </div>
                     </div>
                     <div class="form-group">
                        <button class="btn bg-d-blue btn-block">Login</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   components: {},
   data() {
      return {
         registrasi: false,
         telah_registrasi: false,
         typeInput: false,
         public_registration: false,
         form: new Form({
            username: "",
            password: ""
         })
      };
   },
   mounted() {},
   methods: {
      login() {
         this.$toast.df102();
         this.form
            .post("/login")
            .then(() => {
               this.$toast.df200();
               window.location = "/dashboard";
            })
            .catch(e => {
               this.$error.catch(e);
            });
      },
      show_password() {
         this.typeInput = !this.typeInput;
         let password = document.getElementById("password");
         if (this.typeInput) {
            password.setAttribute("type", "text");
         } else {
            password.setAttribute("type", "password");
         }
      }
   }
};
</script>
<style scoped>
.data_center {
   background: url("/file/default/data_center.jpg");
   background-repeat: no-repeat;
   background-size: auto;
   background-position: center;
}
</style>
