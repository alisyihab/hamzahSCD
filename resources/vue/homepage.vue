<template>
   <div style=" overflow-y:hidden" class>
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 1440 320"
         style="position:fixed; z-index:0; top:-50px"
      >
         <path
            fill="#4758DD"
            fill-opacity="1"
            d="M0,96L48,117.3C96,139,192,181,288,181.3C384,181,480,139,576,149.3C672,160,768,224,864,250.7C960,277,1056,267,1152,240C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
         />
      </svg>
      <svg
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 1440 320"
         style="position:fixed; z-index:0; bottom:-10px"
      >
         <path
            fill="#ACB7E7"
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
               <h2
                  class="font-weight-bolder text-white"
                  style="text-shadow: 2px 5px 7px rgba(0,0,0,0.53);
"
               >Singgle Costumer Database</h2>
            </div>
         </div>
         <div class="col-md-4 my-auto">
            <div class="p-3">
               <div
                  class="px-5 font-weight-bolder text-white h1 position-absolute d-md-block d-sm-none"
                  style="top:-100px; left:0"
               >
                  <div>Masuk</div>
               </div>
               <div class="px-5 font-weight-bolder text-center mb-4 h1 d-md-none d-sm-block">
                  <div>Masuk</div>
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
                                 class="btn btn-sm btn btn-dark ml-1 als round-right"
                                 @click="show_password"
                                 type="button"
                              >
                                 <i class="fa fa-eye"></i>
                              </button>
                           </span>
                        </div>
                     </div>
                     <div class="form-group">
                        <button class="btn btn-dark btn-block">Login</button>
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
   background: url("/file/default/scd.jpg");
   background-repeat: no-repeat;
   background-size: auto;
   background-position: center;
}
</style>
