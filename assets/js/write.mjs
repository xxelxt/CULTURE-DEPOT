import { initializeApp } from "firebase/app";

import { getDatabase, ref, set } from "firebase/database";

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

const firebaseApp = initializeApp(firebaseConfig);




// function writeUserData(id,email,mk) {
//   const db = getDatabase();
//   set(ref(db, 'user',id), {
    

//     email: email,
//     mk:mk,
//   });
// }
// writeUserData('khachhang3','hagiabi@gmail.com','123456789')

// console.log("xong")

import { getDatabase, ref, set } from "firebase/database";

function writeUserData(userId, name, email) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
    
  });
}
writeUserData("1","hagiabao","hagiabao980@gmai.com")
console.log('xong')