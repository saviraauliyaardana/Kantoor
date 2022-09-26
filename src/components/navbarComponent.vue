<template>
  <div class="navbar">
    <b-navbar toggleable="lg" type="dark" variant="success" fixed="top">
      <b-button size="sm" v-b-toggle.sidebar-menu>
        <b-icon icon="list" class="hamburger"></b-icon>
      </b-button>
      <b-navbar variant="faded" type="light">
        <b-navbar-brand tag="h1" class="mb-0">SISTEM MANAJEMEN BOOKING GEDUNG ONLINE</b-navbar-brand>
      </b-navbar>
      <b-collapse id="nav-collapse" is-nav>
        <div class="spacer">|</div>
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.2001 13.1883C16.8946 13.1883 17.5824 13.055 18.2241 12.7958C18.8657 12.5367 19.4488 12.1568 19.9399 11.678C20.431 11.1991 20.8206 10.6307 21.0864 10.005C21.3522 9.3794 21.489 8.70885 21.489 8.03167C21.489 7.35448 21.3522 6.68393 21.0864 6.0583C20.8206 5.43266 20.431 4.86419 19.9399 4.38535C19.4488 3.90651 18.8657 3.52667 18.2241 3.26753C17.5824 3.00838 16.8946 2.875 16.2001 2.875C14.7974 2.875 13.4521 3.41829 12.4603 4.38535C11.4684 5.35242 10.9112 6.66403 10.9112 8.03167C10.9112 9.3993 11.4684 10.7109 12.4603 11.678C13.4521 12.645 14.7974 13.1883 16.2001 13.1883V13.1883ZM2.6001 28.511V29.395H29.8001V28.511C29.8001 25.2107 29.8001 23.5606 29.1413 22.2994C28.5618 21.1906 27.6371 20.289 26.4998 19.724C25.2063 19.0817 23.5139 19.0817 20.129 19.0817H12.2712C8.88632 19.0817 7.19388 19.0817 5.90036 19.724C4.76308 20.289 3.83843 21.1906 3.25894 22.2994C2.6001 23.5606 2.6001 25.2107 2.6001 28.511Z"
            fill="white"
            stroke="white"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <b-navbar-nav class="ml-auto px-2">
          <b-nav-item-dropdown text="Selamat Datang Admin">
            <b-dropdown-item href="/profilAdmin"
              >Profil
              <svg width="25" height="25" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.2001 13.1883C16.8946 13.1883 17.5824 13.055 18.2241 12.7958C18.8657 12.5367 19.4488 12.1568 19.9399 11.678C20.431 11.1991 20.8206 10.6307 21.0864 10.005C21.3522 9.3794 21.489 8.70885 21.489 8.03167C21.489 7.35448 21.3522 6.68393 21.0864 6.0583C20.8206 5.43266 20.431 4.86419 19.9399 4.38535C19.4488 3.90651 18.8657 3.52667 18.2241 3.26753C17.5824 3.00838 16.8946 2.875 16.2001 2.875C14.7974 2.875 13.4521 3.41829 12.4603 4.38535C11.4684 5.35242 10.9112 6.66403 10.9112 8.03167C10.9112 9.3993 11.4684 10.7109 12.4603 11.678C13.4521 12.645 14.7974 13.1883 16.2001 13.1883V13.1883ZM2.6001 28.511V29.395H29.8001V28.511C29.8001 25.2107 29.8001 23.5606 29.1413 22.2994C28.5618 21.1906 27.6371 20.289 26.4998 19.724C25.2063 19.0817 23.5139 19.0817 20.129 19.0817H12.2712C8.88632 19.0817 7.19388 19.0817 5.90036 19.724C4.76308 20.289 3.83843 21.1906 3.25894 22.2994C2.6001 23.5606 2.6001 25.2107 2.6001 28.511Z"
                  fill="white"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </b-dropdown-item>
            <b-dropdown-item href="/">Sign Out
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill="white" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                <path fill="white" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'navbarComponent',
};
</script>

<style scoped>

.navbar-expand-lg .navbar-collapse{
  justify-content: flex-end;
}

.spacer {
  color: white;
  font-size: 30px;
}

.navbar-dark .navbar-nav .nav-link:focus {
  color: white !important;
}
svg {
  padding-left: 5px;
}

.hamburger {
  padding-right: 20px !important;
  background-color: #1cab59 !important;
}

.btn-secondary {
  color: #fff;
  background-color: #1cab59 !important;
  border-color: #1cab59 !important;
  border: 0px;
}

.btn-secondary:focus {
  background-color: #1cab59 !important;
  border-color: #1cab59 !important;
}

.btn-secondary:hover {
  background-color: #1cab59 !important;
  border-color: #1cab59 !important;
}
</style>

