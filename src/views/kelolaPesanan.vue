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
					<b-button variant="success" @click="EditPesanan(data.item)"
						>Edit</b-button
					>
					<b-button variant="info" @click="BCPesanan(data.item)"
						>Cetak Pesanan</b-button
					>
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
				output: null,
			};
		},
		async mounted() {
			await axios
				.get(process.env.VUE_APP_APILink + "/bookings")
				.then((res) => {
					const data = res.data;
					console.log(data);
					data.forEach((item) => {
						this.items.push({
							ID: item.id,
							ID_Pemesanan: item.booking_code || "-",
							NomorHp: item.phone || "-",
							Nama: item.name || "tidak ada",
							Nama_Gedung: item.nama_gedung || "Belum Dipilih",
							Jumlah_Pemesanan: item.total_booking || "Lupa Masukkan",
							Total_Harga: item.price ? "Rp" + item.price : "Lupa Narok",
							Tanggal_Masuk: item.check_in || "-",
							Tanngal_Keluar: item.check_out || "-",
							Status: item.status === "0" ? "Belum Diterima" : "Sudah Diterima",
						});
					});
					// console.log(this.items);
					this.loading = false;
				})
				.catch((e) => {
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
			BCPesanan(data) {
				this.loading = true;
				const date = new Date();
				const dataInvoice = {
					id: data.ID_Pemesanan,
					nama: data.Nama,
					tanggalMasuk: data.Tanggal_Masuk,
					namaGedung: data.Nama_Gedung,
					jumlahPesanan: data.Jumlah_Pemesanan,
					totalHarga: data.Total_Harga,
					tanggalKeluar: data.Tanngal_Keluar,
					nomorHp: data.NomorHp,
					tanggalSekarang: date.toDateString(),
				};
				let simpan = JSON.stringify(dataInvoice);
				localStorage.setItem("invoice", simpan);
				this.$router.push("/invoice");
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
