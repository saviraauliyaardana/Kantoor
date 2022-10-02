<!-- @format -->

<template>
	<div class="list">
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
			<p>Kelola Pesanan</p>
			<b-table striped hover :items="items" :fields="fields">
				<template #cell(Permintaan)="data">
					<div v-if="data.item.Status === 'Belum Diterima'">
						<b-button variant="success" @click="EditPesanan(data.item)"
							>Edit</b-button
						>
						<b-button variant="info" @click="BCPesanan()">Kirim Kode</b-button>
					</div>
					<div v-else>Kode Sudah Dikirim</div>
				</template>
			</b-table>
		</b-card>
		<liveChatBtn />
		<FooterComponent />
	</div>
</template>

<script>
	// @ is an alias to /src
	import Navbar from "@/components/navbarComponent.vue";
	import Sidebar from "@/components/sidebarComponent.vue";
	import Breadcrumb from "../components/breadcrumb.vue";
	import FooterComponent from "@/components/footerComponent.vue";
	import LiveChatBtn from "@/components/liveChatBtn.vue";
	import axios from "axios";

	export default {
		name: "daftarPengguna",
		components: {
			Navbar,
			Sidebar,
			Breadcrumb,
			FooterComponent,
			LiveChatBtn,
		},
		data() {
			return {
				fields: [
					"ID_Pemesanan",
					"Nama",
					"NomorHp",
					"Nama_Gedung",
					"Jumlah_Pemesanan",
					"Total_Harga",
					"Tanggal_Masuk",
					"Tanngal_Keluar",
					"Permintaan",
				],
				items: [],
				loading: true,
			};
		},
		async mounted() {
			await axios
				.get(
					"http://server.greskit.com:8080/admin/bookings"
				)
				.then(res => {
					// console.log(res.data);
					const data = res.data.data;
					console.log(data);
					data.forEach((item) => {
						const dataUser =item.user;
						dataUser.forEach((user) => {
							this.items.push({
								ID_Pemesanan : item.bookingcode || "-",
								Nama: user.fullname || "-",
								NomorHp: item.phone || "-",
								Nama_Gedung: item.nama_gedung || "Belum Dipilih",
								Jumlah_Pemesanan: item.totalbooking || "Lupa Masukkan",
								Total_Harga: item.price || "Lupa Narok",
								Tanggal_Masuk: item.checkin || "-",
								Tanngal_Keluar: item.checkout || "-",
								Status: item.status === "0" ? "Belum Diterima" : "Sudah Diterima",
						// 	Nama_Gedung: item.nama_gedung || "Lupa Masukkan",
						// 	Total_Harga: item.price || "Lupa Narok",
						// 	ID: item.id,
						// 			Nama: item.nama || "-",
						// 			NomorHp: item.phone || "-",
						// 			Jumlah_Pemesanan: item.totalbooking || "Lupa Masukkan",
						// 			ID_Pemesanan: item.id_booking,
						// 			Tanggal_Masuk: item.checkin || "-",
						// 			Tanngal_Keluar: item.checkout || "-",
						// 			Status:
						// 				item.status === "0" ? "Belum Diterima" : "Sudah Diterima",
						// });
						});
						// var gedung = item.gedung;
						// var user = item.user;
						// gedung.forEach(item1 => {
						// 	user.forEach(item2 => {
						// 		this.items.push({
						// 			Nama_Gedung: item1.name || "Lupa Masukkan",
						// 			Total_Harga: item1.price || "Lupa Narok",
						// 			ID: item.id,
						// 			Nama: item2.fullname || "-",
						// 			NomorHp: item2.phone || "-",
						// 			Jumlah_Pemesanan: item.totalbooking || "Lupa Masukkan",
						// 			ID_Pemesanan: item.booking_code,
						// 			Tanggal_Masuk: item.checkin || "-",
						// 			Tanngal_Keluar: item.checkout || "-",
						// 			Status:
						// 				item.status === "0" ? "Belum Diterima" : "Sudah Diterima",
						// 		});
						// 	});
						// });

						});
					});
					// console.log(this.items);
					this.loading = false;
				})
				.catch(e => {
					console.log(e);
					this.loading = false;
				});
		},
		methods: {
			EditPesanan(data) {
				let simpan = JSON.stringify(data);
				localStorage.setItem("EditPesanan", simpan);
				this.$router.push("/addPesanan");
				// console.log(data);
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