// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMtSS1q8jdQigJmFMVPfbYPcm3pTfhTM8",
  authDomain: "small-ecommerce-b3cc1.firebaseapp.com",
  projectId: "small-ecommerce-b3cc1",
  storageBucket: "small-ecommerce-b3cc1.appspot.com",
  messagingSenderId: "78171211766",
  appId: "1:78171211766:web:f929b6470b2c30bb27a9d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 