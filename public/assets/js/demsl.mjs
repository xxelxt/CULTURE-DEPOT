

import { initializeApp } from "firebase/app";

import { getDatabase, ref, get } from "firebase/database";
function dem(){
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

async function countUsers() {
    try {
      const db = getDatabase();
      const usersRef = ref(db, 'users');
      const snapshot = await get(usersRef);
  
      if (snapshot.exists()) {
        const userCount = Object.keys(snapshot.val()).length;
        console.log(`Số lượng người trong cơ sở dữ liệu: ${userCount}`);
        return userCount; // Return the count
      } else {
        console.log('Không có dữ liệu người trong cơ sở dữ liệu.');
        return 0; // Return 0 if no data
      }
    } catch (error) {
      console.error('Lỗi khi đếm số lượng người:', error);
      throw error; // Re-throw the error
    }
  }
  
  var m;
  countUsers().then(result => {
    m = result;
    console.log(m);
  }).catch(error => {
    console.error('Lỗi:', error);
  });

  return m;
}
dem()