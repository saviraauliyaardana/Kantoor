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
			<p>Daftar Ulasan</p>

			<b-table striped hover :items="items" :fields="fields">
				<template #cell(Permintaan)="data">
					<b-button variant="danger" @click="reviewHidden(data.item.IdPengguna)"
						>Hapus</b-button
					>
				</template>
			</b-table>
		</b-card>
		<liveChatBtn />
		<PopupReview v-show="show" />
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
	import PopupReview from "@/components/popupReview.vue";
	import axios from "axios";
	// import { getReview, getGedung } from "../common/getData";

	export default {
		name: "daftarUlasan",
		components: {
			Navbar,
			Sidebar,
			Breadcrumb,
			FooterComponent,
			LiveChatBtn,
			PopupReview,
		},
		data() {
			return {
				show: false,
				loading: false,
				id: null,
				fields: [
					{ key: "IdGedung", label: "ID" },
					{ key: "IdPengguna", label: "ID Pengguna" },
					{ key: "NamaGedung", label: "Nama Gedung" },
					{ key: "Rating", label: "Rating" },
					{ key: "Review", label: "Review" },
					"Permintaan",
				],
				items: [],
			};
		},
		methods: {
			reviewHidden(idReview) {
				this.id = idReview;
				this.showMsgBoxTwo();
			},
			showMsgBoxTwo() {
				this.$bvModal
					.msgBoxConfirm("Apakah kamu yakin ingin menghapusnya", {
						title: "Konfirmasi",
						size: "sm",
						buttonSize: "sm",
						okVariant: "danger",
						okTitle: "Ya",
						cancelTitle: "Tidak",
						footerClass: "p-2",
						hideHeaderClose: false,
						centered: true,
					})
					.then(value => {
						if (value === true) {
							this.loading = true;
							const url =
								"http://server.greskit.com:8080/admin/review/" +
								this.id;
							// console.log(url);
							axios
								.delete(url)
								.then(res => {
									console.log(res);
								})
								.catch(err => {
									console.log(err);
								})
								.finally(() => {
									this.id = "";
									// vm.$forceUpdate();
									this.$router.go();
								});
						}
					})
					.catch(err => {
						console.log(err);
					});
				this.loading = false;
			},
		},
		async mounted() {
			axios
				.get("http://server.greskit.com:8080/admin/gedungs")
				.then(res => {
					const dataAll = res.data.data;
					// console.log(res.data.data);
					dataAll.forEach(item1 => {
						// console.log(item);
						if (item1.reviews) {
							let review = item1.reviews;
							review.forEach(item2 => {
								this.items.push({
									IdGedung: item1.id,
									IdPengguna: item2.id,
									Review: item2.description,
									Rating: item2.rating,
									NamaGedung: item1.name,
								});
							});
						}
					});
					// console.log(this.items);
					this.loading = false;
				})
				.catch(err => {
					console.log(err);
					this.loading = false;
				});
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
