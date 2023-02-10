<template>
	<div class="list">
		<Navbar />
		<Sidebar />
		<br />
		<br />
		<br />
		<Breadcrumb />
		<div>
			<b-card>
				<p>Pembuatan Gedung Baru</p>
				<br />
				<!-- <div> -->
				<b-container fluid class="row mb-3">
					<b-form @batal="onReset" v-if="show">
						<b-row class="mt-2">
							<b-col sm="2" class="text-end">
								<b-form-group
									id="input-group-1"
									label="Jenis Gedung :"
									label-for="input-1"
								></b-form-group>
							</b-col>
							<b-col sm="1">
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
								<b-form-group
									id="input-group-2"
									label="Nama Gedung :"
									label-for="input-2"
								></b-form-group>
							</b-col>
							<b-col sm="10">
								<b-form-input
									id="input-2"
									v-model="form.name"
									placeholder="Masukkan Nama Gedung"
									required
								></b-form-input>
							</b-col>
						</b-row>

						<b-row class="mt-2">
							<b-col sm="2" class="text-end">
								<b-form-group
									id="input-group-3"
									label="Lokasi :"
									label-for="input-3"
								></b-form-group>
							</b-col>
							<b-col sm="10">
								<b-form-input
									id="input-3"
									v-model="form.location"
									placeholder="Masukkan Lokasi Gedung"
									required
								></b-form-input>
							</b-col>
						</b-row>

						<b-row class="mt-2">
							<b-col sm="2" class="text-end">
								<b-form-group
									id="input-group-4"
									label="Harga :"
									label-for="input-4"
								></b-form-group>
							</b-col>
							<b-col sm="10">
								<b-form-input
									id="input-3"
									v-model="form.price"
									placeholder="Masukkan Harga Gedung"
									required
								></b-form-input>
							</b-col>
						</b-row>

						<b-row class="mt-2">
							<b-col sm="2" class="text-end">
								<b-form-group
									id="input-group-5"
									label="Fasilitas Gedung :"
									label-for="input-5"
								></b-form-group>
							</b-col>
							<b-col sm="10">
								<b-form-input
									id="input-3"
									v-model="form.description"
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
								<div class="mt-3">
									Selected file: {{ file ? file.name : "" }}
								</div>
							</b-col>
							<b-col sm="10">
								<b-form-file
									v-model="file"
									class="form-control"
									plain
								></b-form-file>
							</b-col>
						</b-row>

						<br />
						<b-col sm="6">
							<b-button type="buat" variant="success" @click="tambahGedung()"
								>Buat</b-button
							>
							<b-button type="batal" variant="outline-success">
								Batal
							</b-button>
						</b-col>
					</b-form>
				</b-container>
				<!-- </div>    -->
			</b-card>
		</div>
		<br />
		<br />
		<br />
		<br />
		<LiveChatBtn />
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
		name: "addGedung",
		components: {
			Navbar,
			Sidebar,
			Breadcrumb,
			FooterComponent,
			LiveChatBtn,
		},
		data() {
			return {
				form: {
					name: "",
					location: "",
					price: "",
					description: "",
					gedung: null,
					file: null,
					checked: [],
					longitude: 0,
					latitude: 0,
				},
				gedungs: [{ text: "Masukkan Jenis Gedung", value: null }],
				show: true,
			};
		},
		mounted() {
			let url = process.env.VUE_APP_APILink + "/gedungs/jenis-gedungs";
			axios.get(url).then((res) => {
				// console.log(res.data);
				res.data.forEach((element) => {
					this.gedungs.push({
						text: element.jenis,
						value: element.id,
					});
				});
			});
		},
		methods: {
			onSubmit(event) {
				event.preventDefault();
				alert(JSON.stringify(this.form));
			},
			onReset(event) {
				event.preventDefault();
				// Reset our form values
				this.form.name = "";
				this.form.location = "";
				this.form.price = "";
				this.form.description = "";
				this.form.gedung = null;
				this.show = false;
				this.$nextTick(() => {
					this.show = true;
				});
			},
			tambahGedung() {
				let url = process.env.VUE_APP_APILink + "/gedungs";
				// console.log(this.form);
				axios
					.post(url, this.form)
					.then((response) => {
						console.log(response);
						this.$router.push("kelolaGedung");
					})
					.catch((error) => {
						console.log(error);
						alert("ada yang salah");
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
		margin-bottom: 40px;
		margin-top: 0px;
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
		width: 90px;
		height: 31px;
		margin: 10px !important;
		padding: 0 !important;
	}

	.btn-outline-success {
		width: 90px;
		height: 31px;
		margin: 10px !important;
		padding: 0 !important;
	}
	.footer {
  position: fixed !important;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
