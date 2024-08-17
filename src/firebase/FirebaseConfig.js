// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBOzbw3uYu_mjvpO17cSyfa7VzMkXGJDE0",
  authDomain: "smartcanteen-d5e1f.firebaseapp.com",
  projectId: "smartcanteen-d5e1f",
  storageBucket: "smartcanteen-d5e1f.appspot.com",
  messagingSenderId: "730364651625",
  appId: "1:730364651625:web:feda17db24783906201af8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB,auth};