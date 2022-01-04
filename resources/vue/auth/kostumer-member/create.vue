<template>
   <div>
      <kembali></kembali>
      <div class="bg-white rounded border">
         <div class="container">
            <div class="row py-3 border-bottom">
               <div class="col-sm">
                  <div class="font-weight-bolder">Kelola Kostumer</div>
               </div>
            </div>
         </div>
         <div class="py-2 container">
            <form @submit.prevent="kd_kostumer_member == null ? add() : update() ">
               <div class="font-weight-bolder h5">Keterangan Biodata</div>
               <!-- Keterangan Biodata -->
               <div class="px-3">
                  <table class="table table-borderless">
                     <thead>
                        <tr>
                           <th class="px-3 align-middle" width="200">Nama Kostumer</th>
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
                              <validasi
                                 v-if="form.errors.has('nama')"
                                 :msg="form.errors.get('nama')"
                              ></validasi>
                           </td>
                        </tr>
                        <tr>
                           <th class="px-3 align-middle">Kelamin</th>
                           <td class="px-3 align-middle">
                              <select v-model="form.kelamin" required class="form-control">
                                 <option value="pria">Pria</option>
                                 <option value="wanita">Wanita</option>
                              </select>
                              <validasi
                                 v-if="form.errors.has('kelamin')"
                                 :msg="form.errors.get('kelamin')"
                              ></validasi>
                           </td>
                        </tr>
                        <tr>
                           <th class="px-3 align-middle">agama</th>
                           <td class="px-3 align-middle">
                              <select v-model="form.agama" required class="form-control">
                                 <option value="islam">Islam</option>
                                 <option value="kristern">kristen</option>
                              </select>
                              <validasi
                                 v-if="form.errors.has('agama')"
                                 :msg="form.errors.get('agama')"
                              ></validasi>
                           </td>
                        </tr>
                        <tr>
                           <th class="px-3 align-middle">Tanggal Lahir</th>
                           <td class="px-3 align-middle">
                              <input
                                 type="date"
                                 v-model="form.tgl_lahir"
                                 required
                                 class="form-control"
                                 id="nama"
                              />
                              <validasi
                                 v-if="form.errors.has('tgl_lahir')"
                                 :msg="form.errors.get('tgl_lahir')"
                              ></validasi>
                           </td>
                        </tr>
                        <tr>
                           <th class="px-3 align-middle">kewarganegaraan</th>
                           <td class="px-3 align-middle">
                              <multiselect
                                 v-if="api_data != null"
                                 v-model="form.kewarganegaraan"
                                 :options="api_data['negara']"
                                 track-by="nama_negara"
                                 label="nama_negara"
                              ></multiselect>
                              <validasi
                                 v-if="form.errors.has('kewarganegaraan')"
                                 :msg="form.errors.get('kewarganegaraan')"
                              ></validasi>
                           </td>
                        </tr>
                        <tr>
                           <th class="px-3 align-middle">Status Kostumer</th>
                           <td class="px-3 align-middle">
                              <select v-model="form.status_kostumer" required class="form-control">
                                 <option value="true">Aktif</option>
                                 <option value="false">Nonaktif</option>
                              </select>
                              <validasi
                                 v-if="form.errors.has('status_kostumer')"
                                 :msg="form.errors.get('status_kostumer')"
                              ></validasi>
                           </td>
                        </tr>
                     </thead>
                  </table>
               </div>
               <!-- Keterangan Alamat -->
               <div class="font-weight-bolder h5">Keterangan Alamat</div>
               <div class="px-3">
                  <table class="table table-borderless">
                     <thead>
                        <tr>
                           <th class="px-3 align-middle">Provinsi</th>
                           <td class="px-3 align-middle">
                              <multiselect
                                 v-if="api_data != null"
                                 v-model="form.provinsi"
                                 :options="api_data['provinsi']"
                                 track-by="provinsi"
                                 label="provinsi"
                                 @input="getDataWilayahAfterSetProvinsi"
                              ></multiselect>
                              <validasi
                                 v-if="form.errors.has('provinsi')"
                                 :msg="form.errors.get('provinsi')"
                              ></validasi>
                           </td>
                        </tr>

                        <tr>
                           <th class="px-3 align-middle" width="200">Wilayah (Kota / Kabupaten)</th>
                           <td class="px-3 align-middle">
                              <multiselect
                                 v-model="form.daerah"
                                 :options="wilayah"
                                 track-by="wilayah"
                                 label="wilayah"
                                 @input="getDataKecamatanAfterSetWilayah"
                              ></multiselect>
                              <validasi
                                 v-if="form.errors.has('daerah')"
                                 :msg="form.errors.get('daerah')"
                              ></validasi>
                           </td>
                        </tr>

                        <tr>
                           <th class="px-3 align-middle" width="200">Kecamatan</th>
                           <td class="px-3 align-middle">
                              <multiselect
                                 v-model="form.kecamatan"
                                 :options="kecamatan"
                                 track-by="kecamatan"
                                 label="kecamatan"
                                 @input="getDataKelurahanAfterSetKecamatan"
                              ></multiselect>
                              <validasi
                                 v-if="form.errors.has('kecamatan')"
                                 :msg="form.errors.get('kecamatan')"
                              ></validasi>
                           </td>
                        </tr>

                        <tr>
                           <th class="px-3 align-middle" width="200">Kelurahan</th>
                           <td class="px-3 align-middle">
                              <multiselect
                                 v-model="form.kelurahan"
                                 :options="kelurahan"
                                 track-by="kelurahan"
                                 label="kelurahan"
                                 @input="getDataKodeposAfterSetKelurahan"
                              ></multiselect>
                              <validasi
                                 v-if="form.errors.has('kelurahan')"
                                 :msg="form.errors.get('kelurahan')"
                              ></validasi>
                           </td>
                        </tr>

                        <tr>
                           <th class="px-3 align-middle" width="200">Kodepos</th>
                           <td class="px-3 align-middle">
                              <multiselect
                                 v-model="form.kodepos"
                                 :options="kodepos"
                                 track-by="kode_pos"
                                 label="kode_pos"
                              ></multiselect>
                              <validasi
                                 v-if="form.errors.has('kodepos')"
                                 :msg="form.errors.get('kodepos')"
                              ></validasi>
                           </td>
                        </tr>
                        <tr>
                           <th class="px-3 align-middle" width="200">Alamat Lengkap</th>
                           <td class="px-3 align-middle">
                              <input
                                 type="text"
                                 v-model="form.alamat_lengkap"
                                 class="form-control"
                                 required
                              />
                              <validasi
                                 v-if="form.errors.has('alamat_lengkap')"
                                 :msg="form.errors.get('alamat_lengkap')"
                              ></validasi>
                           </td>
                        </tr>
                     </thead>
                  </table>
               </div>

               <!-- Kotak Kostumer -->
               <div class="font-weight-bolder h5">Kontak Aktif</div>
               <div class="px-3">
                  <table class="table table-borderless">
                     <thead>
                        <tr>
                           <th class="px-3 align-middle" width="200">Email</th>
                           <td class="px-3 align-middle">
                              <input type="text" v-model="form.email" required class="form-control" />
                              <validasi
                                 v-if="form.errors.has('email')"
                                 :msg="form.errors.get('email')"
                              ></validasi>
                           </td>
                        </tr>

                        <tr>
                           <th class="px-3 align-middle">Nomor Telp 1</th>
                           <td class="px-3 align-middle">
                              <input
                                 type="number"
                                 v-model="form.telp1"
                                 required
                                 class="form-control"
                              />
                              <validasi
                                 v-if="form.errors.has('telp1')"
                                 :msg="form.errors.get('telp1')"
                              ></validasi>
                           </td>
                        </tr>

                        <tr>
                           <th class="px-3 align-middle">Nomor Telp 2</th>
                           <td class="px-3 align-middle">
                              <input
                                 type="number"
                                 v-model="form.telp2"
                                 required
                                 class="form-control"
                              />
                              <validasi
                                 v-if="form.errors.has('telp2')"
                                 :msg="form.errors.get('telp2')"
                              ></validasi>
                           </td>
                        </tr>
                     </thead>
                  </table>
               </div>

               <!-- Jenis Member -->
               <div class="font-weight-bolder h5">Jenis Member Kostumer</div>
               <div class="px-3">
                  <table class="table table-borderless">
                     <thead>
                        <tr>
                           <th class="px-3 align-middle" width="200">Member</th>
                           <td class="px-3 align-middle" v-if="api_data != null">
                              <multiselect
                                 v-model="form.fk_kd_jenis_member"
                                 :options="api_data['jenis_member']"
                                 track-by="kd_jenis_member"
                                 label="nama_jenis_member"
                              ></multiselect>
                              <validasi
                                 v-if="form.errors.has('kodepos')"
                                 :msg="form.errors.get('kodepos')"
                              ></validasi>
                           </td>
                        </tr>
                     </thead>
                  </table>
               </div>

               <button class="btn btn-block btn-dark" type="submit">Simpan Kostumer</button>
            </form>
         </div>
      </div>
   </div>
</template>
<script>
export default {
   data() {
      return {
         kd_kostumer_member: null,
         in_role: [],
         api_data: null,
         wilayah: [],
         kecamatan: [],
         kelurahan: [],
         kodepos: [],
         form: new Form({
            nama: "",
            nama_jenis_member: "",
            kelamin: "",
            agama: "",
            tgl_lahir: "",
            kewarganegaraan: "",
            status: "",
            daerah: "",
            email: "",
            telp1: "",
            telp2: "",
            provinsi: "",
            daerah: "",
            kecamatan: "",
            kelurahan: "",
            kodepos: "",
            fk_kd_jenis_member: ""
         })
      };
   },
   mounted() {
      if (this.$route.params.kd_kostumer_member) {
         this.kd_kostumer_member = this.$route.params.kd_kostumer_member;
         this.load_kostumer_if_edit();
      }
      this.load_create_dependency();
   },
   methods: {
      getDataKodeposAfterSetKelurahan() {
         axios
            .post(this.$api_kodepos, this.form.kelurahan)
            .then(respon => {
               this.kodepos = respon.data.api_data;
            })
            .catch(e => {
               this.$error.catch(e);
            });
      },
      getDataKelurahanAfterSetKecamatan() {
         axios
            .post(this.$api_kelurahan, this.form.kecamatan)
            .then(respon => {
               this.kelurahan = respon.data.api_data;
            })
            .catch(e => {
               this.$error.catch(e);
            });
      },
      getDataKecamatanAfterSetWilayah() {
         axios
            .post(this.$api_kecamatan, this.form.daerah)
            .then(respon => {
               this.kecamatan = respon.data.api_data;
            })
            .catch(e => {
               this.$error.catch(e);
            });
      },
      getDataWilayahAfterSetProvinsi() {
         axios
            .post(this.$api_wilayah, this.form.provinsi)
            .then(respon => {
               this.wilayah = respon.data.api_data;
            })
            .catch(e => {
               this.$error.catch(e);
            });
      },
      load_create_dependency() {
         this.$Progress.start();
         axios
            .get(this.$api_kostumer_member + "/create")
            .then(respon => {
               this.api_data = respon.data.api_data;
               this.$Progress.finish();
            })
            .catch(e => {
               this.$Progress.fail();
               this.$error.catch(e);
            });
      },
      load_kostumer_if_edit() {
         this.$Progress.start();
         axios
            .get(
               this.$api_kostumer_member +
                  "/" +
                  this.kd_kostumer_member +
                  "/edit"
            )
            .then(respon => {
               this.$Progress.finish();
               this.in_role = respon.data.in_role;
               this.form.fill(respon.data.api_data);
               this.form.tgl_lahir = this.$date(respon.data.api_data.tgl_lahir).format('YYYY-MM-DD');
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
            .post(this.$api_kostumer_member)
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
            .put(this.$api_kostumer_member + "/" + this.kd_kostumer_member)
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
