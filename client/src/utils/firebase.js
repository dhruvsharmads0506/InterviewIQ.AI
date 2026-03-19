
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "interviewiq-661cf.firebaseapp.com",
  projectId: "interviewiq-661cf",
  storageBucket: "interviewiq-661cf.firebasestorage.app",
  messagingSenderId: "853378428696",
  appId: "1:853378428696:web:4c693f6e9e3776e452b86d"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}