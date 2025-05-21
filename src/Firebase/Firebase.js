// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Mfrpr9tfrDETy7UP1WJCZAG7C9FgEG0",
  authDomain: "my-garden-website.firebaseapp.com",
  projectId: "my-garden-website",
  storageBucket: "my-garden-website.firebasestorage.app",
  messagingSenderId: "748149511320",
  appId: "1:748149511320:web:82abb85402f99d85372ced"
};

// Initialize Firebase


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
