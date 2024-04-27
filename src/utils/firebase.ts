// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-clothes-app.firebaseapp.com",
  projectId: "next-clothes-app",
  storageBucket: "next-clothes-app.appspot.com",
  messagingSenderId: "617582420169",
  appId: "1:617582420169:web:fa8c7a3e31049da8172d18",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
