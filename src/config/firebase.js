// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider  } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnuKPVEsuhRmZutGMQCaH0Ezaz6AQdg00",
  authDomain: "linkedin-inno.firebaseapp.com",
  projectId: "linkedin-inno",
  storageBucket: "linkedin-inno.appspot.com",
  messagingSenderId: "28436538217",
  appId: "1:28436538217:web:4a9967a5e36002e19d93f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
// const storage = getStorage(firebaseApp, "gs://my-custom-bucket");
const storage = getStorage();


export { auth, storage, provider, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export default db;