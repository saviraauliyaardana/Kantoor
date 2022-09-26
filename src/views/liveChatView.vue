<!-- @format -->

<template>
	<div class="liveChat">
		<Navbar />
		<Sidebar />
		<br />
		<br />
		<br />
		<Breadcrumb />
		<b-card>
			<b-row cols="2" align-content="start">
				<b-col><LeftChat /></b-col>
				<b-col><RightChat /></b-col>
			</b-row>
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
	import RightChat from "@/components/displayLiveChatRight.vue";
	import LeftChat from "@/components/displayLiveChatLeft.vue";
	import axios from "axios";

	export default {
		name: "profilAdmin",
		components: {
			Navbar,
			Sidebar,
			FooterComponent,
			Breadcrumb,
			RightChat,
			LeftChat,
		},
		data() {
			return {
				connection: null,
				item: [],
			};
		},
		mounted() {
			axios
			.get("https://gauri-golang-chat.herokuapp.com/getAllMessages").then(response => {
				var data = response.Messages;
				data.forEach(item => {
					this.item.push({
						userName: item.userName,
						body: item.body,
						timestamp: item.timestamp,
					});
					})
				});
				},};
			// console.log("start connection");
			// const protocol = window.location.protocol.includes("https")
			// 	? "wss"
			// 	: "ws";
			// this.connection = new WebSocket(
			// 	`${protocol}://gauri-golang-chat.herokuapp.com`
			// );
			// this.connection.onopen = event => {
			// 	console.log(event);
			// 	console.log("Success");
			// };
			// this.connection.onmessage = event => {
			// 	console.log(event);
			// };},
	
</script>

<style scoped>
	.card {
		display: flexbox;
		margin-right: 25px;
		margin-left: 25px;
		margin-bottom: 25px;
	}
	.liveChat {
background-color: #e5e5e5;
	}
	.footer {
		position: fixed !important;
		bottom: 0;
		left: 0;
		width: 100%;
	}
</style>
