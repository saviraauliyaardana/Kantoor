<!-- @format -->

<template>
	<div class="displayLeft">
		<b-form-input type="text" placeholder="Cari Nama"></b-form-input>
		<div class="position-display">
			<div v-for="index in 10" :key="index"><CardProfile /></div>
		</div>
	</div>
</template>
<script>
	import CardProfile from "./cardChatProfile.vue";
	export default {
		name: "displayLiveChatLeft",
		components: {
			CardProfile,
		},
	};
</script>
<style scoped>
	.position-display {
		margin-left: 2%;
		margin-top: 2%;
		max-height: 60vh;
		overflow: auto;
	}
	/* width */
	::-webkit-scrollbar {
		width: 10px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px #1cab59;
		border-radius: 10px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: #1cab59;
		border-radius: 5px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: grey;
	}

	.card {
		display: flexbox;
		margin-right: 25px;
		margin-left: 25px;
		margin-bottom: 25px;
	}
</style>
