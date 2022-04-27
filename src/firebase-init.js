// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrV-z3qbPaEsDTBduyPjiix1-DpiQH-Qk",
    authDomain: "gadget-freak-jwt.firebaseapp.com",
    projectId: "gadget-freak-jwt",
    storageBucket: "gadget-freak-jwt.appspot.com",
    messagingSenderId: "670119565556",
    appId: "1:670119565556:web:1e181e40300f4f7b0c26a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth