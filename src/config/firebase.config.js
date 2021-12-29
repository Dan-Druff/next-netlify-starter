// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbz5yuhJelJmIIdlS5-3hnt15tFN2ETSY",
  authDomain: "next-firebase-90774.firebaseapp.com",
  projectId: "next-firebase-90774",
  storageBucket: "next-firebase-90774.appspot.com",
  messagingSenderId: "909423628545",
  appId: "1:909423628545:web:203497461178b833e48b00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();