// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt7zOugvU_nbW8xxyEZuO14jdD_kD-Hbw",
  authDomain: "lawn-shaper.firebaseapp.com",
  projectId: "lawn-shaper",
  storageBucket: "lawn-shaper.firebasestorage.app",
  messagingSenderId: "262618123289",
  appId: "1:262618123289:web:052a6f218becb5ef086e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;