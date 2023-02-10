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
			<p>Kelola Daftar Gedung</p>
			<b-table-simple striped hover>
				<b-thead>
					<b-tr>
						<!-- <b-th>No</b-th> -->
						<b-th>ID Gedung</b-th>
						<b-th>Jenis Gedung</b-th>
						<b-th>Lokasi</b-th>
						<b-th>Deskripsi</b-th>
						<b-th>Harga</b-th>
						<b-th>Permintaan</b-th>
					</b-tr>
				</b-thead>
				<b-tbody>
					<b-tr v-for="(gedung, id) in gedungs" :key="id">
						<!-- <b-td>ini nomor </b-td> -->
						<b-td>{{ gedung.id }}</b-td>
						<b-td>{{ gedung.name }}</b-td>
						<b-td>{{ gedung.location }}</b-td>
						<b-td>{{ gedung.description }}</b-td>
						<b-td>Rp. {{ gedung.price }} /Day</b-td>
						<b-td>
							<b-button
								variant="success"
								@click="editGedung(gedung.id), $bvModal.show('modalEdit')"
								>Edit</b-button
							>

							<b-button
								id="show-btn"
								@click="$bvModal.show('modalDelete' + gedung.id)"
								variant="danger"
								>Hapus</b-button
							>
							<!-- Modal delete -->
							<b-modal
								hide-footer
								hide-header
								centered
								:id="'modalDelete' + gedung.id"
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
										@click="$bvModal.hide('modalDelete' + gedung.id)"
										>Batal</b-button
									>
									<b-button
										class="mt-3"
										variant="danger"
										@click="
											deleteGedung(gedung.id),
												$bvModal.hide('modalDelete' + gedung.id)
										"
									>
										Ok
									</b-button>
								</div>
							</b-modal>
						</b-td>
					</b-tr>
					<!-- Modal Edit -->
					<b-modal
						id="modalEdit"
						:key="edit.id"
						hide-footer
						hide-header
						size="xl"
					>
						<h3>Edit Gedung</h3>
						<br />
						<b-form>
							<b-form-group>
								<b-form-label>ID Gedung</b-form-label>
								<b-form-input
									type="text"
									v-model="edit.id"
									disabled
								></b-form-input>
							</b-form-group>
							<b-form-group>
								<b-form-label>Jenis Gedung</b-form-label>
								<b-form-input
									type="text"
									v-model="edit.jenisgedung"
								></b-form-input>
							</b-form-group>
							<b-form-group>
								<b-form-label>Nama Gedung</b-form-label>
								<b-form-input type="text" v-model="edit.name"></b-form-input>
							</b-form-group>
							<b-form-group>
								<b-form-label>Lokasi</b-form-label>
								<b-form-input
									type="text"
									v-model="edit.Location"
								></b-form-input>
							</b-form-group>
							<b-form-group>
								<b-form-label>Latitude</b-form-label>
								<b-form-input
									type="text"
									v-model="edit.latitude"
								></b-form-input>
							</b-form-group>
							<b-form-group>
								<b-form-label>Longitude</b-form-label>
								<b-form-input
									type="text"
									v-model="edit.longitude"
								></b-form-input>
							</b-form-group>
							<b-form-group>
								<b-form-label>Harga</b-form-label>
								<b-form-input type="text" v-model="edit.price"></b-form-input>
							</b-form-group>
							<b-form-group>
								<b-form-label>Deskripsi</b-form-label>
								<b-form-textarea v-model="edit.description"></b-form-textarea>
							</b-form-group>
						</b-form>
						<br />
						<b-button
							variant="primary"
							block
							@click="updateGedung(edit.id), $bvModal.hide('modalEdit')"
						>
							Simpan</b-button
						>
						<b-button
							variant="success"
							block
							@click="$bvModal.hide('modalEdit')"
							>Batal</b-button
						>
					</b-modal>
				</b-tbody>
			</b-table-simple>
		</b-card>

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
	import { BModal, VBModal } from "bootstrap-vue";
	import axios from "axios";

	export default {
		name: "kelolaGedung",
		components: {
			Navbar,
			Sidebar,
			Breadcrumb,
			FooterComponent,
			LiveChatBtn,
			BModal,
		},
		directives: { "b-modal": VBModal },
		data() {
			return {
				gedungs: [],
				edit: {
					id: 0,
					name: "",
					Location: "",
					price: "",
					latitude: "",
					longitude: "",
					description: "",
					reviews: [],
					nearby: [],
					jenisgedung: [],
				},

				loading: true,
				modalDelete: false,
				modalEdit: false,
			};
		},
		mounted() {
			this.fetchGedung();
		},
		methods: {
			fetchGedung() {
				let url = process.env.VUE_APP_APILink + "/gedungs";
				// console.log(url);
				axios
					.get(url)
					.then((response) => {
						// console.log(response);
						if (response.status === 200) {
							this.gedungs = response.data;
							this.loading = false;
							console.log(this.gedungs);
						}
					})
					.catch((error) => {
						console.log(error);
						this.loading = false;
					});
			},
			async editGedung(id) {
				let url = process.env.VUE_APP_APILink + "/gedungs/" + id;
				await axios
					.get(url)
					.then((response) => {
						// console.log(response.data);
						response.data.forEach((item) => {
							this.edit = {
								id: item.id,
								name: item.name,
								Location: item.location,
								price: item.price,
								latitude: item.latitude,
								longitude: item.longitude,
								description: item.description,
								reviews: item.reviews_id,
								nearby: item.id_nearby,
								jenisgedung: item.id_jenis,
							};
						});
						console.log(this.edit);
						// this.fetchGedung()
					})
					.catch((error) => {
						console.log(error);
					});
			},
			updateGedung(id) {
				// console.log(id);
				let url = process.env.VUE_APP_APILink + "/gedungs/" + id;
				axios
					.put(url, {
						id_booking: this.edit.id,
						name: this.edit.name,
						location: this.edit.Location,
						price: this.edit.price,
						latitude: this.edit.latitude,
						longitude: this.edit.longitude,
						description: this.edit.description,
						reviews: this.edit.reviews,
						nearby: this.edit.nearby,
						Jenis: this.edit.jenisgedung,
					})
					.then((response) => {
						this.fetchGedung();
						console.log(response);
						this.modalEdit = false;
					})
					.catch((error) => {
						console.log(error);
					});
			},
			deleteGedung(id) {
				let url = process.env.VUE_APP_APILink + "/gedungs/";
				// console.log(url + id);
				axios
					.delete(url + id)
					.then((response) => {
						this.fetchGedung(response);
						console.log(id);
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
