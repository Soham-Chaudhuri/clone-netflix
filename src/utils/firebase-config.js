import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBKNeadPn73Zpfy9KKQu7ftzLFao3bNMII",
  authDomain: "react-netflix-clone-ab53b.firebaseapp.com",
  projectId: "react-netflix-clone-ab53b",
  storageBucket: "react-netflix-clone-ab53b.appspot.com",
  messagingSenderId: "433202367845",
  appId: "1:433202367845:web:d095fa31590437bd40258c",
  measurementId: "G-K9VP86CJWN"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth=getAuth(app);