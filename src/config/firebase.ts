import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSC7XkvQNvyFSutVJyFIF7G3kuyLh9LI8",
  authDomain: "auth-app-f49dc.firebaseapp.com",
  projectId: "auth-app-f49dc",
  storageBucket: "auth-app-f49dc.appspot.com",
  messagingSenderId: "680848196504",
  appId: "1:680848196504:web:a382aa4406dc41be68e1ed",
  measurementId: "G-YJEJ7LKJ22",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
