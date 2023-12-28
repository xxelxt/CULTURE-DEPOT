// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBej9lF7GVt0_XTC_04YhbX2nTpzYTFbkA",
  authDomain: "bookstore-group1.firebaseapp.com",
  databaseURL: "https://bookstore-group1-default-rtdb.firebaseio.com",
  projectId: "bookstore-group1",
  storageBucket: "bookstore-group1.appspot.com",
  messagingSenderId: "120255369519",
  appId: "1:120255369519:web:5f29ed02bc55f63b0291da",
  measurementId: "G-30HG5R98GF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);