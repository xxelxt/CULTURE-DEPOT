import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBej9lF7GVt0_XTC_04YhbX2nTpzYTFbkA",
  authDomain: "bookstore-group1.firebaseapp.com",
  databaseURL: "https://bookstore-group1-default-rtdb.firebaseio.com",
  projectId: "bookstore-group1",
  storageBucket: "bookstore-group1.appspot.com",
  messagingSenderId: "120255369519",
  appId: "1:120255369519:web:0640d6ae60ee20f40291da",
  measurementId: "G-K7T1XKHQ7F"
};

const firebaseApp = initializeApp(firebaseConfig);

// Xuất hàm test để có thể nhập vào từ tệp HTML

const dbRef = ref(getDatabase(firebaseApp));
get(child(dbRef, 'users')).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log('No data available');
  }
}).catch((error) => {
  console.error(error);
});

get(child(dbRef, 'customer forgot password')).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log('No data available');
  }
}).catch((error) => {
  console.error(error);
});

get(child(dbRef, 'save user information in contact information')).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log('No data available');
  }
}).catch((error) => {
  console.error(error);
});