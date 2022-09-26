<!-- @format -->

<template>
	<div class="popup-review">
		<div class="popup-inner">
			<div class="action-popup">
				<div class="font-popup">Apakah Anda Yakin ?</div>
				<div></div>
				<div></div>
			</div>
			<div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "popupUlasan",
		props: ["idUlasan", "action"],
	};
</script>
<style scoped>
	.popup-review {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 99;
		background-color: rgba(0, 0, 0, 0.2);

		display: flex;
		align-items: center;
		justify-content: center;
	}
	.popup-review .popup-inner {
		background: #fff;
		padding: 32px;
	}
	.action-popup {
		display: flex;
	}
	.font-popup {
		color: red;
		font-weight: 800;
		font-size: x-large;
	}
</style>

<!-- <script>
	export default {
		props: ["TogglePopup"],
	};
</script> -->
