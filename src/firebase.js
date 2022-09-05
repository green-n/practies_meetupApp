// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore} from  "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE8AH5fCdBt4lwYrz3g3OLICDt4ZMAZz4",
  authDomain: "meeting-app-54fed.firebaseapp.com",
  projectId: "meeting-app-54fed",
  storageBucket: "meeting-app-54fed.appspot.com",
  messagingSenderId: "718203379082",
  appId: "1:718203379082:web:59ba3b4d735c7a66b2bc73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)