/** @format */

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "@/router";

Vue.use(router);
Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
	state: {
		users: [],
		status: "",
		email: "",
		password: "",
	},
	getters: {},
	mutations: {
		getStatusLogin(state, payload) {
			state.users = payload;
		},
		updateEmail(state, payload) {
			state.email = payload;
		},
		updatePassword(state, payload) {
			state.password = payload;
		},
	},
	actions: {
		loginAdmin(store) {
			let url = process.env.VUE_APP_APILink + "/login";
			console.log(url);
			axios
				.post(url, {
					email: store.state.email,
					password: store.state.password,
				})
				.then((response) => {
					console.log(response.data);
					response.data.map((item) => {
						localStorage.setItem("token", item.token);
						localStorage.setItem("email", item.email);
						localStorage.setItem("uid", item.id);
						store.commit("getStatusLogin", item.status);
					});
					if (response.data.status == true) {
						location.reload();
					}
					location.reload();
				})
				.catch((error) => {
					console.log(error);
					if (error.response.status == 401) {
						alert("Email atau Password Salah");
					}
					this.errored = true;
				});
		},
	},
	modules: {},
});
