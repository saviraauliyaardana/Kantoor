<!-- @format -->

<template>
	<div class="chatReceptionis">
		<div class="left-side">
			<img
				class="foto-receptionis"
				src="https://images.unsplash.com/photo-1564078516393-cf04bd966897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
				alt="Receptionis"
			/>
			<div class="text-view">
				<hp>Hotel California</hp>
				<p style="color: #1cab59">Rp. 1.000.000</p>
				<star-rating
					star-size="18"
					show-rating="false"
					v-model="rating"
					read-only="true"
				/>
				<p>ID Gedung : 01</p>
			</div>
		</div>
		<div class="right-side">
			<!-- <div>
				<b-icon icon="tablet-landscape-fill" />
			</div> -->
			<div>
				<b-button
					v-b-modal.modal-center
					@click="showModal"
					size="sm"
					variant="success"
					>Terima</b-button
				>
				<b-button
					v-b-modal.modal-center
					@click="toggleModal"
					style="margin-left: 0.5rem"
					size="sm"
					variant="danger"
					>Batalkan</b-button
				>

				<b-modal id="modal-1" centered>
					<b-icon icon="exclamation-triangle-fill" variant="warning" />
					<div class="d-block">Apakah Anda yakin ?</div>
					<div>Anda akan menerima pesanannya</div>
				</b-modal>
			</div>
		</div>
	</div>
</template>
<script>
	import StarRating from "vue-star-rating";
	export default {
		name: "chatReceptionis",
		components: {
			StarRating,
		},
		methods: {
			showModal() {
				this.$root.$emit("bv::show::modal", "modal-1", "#btnShow");
			},
			hideModal() {
				this.$root.$emit("bv::hide::modal", "modal-1", "#btnShow");
			},
			toggleModal() {
				this.$root.$emit("bv::toggle::modal", "modal-1", "#btnToggle");
			},
		},
	};
</script>
<style scoped>
	.chatReceptionis {
		margin: 2%;
		padding: 1%;
		display: flex;
		border-radius: 10px;
		background-color: burlywood;
		flex-direction: row;
		flex-wrap: nowrap;
		align-content: center;
		justify-content: space-between;
		align-items: baseline;
	}
	.foto-receptionis {
		border-radius: 10px;
		width: 180px;
		height: 80px;
		object-fit: cover;
	}
	.text-view {
		margin-left: 2%;
		font-weight: 800;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		align-content: flex-start;
		align-items: flex-start;
		justify-content: space-around;
	}
	.left-side {
		text-align: left;
		font-size: small;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		align-content: inherit;
		align-content: space-between;
	}
	.right-side {
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		align-content: space-between;
	}
</style>
