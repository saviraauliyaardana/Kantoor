<!-- @format -->

<template>
	<div class="chatRight">
		<div class="chat-text">Halo saya ada pesanan nih</div>
		<img class="rounded-profile" src="../assets/user.png" alt="foto orang" />
	</div>
</template>
<script>
	export default {
		name: "cardCharRight",
	};
</script>
<style scoped>
	.chatRight {
		display: flex;
		flex-wrap: nowrap;
		align-items: flex-start;
		margin-top: 2%;
		align-content: flex-end;
		justify-content: flex-end;
	}
	.rounded-profile {
		max-width: 32px;
		max-height: 32px;
		margin-left: 2%;
	}
	.chat-text {
		padding: 10px;
		border-radius: 10px;
		background-color: burlywood;
		text-align: initial;
	}
</style>
