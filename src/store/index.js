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
			axios
				.post("http://server.greskit.com:8080/login", {
					email: store.state.email,
					password: store.state.password,
				})
				.then(response => {
					// console.log(response.data);

					localStorage.setItem("token", response.data.token);
					localStorage.setItem("email", response.data.email);
					localStorage.setItem("id", response.data.id_user);
					store.commit("getStatusLogin", response.data.status);
					if (response.data.status == true) {
						router.push({ path: "/beranda" });
					}
				})
				.catch(error => {
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