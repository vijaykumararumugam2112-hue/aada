import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFCZX91VxIlI0Pb_4AsgsSI9gK4OajNXc",
  authDomain: "aada-website.firebaseapp.com",
  projectId: "aada-website",
  storageBucket: "aada-website.firebasestorage.app",
  messagingSenderId: "569598869343",
  appId: "1:569598869343:web:a229ab81b8f115c5cd40ea",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);