<template>
	<div class="list">
		<Navbar />
		<Sidebar />
		<br />
		<br />
		<br />
		<Breadcrumb />
		<b-card>
			<p>Kelola Akun Pengguna</p>
			<!-- <b-table 
        striped hover 
        :items="items" 
        :fields="fields"
      >
      <template #cell(Aksi)>
         <b-button variant="success" @click="editGedung(gedung.id_gedung)">Edit</b-button>
          <b-button variant="danger" @click="deleteGedung(gedung.id_gedung)">Hapus</b-button>
      </template>
      </b-table> -->

			<b-table-simple striped hover>
				<b-thead>
					<b-tr>
						<b-td>No</b-td>
						<b-td>Email</b-td>
						<b-td>Nama</b-td>
						<b-td>No.Hp</b-td>
						<b-td>alamat</b-td>
						<b-td>Tanggal Registrasi</b-td>
						<b-td>Permintaan</b-td>
					</b-tr>
				</b-thead>
				<b-tbody>
					<b-tr v-for="(user, id) in users" :key="id">
						<b-td>{{ user.id }}</b-td>
						<b-td>{{ user.email }}</b-td>
						<b-td>{{ user.name }}</b-td>
						<b-td>{{ user.phone }}</b-td>
						<b-td>{{ user.alamat }}</b-td>
						<b-td>{{ user.created_at }}</b-td>
						<b-td
							><b-button
								variant="danger"
								@click="$bvModal.show('modalDelete' + user.id)"
								>Hapus</b-button
							></b-td
						>
						<!-- Modal delete -->
						<b-modal
							hide-footer
							hide-header
							centered
							:id="'modalDelete' + user.id"
						>
							<div class="d-block text-center">
								<svg
									width="76"
									height="65"
									viewBox="0 0 76 65"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M32.8546 1.80893C37.9538 -0.867566 44.4402 0.890972 47.2897 5.6742L74.5476 50.4501C75.1475 51.7866 75.41 52.8734 75.4849 54.0024C75.6349 56.6402 74.6601 59.2041 72.7479 61.1772C70.8357 63.1432 68.2487 64.3039 65.4366 64.4446H10.5459C9.38358 64.3777 8.22128 64.128 7.13396 63.7411C1.69738 61.6661 -0.927177 55.8277 1.28495 50.7666L28.7303 5.64254C29.6677 4.05634 31.0924 2.6882 32.8546 1.80893ZM37.9913 44.1158C36.1916 44.1158 34.6918 45.5227 34.6918 47.2144C34.6918 48.8991 36.1916 50.3094 37.9913 50.3094C39.791 50.3094 41.2532 48.8991 41.2532 47.1757C41.2532 45.491 39.791 44.1158 37.9913 44.1158ZM37.9913 22.1728C36.1916 22.1728 34.6918 23.5409 34.6918 25.2327V35.1825C34.6918 36.8707 36.1916 38.281 37.9913 38.281C39.791 38.281 41.2532 36.8707 41.2532 35.1825V25.2327C41.2532 23.5409 39.791 22.1728 37.9913 22.1728Z"
										fill="#FFE60C"
									/>
								</svg>
								<h3>Apakah Anda Yakin?</h3>
								<h6>Data yang anda hapus akan hilang</h6>
							</div>
							<div class="col-12 text-center">
								<b-button
									class="mt-3"
									variant="success"
									@click="$bvModal.hide('modalDelete' + user.id)"
									>Batal</b-button
								>
								<b-button
									class="mt-3"
									variant="danger"
									@click="
										deleteUser(user.id), $bvModal.hide('modalDelete' + user.id)
									"
								>
									Ok
								</b-button>
							</div>
						</b-modal>
					</b-tr>
				</b-tbody>
			</b-table-simple>
		</b-card>
		<liveChatBtn />
		<FooterComponent />
	</div>
</template>

<script>
	// @ is an alias to /src
	import axios from "axios";
	import Navbar from "@/components/navbarComponent.vue";
	import Sidebar from "@/components/sidebarComponent.vue";
	import Breadcrumb from "../components/breadcrumb.vue";
	import FooterComponent from "@/components/footerComponent.vue";
	import liveChatBtn from "@/components/liveChatBtn.vue";

	export default {
		name: "daftarPengguna",
		components: {
			Navbar,
			Sidebar,
			Breadcrumb,
			FooterComponent,
			liveChatBtn,
		},
		data() {
			return {
				users: [],
			};
		},
		computed() {
			// return this.$store.state.users
		},
		mounted() {
			// this.$store.dispatch('fetchUsers')
			this.fetchUsers();
		},
		methods: {
			fetchUsers() {
				axios
					.get(process.env.VUE_APP_APILink + "/user")
					.then((response) => {
						this.users = response.data;
						console.log(response.data);
					})
					.catch((error) => {
						console.log(error);
					});
			},
			deleteUser(id) {
				// console.log(id);
				axios
					.delete(process.env.VUE_APP_APILink + "/user/" + id)
					.then((response) => {
						this.fetchUsers();
						console.log(response);
					})
					.catch((error) => {
						console.log(error);
					});
			},
		},
	};
</script>

<style scoped>
	.list {
		background-color: #e5e5e5;
	}
	.card {
		margin-right: 25px;
		margin-left: 25px;
		margin-bottom: 25px;
	}
	p {
		font-family: "Poppins";
		font-style: normal;
		font-size: 19px;
		font-weight: 600;
		line-height: 33px;
		display: flex;
		color: #1cab59;
	}
	.btn-success {
		background-color: #1cab59;
		border-color: #1cab59;
		width: 90px;
		height: 31px;
		margin: 10px !important;
		padding: 0 !important;
	}
	.btn-danger {
		background-color: #ff3538 !important;
		border-color: #ff3538 !important;
		width: 90px;
		height: 31px;
		margin: 10px !important;
		padding: 0 !important;
	}
</style>
