<template>
  <div class="sidebar">
    <b-sidebar
      id="sidebar-menu"
      aria-labelledby="sidebar-menu-title"
      no-header
      shadow
      backdrop
    >
      <div class="p-3">
        <img alt="Vue logo" src="../assets/logo.png" />
        <nav class="nav-side">
          <b-list-group flush class="d-flex align-items-center" vertical="md">
            <b-list-group-item
              href="/beranda"
              variant="light"
              class="text-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                fill="currentColor"
                class="bi bi-speedometer2"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 4a.5.5 0 0 1 .5.5V6a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 8 4zM3.732 5.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 10a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 10zm9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5zm.754-4.246a.389.389 0 0 0-.527-.02L7.547 9.31a.91.91 0 1 0 1.302 1.258l3.434-4.297a.389.389 0 0 0-.029-.518z"
                />
                <path
                  fill-rule="#BBBBBB"
                  d="M0 10a8 8 0 1 1 15.547 2.661c-.442 1.253-1.845 1.602-2.932 1.25C11.309 13.488 9.475 13 8 13c-1.474 0-3.31.488-4.615.911-1.087.352-2.49.003-2.932-1.25A7.988 7.988 0 0 1 0 10zm8-7a7 7 0 0 0-6.603 9.329c.203.575.923.876 1.68.63C4.397 12.533 6.358 12 8 12s3.604.532 4.923.96c.757.245 1.477-.056 1.68-.631A7 7 0 0 0 8 3z"
                />
              </svg>
              <span class="ms-3">Beranda</span>
            </b-list-group-item>
            <b-list-group-item class="w-100">
              <b-button
                block
                v-b-toggle.accordion-1
                variant="light"
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <svg
                  width="29"
                  height="29"
                  viewBox="0 0 46 45"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#666"
                    d="M2.375 20.625V39.375H11.75V28.125H19.25V39.375H28.625V20.625L15.5 11.25L2.375 20.625Z"
                  />
                  <path
                    d="M19.25 5.625V9.31875L32.375 18.6938V20.625H36.125V24.375H32.375V28.125H36.125V31.875H32.375V39.375H43.625V5.625H19.25ZM36.125 16.875H32.375V13.125H36.125V16.875Z"
                    fill="#666"
                  />
                </svg>
                <span class="ms-3">Daftar Gedung</span>
              </b-button>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-list-group-item
                  to="/addGedung"
                  variant="light"
                  class="border-0 text-start dropdown-item mb-1"
                >
                  <span class="text-nowrap">Tambah Gedung</span>
                </b-list-group-item>
                <b-list-group-item
                  to="/kelolaGedung"
                  variant="light"
                  class="border-0 text-start dropdown-item mb-1"
                >
                  <span class="text-nowrap">Kelola Gedung</span>
                </b-list-group-item>
              </b-collapse>
            </b-list-group-item>
            <b-list-group-item
              to="/daftarPengguna"
              variant="light"
              class="text-start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                fill="currentColor"
                class="bi bi-people-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
                <path
                  fill-rule="#BBBBBB"
                  d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
                />
                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
              </svg>
              <span class="ms-3">Daftar Pengguna</span>
            </b-list-group-item>
            <b-list-group-item class="w-100">
              <b-button
                block
                v-b-toggle.accordion-1
                variant="light"
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                fill="currentColor"
                class="bi bi-card-list"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"
                />
                <path
                  d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"
                />
              </svg>
              <span class="ms-3">Pemesanan</span>
              </b-button>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-list-group-item
                  to="/addPesanan"
                  variant="light"
                  class="border-0 text-start dropdown-item mb-1"
                >
                  <span class="text-nowrap">Tambah Pesanan</span>
                </b-list-group-item>
                <b-list-group-item
                  to="/kelolaPesanan"
                  variant="light"
                  class="border-0 text-start dropdown-item mb-1"
                >
                  <span class="text-nowrap">Kelola Pesanan</span>
                </b-list-group-item>
              </b-collapse>
            </b-list-group-item>
            <b-list-group-item
              to="/daftarUlasan"
              variant="light"
              class="text-start"
            >
              <svg
                width="29"
                height="29"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_225_1147"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="3"
                  y="3"
                  width="39"
                  height="39"
                >
                  <path
                    d="M39.375 22.5V8.4375C39.375 7.69158 39.0787 6.97621 38.5512 6.44876C38.0238 5.92132 37.3084 5.625 36.5625 5.625H8.4375C7.69158 5.625 6.97621 5.92132 6.44876 6.44876C5.92132 6.97621 5.625 7.69158 5.625 8.4375V36.5625C5.625 37.3084 5.92132 38.0238 6.44876 38.5512C6.97621 39.0787 7.69158 39.375 8.4375 39.375H22.5"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M30 35.625C33.1066 35.625 35.625 33.1066 35.625 30C35.625 26.8934 33.1066 24.375 30 24.375C26.8934 24.375 24.375 26.8934 24.375 30C24.375 33.1066 26.8934 35.625 30 35.625Z"
                    fill="#BBBBBB"
                    stroke="white"
                    stroke-width="4"
                  />
                  <path
                    d="M13.125 22.5H20.625M34.6875 33.75L39.375 37.5L34.6875 33.75ZM13.125 15H31.875H13.125Z"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </mask>
                <g mask="url(#mask0_225_1147)">
                  <path d="M0 0H45V45H0V0Z" fill="currentColor" />
                </g>
              </svg>
              <span class="ms-3">Daftar Ulasan</span>
            </b-list-group-item>
          </b-list-group>
        </nav>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "sidebarComponent",
  data() {
    return {};
  },
};
</script>

<style>
.list-group-item {
  color: #bbbbbb;
}
.list-group-item-light.list-group-item-action:hover,
.list-group-item-light.list-group-item-action:focus {
  color: #0e562d !important;
  background-color: #b3e3c8 !important;
}
.card > .list-group:first-child .list-group-item:first-child {
  border-width: 100% !important;
}
.btn-light {
  background-color: #fefefe !important;
  border-radius: 0px !important;
  border: 0 !important;
  border-color: #fefefe !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  font-weight: bold !important;
  color: #636464 !important;
  width: 100% !important;
}
.btn-light:hover {
  background-color: #b3e3c8 !important;
  border-color: #b3e3c8 !important;
}
img {
  width: 95px;
}

@media screen and (max-width: 300px) {
  nav.nav-side {
    padding: 0;
  }
}

.dropdown-item {
  box-shadow: 0 1px 1px 0px #000000c2;
}
</style>
