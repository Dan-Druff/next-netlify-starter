import { initializeApp, getApps } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

let firebaseApp

if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig)
}

export const app = firebaseApp
export const auth = getAuth(app)
export const db = getFirestore(app);
