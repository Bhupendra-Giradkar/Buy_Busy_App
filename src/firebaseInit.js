// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-69d0exq0lBZae7cDI83t1ypY7p5z8YQ",
  authDomain: "buyshop2-7d14b.firebaseapp.com",
  projectId: "buyshop2-7d14b",
  storageBucket: "buyshop2-7d14b.appspot.com",
  messagingSenderId: "690943483324",
  appId: "1:690943483324:web:61bc5e72116c779ec05fb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);