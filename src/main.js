/** @format */

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import { BootstrapVue, BootstrapVueIcons, IconsPlugin } from "bootstrap-vue";
import axios from "axios";
import VueHtmlToPaper from "vue-html-to-paper";

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'https://mocki.io/v1/eaad110a-08c3-477f-a37b-583945c3b475';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
Vue.use(BootstrapVueIcons);
Vue.config.productionTip = false;
const options = {
	name: "_blank",
	specs: ["fullscreen=yes", "titlebar=yes", "scrollbars=yes"],
	styles: [
		"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css",
		"https://unpkg.com/kidlat-css/css/kidlat.css",
	],
	timeout: 1000, // default timeout before the print window appears
	autoClose: false, // if false, the window will not close after printing
	windowTitle: window.document.title, // override the window title
};

Vue.use(VueHtmlToPaper, options);
new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount("#app");
