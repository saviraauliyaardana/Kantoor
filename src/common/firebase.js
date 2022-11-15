// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAHyv6C7OLLNNK00znBpIaPjLc1sp-gogI",
	authDomain: "kantoor-c910f.firebaseapp.com",
	databaseURL:
		"https://kantoor-c910f-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "kantoor-c910f",
	storageBucket: "kantoor-c910f.appspot.com",
	messagingSenderId: "39468065635",
	appId: "1:39468065635:web:e5313c57e919ff4182e956",
	measurementId: "G-H4DH2QRBK8",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
