import { initializeApp } from "firebase/app";

import { getDatabase, ref, set } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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

const firebaseApp = initializeApp(firebaseConfig);
function writeUserData(Id, matkhau, email,sothutu) {
  
  const db = getDatabase();
  set(ref(db, 'users/'+sothutu), {
    id:Id,
    matkhau: matkhau,
    email: email,
    
  });
}
function save(){
  const matkhau = document.getElementById("matkhau").value;
        const email =document.getElementById("email").value;
        const sluong = 5;
        console.log(matkhau)
        console.log(email)
        console.log(sluong)
       
  
}
writeUserData("11","ngovanminh11","NVM11@gmai.com",11)

console.log('xong')

const email = "NVM11@gmai.comf";
const password = "ngovanminh11";
const auth = getAuth();
createUserWithEmailAndPassword(auth, email,password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;

    console.log("xong")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log('error')
    // ..
  });
