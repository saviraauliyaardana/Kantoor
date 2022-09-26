<template>
  <div class="list">
    <Navbar />
    <Sidebar />
    <br>
    <br>
    <br>
    <Breadcrumb />
    <div>
      <b-card>
        <p>Pembuatan Gedung Baru</p>
        <br>
          <div>
            <b-form  @batal="onReset" v-if="show">
                <b-row class="mt-2">
                <b-col sm="2" class="text-end">
                  <b-form-group id="input-group-1" label="Jenis Gedung :" label-for="input-1"></b-form-group>
                </b-col>
                <b-col sm="10">
                  <b-form-select
                    id="input-1"
                    v-model="form.gedung"
                    :options="gedungs"
                    required
                  ></b-form-select>
                </b-col>
                </b-row>

                <b-row class="mt-2">
                <b-col sm="2" class="text-end">
                <b-form-group id="input-group-2" label="Nama Gedung :" label-for="input-2"></b-form-group>
                </b-col>
                <b-col sm="10">
                     <b-form-input
                      id="input-2"
                      v-model="form.namaGedung"
                      placeholder="Masukkan Nama Gedung"
                      required
                  ></b-form-input>
                </b-col>
                </b-row>

                <b-row class="mt-2">
                <b-col sm="2" class="text-end">
                <b-form-group id="input-group-3" label="Lokasi :" label-for="input-3"></b-form-group>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    id="input-3"
                    v-model="form.lokasi"
                    placeholder="Masukkan Lokasi Gedung"
                    required
                  ></b-form-input>
                </b-col>
                </b-row>

                <b-row class="mt-2">
                <b-col sm="2" class="text-end">
                  <b-form-group id="input-group-4" label="Harga :" label-for="input-4"></b-form-group>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    id="input-3"
                    v-model="form.harga"
                    placeholder="Masukkan Harga Gedung"
                    required
                  ></b-form-input>
                </b-col>
                </b-row>

                <b-row class="mt-2">
                <b-col sm="2" class="text-end">
                  <b-form-group id="input-group-5" label="Fasilitas Gedung :" label-for="input-5"></b-form-group>
                </b-col>
                <b-col sm="10">
                  <b-form-input
                    id="input-3"
                    v-model="form.fasilitasGedung"
                    placeholder="Masukkan Fasilitas Gedung"
                    required
                  ></b-form-input>
                </b-col>
                </b-row>

                <b-row class="mt-2">
                  <b-col sm="2" class="text-end">
                  <label for="deskripsi">Deskripsi :</label>
                </b-col>
                <b-col sm="10">
                  <b-form-textarea
                      id="deskripsi"
                      placeholder="Masukkan Deskripsi Gedung"
                  ></b-form-textarea>
                </b-col>
                </b-row>

                <b-row class="mt-2">
                <b-col sm="2" class="text-end">
                  <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>
                </b-col>
                <b-col sm="10">
                  <b-form-file  v-model="file" class="form-control" plain></b-form-file>
                </b-col>
                </b-row>

                <br>
                <b-col sm="6">
                  <b-button type="buat"  variant="success" @click="tambahGedung()">Buat</b-button>
                  <b-button type="batal" variant="outline-success"> Batal </b-button>
                </b-col>
            </b-form>
          </div>   
        </b-card>
      </div>
      <br>
      <br>
      <br>
      <br>
      <LiveChatBtn />
    <FooterComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/navbarComponent.vue'
import Sidebar from '@/components/sidebarComponent.vue'
import Breadcrumb from '../components/breadcrumb.vue'
import FooterComponent from '@/components/footerComponent.vue'
import LiveChatBtn from '@/components/liveChatBtn.vue'
import axios from 'axios'

export default {
  name: 'addGedung',
  components: {
    Navbar,
    Sidebar,
    Breadcrumb,
    FooterComponent,
    LiveChatBtn
},
  data() {
      return {
        form: {
          namaGedung: '',
          lokasi: '',
          harga: '',
          fasilitasGedung: '',
          gedung: null,
          file: null,
          checked: []
        },
        gedungs: [{ text: 'Masukkan Jenis Gedung', value: null }, 
              'Low-rise (bertingkat rendah) dengan satu penyewa', 
              'Low-rise, multitenant (beberapa penyewa)', 
              'Mid-rise/bertingkat menengah (4 hingga 16 lantai)', 
              'High-rise/bertingkat tinggi (16 lantai atau lebih)', 
              'Kantor dengan ruang ritel (office with street-level retail space)'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.namaGedung = ''
        this.form.lokasi = ''
        this.form.harga = ''
        this.form.fasilitasGedung = ''
        this.form.gedung = null
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      tambahGedung() {
        axios
        .post('http://server.greskit.com:8080/admin/gedung/', this.form)
        .then(response => {
          console.log(response)
          // this.$router.push('/gedung')
        })
        .catch(error => {
          console.log(error)
        })
      },
    }
  }
</script>

<style scoped>

.list{
  background-color: #e5e5e5;
}
.card{
 margin-right: 25px;
 margin-left: 25px;
 margin-bottom: 40px;
 margin-top: 0px;
}
p{
  font-family: 'Poppins';
  font-style: normal;
  font-size: 19px;
  font-weight:600;
  line-height: 33px;
  display: flex;
  color: #1CAB59;
}
.btn-success {
  width: 90px;
  height: 31px;
  margin: 10px !important;
  padding: 0 !important;
}

.btn-outline-success{
  width: 90px;
  height: 31px;
  margin: 10px !important;
  padding: 0 !important;
}

</style>