import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHNNWd4beJg3onJqjIGM0csQ_papIANa4",
  authDomain: "fire-contact-app-e03f3.firebaseapp.com",
  projectId: "fire-contact-app-e03f3",
  storageBucket: "fire-contact-app-e03f3.appspot.com",
  messagingSenderId: "759110307639",
  appId: "1:759110307639:web:d02267c1d474050455d4b2",
  measurementId: "G-TGWCNSKGLG",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
