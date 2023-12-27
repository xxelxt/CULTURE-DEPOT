import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

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

// Xuất hàm test để có thể nhập vào từ tệp HTML




// Export the test function to make it accessible globally

  const dbRef = ref(getDatabase(firebaseApp));
  get(child(dbRef, 'user')).then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log('No data available');
    }
  }).catch((error) => {
    console.error(error);
  });
