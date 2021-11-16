<template>
   <div style=" overflow-y:hidden" class="gr-bg-d-blue-tl text-white">
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 1440 320"
         style="position:absolute; z-index:0; bottom:0px"
      >
         <path
            fill="#415db5"
            fill-opacity="1"
            d="M0,32L24,64C48,96,96,160,144,170.7C192,181,240,139,288,133.3C336,128,384,160,432,165.3C480,171,528,149,576,133.3C624,117,672,107,720,112C768,117,816,139,864,165.3C912,192,960,224,1008,202.7C1056,181,1104,107,1152,85.3C1200,64,1248,96,1296,96C1344,96,1392,64,1416,48L1440,32L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
         />
      </svg>

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
                        <button class="btn btn-outline-light btn-block">Login</button>
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
