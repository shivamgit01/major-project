// Import the functions you need from the SDKs you need
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

// import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHc36vxy2g2PRfglUxIZ961SzAIL07i-M",
  authDomain: "reactnativefirebase-924c6.firebaseapp.com",
  projectId: "reactnativefirebase-924c6",
  storageBucket: "reactnativefirebase-924c6.appspot.com",
  messagingSenderId: "217158187755",
  appId: "1:217158187755:web:43022aa87e3757b1771cae",
};

// Initialize Firebase
let app;

app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
