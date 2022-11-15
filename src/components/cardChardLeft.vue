<!-- @format -->

<template>
	<div class="chatLeft">
		<img class="rounded-profile" src="../assets/user.png" alt="foto orang" />
		<div class="chat-text">{{ massage }}</div>
	</div>
</template>
<script>
	export default {
		name: "cardCharLeft",
		props: ["massage"],
	};
</script>
<style scoped>
	.chatLeft {
		display: flex;
		flex-wrap: nowrap;
		align-items: flex-start;
		margin-top: 2%;
		justify-content: flex-start;
		align-content: center;
	}
	.rounded-profile {
		max-width: 32px;
		max-height: 32px;
		margin-right: 2%;
	}
	.chat-text {
		padding: 10px;
		border-radius: 10px;
		background-color: bisque;
		text-align: initial;
	}
</style>
