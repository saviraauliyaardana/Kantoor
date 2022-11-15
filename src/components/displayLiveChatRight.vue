<!-- @format -->

<template>
	<div class="displayRight">
		<div class="chat-view">
			<Receptionis v-show="listMassage.orderid" />
			<div v-for="index in listMassage" :key="index.id">
				<ChatRight :massage="index.massage" v-if="index.from != 'user'" />
				<ChatLeft v-else :massage="index.massage" />
			</div>
		</div>
		<div class="form-chat">
			<b-form-input
				v-model="massage"
				type="text"
				placeholder="Tulis Pesan"
			></b-form-input>
			<b-icon
				class="h3 mb-2"
				style="margin-left: 2%"
				variant="success"
				icon="messenger"
				@click="saveToFirebase"
			></b-icon>
		</div>
	</div>
</template>
<script>
	import Receptionis from "./chatReceptionis.vue";
	import ChatRight from "./cardChatRight.vue";
	import ChatLeft from "./cardChardLeft.vue";
	import { getDatabase, ref, set } from "firebase/database";
	import { app } from "@/common/firebase";
	export default {
		name: "displayLiveChatRight",
		components: {
			ChatRight,
			ChatLeft,
			Receptionis,
		},
		data() {
			return {
				listMassage: [],
				massage: "",
			};
		},
		mounted() {
			window.setInterval(() => {
				const chatget = localStorage.getItem("OpenMassage");
				const dataMassage = JSON.parse(localStorage.getItem(chatget));
				this.listMassage = dataMassage;
				// console.log(this.listMassage);
			}, 500);
		},
		methods: {
			saveToFirebase() {
				const db = getDatabase(app);
				let id = localStorage.getItem("idMassage");
				let massage = this.massage;
				let x = Math.random() * 1000000000;
				set(ref(db, "chat/" + id + "/chatMassage/" + parseInt(x)), {
					from: "admin",
					massage: massage,
					status: "0",
					time: Date.now(),
				})
					.then(() => {
						location.reload();
					})
					.catch((error) => {
						console.log(error);
					});
			},
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
