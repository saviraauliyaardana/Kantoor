/** @format */

import axios from "axios";
export const getReview = () => {
	axios
		.get("http://server.greskit.com:8080/admin/review")
		.then(res => {
			// console.log(res.data.data);
			const dataReview = res.data.data || null;
			if (dataReview == null) return false;

			return dataReview;
			// console.log(review);
		})
		.catch(err => {
			console.log(err);
			return false;
		});
};
export const getGedung = () => {
	axios
		.get("http://server.greskit.com:8080/admin/gedungs")
		.then(res => {
			// console.log(res.data.data);
			const dataGedung = res.data.data || null;
			if (dataGedung == null) return false;

			return dataGedung;
			// console.log(review);
		})
		.catch(err => {
			console.log(err);
			return false;
		});
};
