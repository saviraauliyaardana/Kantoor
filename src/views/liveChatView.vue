<!-- @format -->

<template>
	<KeepAlive>
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
	</KeepAlive>
</template>

<script>
	import Navbar from "@/components/navbarComponent.vue";
	import Sidebar from "@/components/sidebarComponent.vue";
	import FooterComponent from "@/components/footerComponent.vue";
	import Breadcrumb from "../components/breadcrumb.vue";
	import RightChat from "@/components/displayLiveChatRight.vue";
	import LeftChat from "@/components/displayLiveChatLeft.vue";
	import { app } from "@/common/firebase";
	import { getDatabase, ref, onValue } from "firebase/database";
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
			};
		},

		async mounted() {
			const database = getDatabase(app);
			const starCountRef = ref(database, "chat/");
			onValue(starCountRef, (snapshot) => {
				if (snapshot.exists()) {
					localStorage.setItem("chat", JSON.stringify(snapshot.val()));
				} else alert("Tidak ada pesan");
			});
		},
	};
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
