// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsWs_LFgZrNTd5Xbp3kGhbf968ei-9o-k",
  authDomain: "react-curso-sg.firebaseapp.com",
  projectId: "react-curso-sg",
  storageBucket: "react-curso-sg.firebasestorage.app",
  messagingSenderId: "1016559244026",
  appId: "1:1016559244026:web:30987324bce76dcefb6f43"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth ( FirebaseApp );
export const FirebaseDB = getFirestore (FirebaseApp);