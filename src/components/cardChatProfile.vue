<!-- @format -->

<template>
	<div
		class="cardProfile"
		@click="savingData(nama)"
		:class="{ backgroundChange: actived }"
	>
		<div class="vertical">
			<div class="kiri-card">
				<img
					class="rounded-profile"
					src="../assets/user.png"
					alt="foto orang"
				/>
				<div class="margin-left-side">
					<h6>{{ nama }}</h6>
					<p>{{ textDisplay }}</p>
				</div>
			</div>
			<!-- <b-badge variant="danger">2</b-badge> -->
		</div>
		<hr />
	</div>
</template>
<script>
	import { textSplit } from "../common/textDecorator";
	// @ is an alias to /src

	export default {
		name: "cardProfile",
		props: ["actived", "nama", "text", "id"],
		data() {
			return {
				textDisplay: "none",
				aktif: true,
			};
		},
		methods: {
			savingData(name) {
				localStorage.setItem("idMassage", this.id);
				localStorage.setItem("OpenMassage", name);
				// console.log(name);
				// console.log("worked");
			},
		},
		async mounted() {
			localStorage.setItem(this.nama, JSON.stringify(this.text));
			Object.values(this.text).forEach((element) => {
				if (element.from === "user")
					this.textDisplay = textSplit(element.massage);
			});
		},
	};
</script>
<style scoped>
	.backgroundChange {
		background-color: #b3e3c8;
		border-radius: 5px;
	}
	p {
		margin: 0;
	}
	.badge {
		background-color: #b3e3c8;
		border-radius: 50%;
		margin-right: 2%;
	}
	.kiri-card {
		display: flex;
		align-items: flex-start;
		margin: 2%;
	}
	.cardProfile {
		text-align: start;
	}
	.cardProfile:active {
		background-color: aquamarine;
	}
	.rounded-profile {
		max-width: 42px;
		max-height: 42px;
	}
	.vertical {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	h6 {
		font-weight: 600;
	}
	.margin-left-side {
		margin-left: 3%;
	}
</style>
