// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBITOh0lfnQiWfHY44XzMUsgRWTUDMq8uE",
  authDomain: "musafir-hotel.firebaseapp.com",
  projectId: "musafir-hotel",
  storageBucket: "musafir-hotel.appspot.com",
  messagingSenderId: "240384814438",
  appId: "1:240384814438:web:98f768c53ecc49774caca7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);

export default auth;