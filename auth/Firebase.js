// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWiVrUSPYjHK2Je_ntkBFmD0BfDZj_gNU",
  authDomain: "healthd-7977e.firebaseapp.com",
  projectId: "healthd-7977e",
  storageBucket: "healthd-7977e.appspot.com",
  messagingSenderId: "403484802298",
  appId: "1:403484802298:web:49b58f4d49c2c644da9d43",
  measurementId: "G-2L0PQ8D3FV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// console.log(app);
// let analytics = getAnalytics(app);
// if (app.name && typeof window !== "undefined") {
//   analytics = getAnalytics(app);
// }
export const authentication = getAuth(app);
