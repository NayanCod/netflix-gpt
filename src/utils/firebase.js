// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDipY44MdHoktOqZ3fdLoc8dMjufWrePlA",
  authDomain: "netflixgpt-e9a9a.firebaseapp.com",
  projectId: "netflixgpt-e9a9a",
  storageBucket: "netflixgpt-e9a9a.appspot.com",
  messagingSenderId: "452750646048",
  appId: "1:452750646048:web:04960486d8d5d9be739545",
  measurementId: "G-VQ122S3FTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();