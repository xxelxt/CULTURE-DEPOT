import { initializeApp } from "firebase/app";

import { getDatabase, ref, set, get } from "firebase/database";

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
writeUserData("5","ngovanminh","NVM@gmai.com",5)
console.log('xong')


