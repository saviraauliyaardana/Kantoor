<!-- @format -->

<template>
	<div class="displayRight">
		<div class="chat-view">
			<Receptionis />
			<ChatRight />
			<ChatLeft />
			<ChatRight />
			<ChatLeft />
			<ChatRight />
			<ChatLeft />
			<ChatRight />
			<ChatLeft />
			<ChatRight />
		</div>
		<div class="form-chat">
			<b-form-input type="text" placeholder="Tulis Pesan"></b-form-input>
			<b-icon
				class="h3 mb-2"
				style="margin-left: 2%"
				variant="success"
				icon="messenger"
			></b-icon>
		</div>
	</div>
</template>
<script>
	import Receptionis from "./chatReceptionis.vue";
	import ChatRight from "./cardChatRight.vue";
	import ChatLeft from "./cardChardLeft.vue";
	export default {
		name: "displayLiveChatRight",
		components: {
			ChatRight,
			ChatLeft,
			Receptionis,
		},
	};
</script>
<style scoped>
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
	.chat-view {
		overflow: auto;
	}
	.displayRight {
		display: flex;
		height: 65vh;
		flex-direction: column;
		justify-content: flex-end;
		align-items: stretch;
		align-content: center;
	}
	.form-chat {
		background-color: white;
		display: flex;
		padding: 1%;
		align-items: center;
		flex-wrap: nowrap;
		flex-direction: row;
		justify-content: space-around;
		justify-items: self-end;
	}
</style>
