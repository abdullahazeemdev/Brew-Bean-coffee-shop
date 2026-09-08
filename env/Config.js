// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm64Uv8iuYa1ybXNoxvDJ9AjYD505Z3C4",
  authDomain: "brew-bean-coffee.firebaseapp.com",
  projectId: "brew-bean-coffee",
  storageBucket: "brew-bean-coffee.firebasestorage.app",
  messagingSenderId: "634062801330",
  appId: "1:634062801330:web:5052579464108df9cefcab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app