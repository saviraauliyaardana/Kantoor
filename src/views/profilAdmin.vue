<!-- @format -->

<template>
	<div class="Admin">
		<Navbar />
		<Sidebar />
		<br />
		<br />
		<br />
		<Breadcrumb />
		<b-card>
			<p>Perbarui Password Admin</p>
			<b-container fluid class="row mb-3">
				<b-row class="my-1">
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Password Lama:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="password"
							size="sm"
							v-model="form.passwordLama"
							placeholder="Masukkan Password Lama"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Password Baru:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="password"
							size="sm"
							v-model="form.passwordBaru"
							placeholder="Masukkan Password Baru"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row mb-3">
						<label for="input-small" class="text1"
							><strong>Konfirmasi Password Baru:</strong></label
						>
					</b-col>
					<b-col sm="10">
						<b-form-input
							id="input-small"
							type="password"
							size="sm"
							v-model="form.passwordBaru2"
							placeholder="Konfirmasi Password Baru"
						></b-form-input>
					</b-col>
					<b-col sm="2" class="row"> </b-col>
					<b-col sm="2">
						<button
							@click="simpanPassword"
							class="btn btn-success float-right mt-3"
						>
							Ubah
						</button>
						<button class="btn btn-success float-right mt-3">Batal</button>
					</b-col>
				</b-row>
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
	import axios from "axios";

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
				form: [],
				loading: false,
			};
		},
		methods: {
			simpanPassword() {
				if (this.form.passwordBaru === this.form.passwordBaru2) {
					var url =
						"http://server.greskit.com:8080/admin/profile/" +
							localStorage.getItem("id") || 64;
					axios
						.put(url, {
							password: this.form.passwordLama,
							newpassword: this.form.passwordBaru,
							Confirmpassword: this.form.passwordBaru2,
						})
						.then(res => {
							console.log(res);
							alert("Berhasil Merubah data");
						})
						.catch(err => {
							console.log(err);
						});
				}
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