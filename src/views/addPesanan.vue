<!-- @format -->

<template>
	<div class="Admin">
		<Navbar />
		<Sidebar />
		<br />
		<br />
		<br />
		<Breadcrumb />
		<b-card v-if="loading">
			<b-spinner variant="success" label="Spinning"></b-spinner>
		</b-card>
		<b-card v-else>
			<p>Pembuatan Pesanan Baru</p>
			<b-container fluid class="row mb-3">
				<form class="row" @submit.prevent="simpan">
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Nama Gedung:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-select
							class="form-select"
							v-model="selected"
							:options="options"
							:disabled="edit"
						></b-form-select>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Nama:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="text"
							size="sm"
							:disabled="edit"
							v-model="items.Nama"
							placeholder="Masukkan Nama Lengkap"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>No Handphone:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="text"
							size="sm"
							:disabled="edit"
							v-model="items.NomorHp"
							placeholder="Masukkan No Handphone"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Jumlah Pemesanan:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="text"
							size="sm"
							v-model="items.Jumlah_Pemesanan"
							placeholder="Masukkan Jumlah Pemesanan"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Total Harga:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="text"
							size="sm"
							:disabled="edit"
							v-model="items.Total_Harga"
							placeholder="Masukkan Total Harga"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Tanggal Masuk:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="text"
							size="sm"
							v-model="items.Tanggal_Masuk"
							placeholder="Masukkan Tanggal Masuk"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Tanggal Keluar:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="text"
							size="sm"
							v-model="items.Tanngal_Keluar"
							placeholder="Masukkan Tanggal Keluar"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row"> </b-col>
					<b-col v-if="loading1" sm="2">
						<button class="btn btn-success float-right mt-3" type="submit">
							Buat
						</button>
						<button class="btn btn-success float-right mt-3">Batal</button>
					</b-col>
					<b-col v-else sm="2">
						<b-spinner variant="success" label="Spinning"></b-spinner
					></b-col>
				</form>
			</b-container>
		</b-card>
		<FooterComponent />
	</div>
</template>

<script>
	// @ is an alias to /src
	import Navbar from "@/components/navbarComponent.vue";
	import Sidebar from "@/components/sidebarComponent.vue";
	import FooterComponent from "@/components/footerComponent.vue";
	import Breadcrumb from "../components/breadcrumb.vue";
	import Vue from "vue";
	import axios from "axios";
	import VueAxios from "vue-axios";
	Vue.use(VueAxios, axios);

	export default {
		name: "profilAdmin",
		components: {
			Navbar,
			Sidebar,
			FooterComponent,
			Breadcrumb,
		},
		data() {
			return {
				options: [{ value: null, text: "Pilih Gedung yang anda mau" }],
				nearby: [],
				loading: true,
				items: [],
				edit: false,
				selected: null,
				loading1: true,
				disabled: false,
			};
		},
		mounted() {
			const data = JSON.parse(localStorage.getItem("EditPesanan"));
			// console.log(data);

			axios
				.get("http://server.greskit.com:8080/admin/gedungs")
				.then(response => {
					let data = response.data.data;
					data.forEach(item => {
						this.options.push({
							value: { id: item.id, name: item.name },
							text: item.name,
						});
					});
					// console.log(this.nearby);
				})
				.catch(error => {
					console.log(error);
				});
			if (data) {
				this.items = data;
				this.edit = true;
				// console.log(this.items, this.edit);
				localStorage.removeItem("EditPesanan");
				// alert("Data Masuk dan dihapus");
			}
			this.loading = false;
		},

		methods: {
			async simpan() {
				var date = () => {
					var today = new Date();
					var dd = today.getDate();

					var mm = today.getMonth() + 1;
					var yyyy = today.getFullYear();
					if (dd < 10) {
						dd = "0" + dd;
					}

					if (mm < 10) {
						mm = "0" + mm;
					}
					today = mm + "-" + dd + "-" + yyyy;
					return today;
				};
				this.loading1 = false;
				let data = [];
				// date();
				// this.items.forEach(item => {
				// 	data.push({
				// 		status: "0",
				// 		bookingcode: item.ID_Pemesanan,
				// 		checkin: item.Tanggal_Masuk,
				// 		checkout: item.Tanggal_Keluar,
				// 	});
				// });
				if (this.edit) {
					let url =
						"http://server.greskit.com:8080/admin/booking/" +
						this.items.ID;

					// console.log(this.items);
					// data = JSON.stringify({
					// 	checkout: this.items.Tanngal_Keluar,
					// 	orderdate: date().toString(),
					// 	checkin: this.items.Tanggal_Masuk,
					// });
					console.log(this.items);
					await axios
						.put(
							url,
							{
								checkout: this.items.Tanngal_Keluar,
								orderdate: date().toString(),
								checkin: this.items.Tanggal_Masuk,
								phone: this.items.NomorHp,
								price: this.items.Total_Harga,
								totalbooking: this.items.Jumlah_Pemesanan,
								fullname: this.items.Nama,
							},
							{
								headers: {
									// Overwrite Axios's automatically set Content-Type
									"Content-Type": "application/json",
								},
							}
						)

						.then(res => {
							console.log(res);
							this.$router.push("/kelolaPesanan");
						})
						.catch(err => {
							console.log(err);
						});
				} else {
					// console.log(this.items);
					let url =
						"http://server.greskit.com:8080/admin/booking";
					data = JSON.stringify({
						status: "0",
						checkout: this.items.Tanngal_Keluar,
						fullname: this.items.Nama,
						totalbooking: this.items.Jumlah_Pemesanan,
						bookingcode: Math.random().toString(),
						orderdate: date().toString(),
						checkin: this.items.Tanggal_Masuk,
						phone: this.items.NomorHp,
					});
					console.log(JSON.parse(data));
					await axios
						.post(url, data, {
							headers: {
								// Overwrite Axios's automatically set Content-Type
								"Content-Type": "application/json",
							},
						})
						.then(res => {
							console.log(res);
							this.$router.push("/kelolaPesanan");
						})
						.catch(err => {
							console.log(err);
						});
				}
				this.loading1 = true;
			},
		},
	};
</script>

<style scoped>
	p {
		font-family: "Poppins";
		font-style: normal;
		font-size: 19px;
		font-weight: 600;
		line-height: 33px;
		display: flex;
		color: #1cab59;
	}
	.card {
		margin-right: 25px;
		margin-left: 25px;
		margin-bottom: 40px;
		margin-top: 0px;
	}
	.Admin {
		background-color: #e5e5e5 !important;
		height: 100vh;
	}
	.card-body {
		background-color: #fefefe;
	}
	.text {
		text-align: left;
		color: #1cab59 !important;
	}
	.text1 {
		text-align: end;
	}
	.box {
		height: 200px;
		background: #fefefe !important;
	}
	svg {
		width: 45px;
		height: 45px;
		margin: 0 auto;
		display: block;
	}
	path {
		fill: #f4f4f4 !important;
	}
	.card-text {
		font-weight: 700;
	}
	button {
		width: auto;
		margin-right: 5px;
	}
	.btn-success {
		background-color: white;
		color: #1cab59 !important;
		font-weight: bold;
	}
	.footer {
		position: fixed !important;
		bottom: 0;
		left: 0;
		width: 100%;
	}
</style>