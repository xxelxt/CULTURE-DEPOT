// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARzRypH50ZB-cpTH0RX6JL0awYFFuwZ_o",
  authDomain: "bookstore-90d32.firebaseapp.com",
  databaseURL: "https://bookstore-90d32-default-rtdb.firebaseio.com",
  projectId: "bookstore-90d32",
  storageBucket: "bookstore-90d32.appspot.com",
  messagingSenderId: "561950763179",
  appId: "1:561950763179:web:3bb096bda928d412c32fee",
  measurementId: "G-C72YHG4DVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
