import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0ZldKeHc3fqLLLsFMK-W9qlXAMEBJQT8",
  authDomain: "small-com.firebaseapp.com",
  projectId: "small-com",
  storageBucket: "small-com.appspot.com",
  messagingSenderId: "336603040866",
  appId: "1:336603040866:web:002860a9e69820de02d53b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
