/** @format */

export var review = [
	{
		ID_Pengguna: "001",
		Nama: "Deden Ahmad",
		Nomor_HP: "089456789101",
		ID_Email: "deden11@gmail.com",
		Nama_Gedung: "Hotel Meeting Room",
		Ulasan_Pengguna: "Hotel Sangat Baik Pelayanannya",
	},
	{
		ID_Pengguna: "002",
		Nama: "Moel Joko",
		Nomor_HP: "089456789102",
		ID_Email: "moel101@gmail.com ",
		Nama_Gedung: "Auditorium",
		Ulasan_Pengguna: "Ruangan Sangat Rapih dan Bersih",
	},
	{
		ID_Pengguna: "003",
		Nama: "Kurnia Dewi",
		Nomor_HP: "089456789103",
		ID_Email: "kurnia11@gmail.com ",
		Nama_Gedung: "Gedung Serba Guna",
		Ulasan_Pengguna: "Gedung sangat bersih dan segar udaranya",
	},
	{
		ID_Pengguna: "004",
		Nama: "Dety Armida",
		Nomor_HP: "089456789104",
		ID_Email: "armida1@gmail.com ",
		Nama_Gedung: "Hotel Meeting Room",
	},
	{
		ID_Pengguna: "005",
		Nama: "Rivandi",
		Nomor_HP: "089456789105",
		ID_Email: "rivan11@gmail.com",
		Nama_Gedung: "Auditorium",
		Ulasan_Pengguna: "Ruangan Sangat Rapih dan Bersih",
	},
	{
		ID_Pengguna: "006",
		Nama: "Fahri",
		Nomor_HP: "089456789106",
		ID_Email: "fahri21@gmail.com",
		Nama_Gedung: "Gedung Serba Guna",
		Ulasan_Pengguna: "Gedung sangat bersih dan segar udaranya",
	},
];

export let chat = {
	dhskahdaskjodklsa: {
		nama: "Muslikin MD",
		orderid: "",
		chatMassage: {
			123213: {
				time: "23 Desember 2022",
				massage: "Halo saya ada pesanan nih",
				stastus: 0,
				from: "user",
			},
			3211233: {
				time: "23 Desember 2022",
				massage: "Halo saya ada pesanan nih",
				stastus: 0,
				from: "admin",
			},
		},
	},
	asdsadasdsadsaweqw: {
		nama: "mamang MD",
		orderid: "",
		chatMassage: {
			123213: {
				time: "23 Desember 2022",
				massage: "Halo saya ada pesanan nih",
				stastus: 0,
				from: "user",
			},
			3211233: {
				time: "23 Desember 2022",
				massage: "Halo saya ada pesanan nih",
				stastus: 0,
				from: "admin",
			},
		},
	},
};
import { app } from "@/common/firebase";
import { getDatabase, ref, set } from "firebase/database";
export const firebaseUpdate = () => {
	const db = getDatabase(app);
	set(ref(db, "chat/"), {
		dhskahdaskjodklsa: {
			nama: "Muslikin MD",
			orderid: "",
			chatMassage: {
				123213: {
					time: "23 Desember 2022",
					massage: "Halo saya ada pesanan nih",
					stastus: 0,
					from: "user",
				},
				3211233: {
					time: "23 Desember 2022",
					massage: "Halo saya ada pesanan nih",
					stastus: 0,
					from: "admin",
				},
			},
		},
		asdsadasdsadsaweqw: {
			nama: "mamang MD",
			orderid: "",
			chatMassage: {
				123213: {
					time: "23 Desember 2022",
					massage: "Halo saya ada pesanan nih",
					stastus: 0,
					from: "user",
				},
				3211233: {
					time: "23 Desember 2022",
					massage: "Halo saya ada pesanan nih",
					stastus: 0,
					from: "admin",
				},
			},
		},
	});
};
