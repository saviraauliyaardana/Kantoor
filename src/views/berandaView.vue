<template>
  <div class="Beranda">
    <Navbar />
    <Sidebar />
    <br>
    <br>
    <br>
    <Breadcrumb />
    <b-card-group class="box">
      <b-card bg-variant="success" text-variant="white" class="text-center">
        <b-card-text>
          <br>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
          </svg>
          <br>
          Pengguna
          <br>
          28
        </b-card-text>
      </b-card>
      <b-card bg-variant="success" text-variant="white" class="text-center">
        <b-card-text>
          <br>
          <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.375 20.625V39.375H11.75V28.125H19.25V39.375H28.625V20.625L15.5 11.25L2.375 20.625Z"
              fill="#F4F4F4" />
            <path
              d="M19.25 5.625V9.31875L32.375 18.6938V20.625H36.125V24.375H32.375V28.125H36.125V31.875H32.375V39.375H43.625V5.625H19.25ZM36.125 16.875H32.375V13.125H36.125V16.875Z"
              fill="#F4F4F4" />
          </svg>
          <br>
          Jumlah Gedung
          <br>
          24
        </b-card-text>
      </b-card>
      <b-card bg-variant="success" text-variant="white" class="text-center">
        <b-card-text>
          <br>
          <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.375 3.375C6.88316 3.375 5.45242 3.96763 4.39752 5.02252C3.34263 6.07742 2.75 7.50816 2.75 9V37.125C2.75 38.6168 3.34263 40.0476 4.39752 41.1025C5.45242 42.1574 6.88316 42.75 8.375 42.75H36.5C37.9918 42.75 39.4226 42.1574 40.4775 41.1025C41.5324 40.0476 42.125 38.6168 42.125 37.125V9C42.125 7.50816 41.5324 6.07742 40.4775 5.02252C39.4226 3.96763 37.9918 3.375 36.5 3.375H8.375ZM15.4062 15.3281C15.4062 15.8876 15.184 16.4241 14.7884 16.8197C14.3928 17.2153 13.8563 17.4375 13.2969 17.4375C12.7374 17.4375 12.2009 17.2153 11.8053 16.8197C11.4097 16.4241 11.1875 15.8876 11.1875 15.3281C11.1875 14.7687 11.4097 14.2322 11.8053 13.8366C12.2009 13.441 12.7374 13.2188 13.2969 13.2188C13.8563 13.2188 14.3928 13.441 14.7884 13.8366C15.184 14.2322 15.4062 14.7687 15.4062 15.3281ZM13.2969 25.875C12.7374 25.875 12.2009 25.6528 11.8053 25.2572C11.4097 24.8616 11.1875 24.3251 11.1875 23.7656C11.1875 23.2062 11.4097 22.6697 11.8053 22.2741C12.2009 21.8785 12.7374 21.6562 13.2969 21.6562C13.8563 21.6562 14.3928 21.8785 14.7884 22.2741C15.184 22.6697 15.4062 23.2062 15.4062 23.7656C15.4062 24.3251 15.184 24.8616 14.7884 25.2572C14.3928 25.6528 13.8563 25.875 13.2969 25.875ZM15.4062 32.2031C15.4062 32.7626 15.184 33.2991 14.7884 33.6947C14.3928 34.0903 13.8563 34.3125 13.2969 34.3125C12.7374 34.3125 12.2009 34.0903 11.8053 33.6947C11.4097 33.2991 11.1875 32.7626 11.1875 32.2031C11.1875 31.6437 11.4097 31.1072 11.8053 30.7116C12.2009 30.316 12.7374 30.0938 13.2969 30.0938C13.8563 30.0938 14.3928 30.316 14.7884 30.7116C15.184 31.1072 15.4062 31.6437 15.4062 32.2031ZM21.0312 14.625H32.2812C32.6542 14.625 33.0119 14.7732 33.2756 15.0369C33.5393 15.3006 33.6875 15.6583 33.6875 16.0312C33.6875 16.4042 33.5393 16.7619 33.2756 17.0256C33.0119 17.2893 32.6542 17.4375 32.2812 17.4375H21.0312C20.6583 17.4375 20.3006 17.2893 20.0369 17.0256C19.7732 16.7619 19.625 16.4042 19.625 16.0312C19.625 15.6583 19.7732 15.3006 20.0369 15.0369C20.3006 14.7732 20.6583 14.625 21.0312 14.625ZM19.625 24.4688C19.625 24.0958 19.7732 23.7381 20.0369 23.4744C20.3006 23.2107 20.6583 23.0625 21.0312 23.0625H32.2812C32.6542 23.0625 33.0119 23.2107 33.2756 23.4744C33.5393 23.7381 33.6875 24.0958 33.6875 24.4688C33.6875 24.8417 33.5393 25.1994 33.2756 25.4631C33.0119 25.7268 32.6542 25.875 32.2812 25.875H21.0312C20.6583 25.875 20.3006 25.7268 20.0369 25.4631C19.7732 25.1994 19.625 24.8417 19.625 24.4688ZM21.0312 31.5H32.2812C32.6542 31.5 33.0119 31.6482 33.2756 31.9119C33.5393 32.1756 33.6875 32.5333 33.6875 32.9062C33.6875 33.2792 33.5393 33.6369 33.2756 33.9006C33.0119 34.1643 32.6542 34.3125 32.2812 34.3125H21.0312C20.6583 34.3125 20.3006 34.1643 20.0369 33.9006C19.7732 33.6369 19.625 33.2792 19.625 32.9062C19.625 32.5333 19.7732 32.1756 20.0369 31.9119C20.3006 31.6482 20.6583 31.5 21.0312 31.5Z"
              fill="#F4F4F4" />
          </svg>
          <br>
          Pemesanan.
          <br>
          23
        </b-card-text>
      </b-card>
    </b-card-group>
    <b-card-group class="box">
      <b-card bg-variant="success" text-variant="white" class="text-center">
        <b-card-text>
          <br>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z" />
          </svg>
          <br>
          Pengguna Non-Aktif
          <br>
          23
        </b-card-text>
      </b-card>
      <b-card bg-variant="success" text-variant="white" class="text-center">
        <b-card-text>
          <br>
          <img alt="Icon" src="../assets/history-query.png">
          <br>
          <br>
          Ulasan
          <br>
          3
        </b-card-text>
      </b-card>
      <b-card bg-variant="success" text-variant="white" class="text-center">
        <b-card-text>
          <br>
          <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.9375 34.9219H35.75C36.3078 34.9219 36.7751 34.7194 37.1517 34.3144C37.5298 33.9108 37.7188 33.4102 37.7188 32.8125V24.375C37.7188 23.7773 37.5298 23.276 37.1517 22.871C36.7751 22.4674 36.3078 22.2656 35.75 22.2656H23.9375C23.3797 22.2656 22.9124 22.4674 22.5357 22.871C22.1578 23.276 21.9688 23.7773 21.9688 24.375V32.8125C21.9688 33.4102 22.1578 33.9108 22.5357 34.3144C22.9124 34.7194 23.3797 34.9219 23.9375 34.9219ZM8.1875 41.25C7.10469 41.25 6.17806 40.8373 5.40763 40.0118C4.63588 39.1849 4.25 38.1914 4.25 37.0312V11.7188C4.25 10.5586 4.63588 9.56578 5.40763 8.74031C6.17806 7.91344 7.10469 7.5 8.1875 7.5H39.6875C40.7703 7.5 41.6976 7.91344 42.4693 8.74031C43.2398 9.56578 43.625 10.5586 43.625 11.7188V37.0312C43.625 38.1914 43.2398 39.1849 42.4693 40.0118C41.6976 40.8373 40.7703 41.25 39.6875 41.25H8.1875ZM8.1875 37.0312V11.7188V37.0312ZM8.1875 37.0312H39.6875V11.7188H8.1875V37.0312Z"
              fill="#F4F4F4" />
          </svg>
          <br>
          Pemesanan
          <br>
          3
        </b-card-text>
      </b-card>
    </b-card-group>
    <liveChatBtn/>
    <FooterComponent />
    <!-- <button type="button" class="btn btn-primary btn-floating">
        <i class="fas fa-download"></i>
      </button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import FooterComponent from '@/components/footerComponent.vue'
import Navbar from '@/components/navbarComponent.vue'
import Sidebar from '@/components/sidebarComponent.vue'
import Breadcrumb from '../components/breadcrumb.vue'
import liveChatBtn from '@/components/liveChatBtn.vue'

export default {
  name: 'berandaView',
  components: {
    Navbar,
    Sidebar,
    Breadcrumb,
    liveChatBtn,
    FooterComponent

  },
}
</script>

<style scoped>
.Beranda {
  background-color: #E5E5E5 !important;
  height: 100vh;
}

.card-body {
  background-color: #1CAB59;
}

.text-center {
  border: 20px solid #E5E5E5 !important;
}

.box {
  height: 200px;
  background: #1CAB59 !important;
}

svg {
  width: 45px;
  height: 45px;
  margin: 0 auto;
  display: block;
}

img {
  width: 45px;
}

path {
  fill: #F4F4F4 !important;
  ;
}

.card-text {
  font-weight: 700;
}

.footer {
  position: fixed !important;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
