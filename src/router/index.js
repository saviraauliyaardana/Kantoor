/** @format */

import Vue from "vue";
import VueRouter from "vue-router";
import loginView from "../views/loginView.vue";
import berandaView from "../views/berandaView.vue";
import addGedung from "../views/addGedung.vue";
import kelolaGedung from "../views/kelolaGedung.vue";
import daftarPengguna from "../views/daftarPengguna.vue";
import daftarUlasan from "../views/daftarUlasan.vue";
import addPesanan from "../views/addPesanan.vue";
import kelolaPesanan from "../views/kelolaPesanan.vue";
// import addPromosi from "../views/addPromosi.vue";
import kelolaPromosi from "../views/kelolaPromosi.vue";
import profilAdmin from "../views/profilAdmin.vue";
import liveChatView from "../views/liveChatView.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "login",
		component: loginView,
	},
	{
		path: "/beranda",
		name: "",
		component: berandaView,
	},
	{
		path: "/addGedung",
		name: "Pembuatan Daftar Gedung",
		component: addGedung,
	},
	{
		path: "/kelolaGedung",
		name: "Kelola Gedung",
		component: kelolaGedung,
	},
	{
		path: "/daftarPengguna",
		name: "Daftar Pengguna",
		component: daftarPengguna,
	},
	{
		path: "/daftarUlasan",
		name: "Daftar Ulasan",
		component: daftarUlasan,
	},
	{
		path: "/addPesanan",
		name: "Pembuatan Daftar Pesanan",
		component: addPesanan,
	},
	{
		path: "/kelolaPesanan",
		name: "Kelola Pesanan",
		component: kelolaPesanan,
	},

	{
		path: "/kelolaPromosi",
		name: "Kelola Promosi",
		component: kelolaPromosi,
	},
	{
		path: "/profilAdmin",
		name: "Profil Admin",
		component: profilAdmin,
	},
	{
		path: "/liveChatView",
		name: "Live Chat view",
		component: liveChatView,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

// router.beforeEach((to, from, next) => {});

export default router;
