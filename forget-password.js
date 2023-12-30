import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// Import the functions you need from the SDKs you need


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
    appId: "1:120255369519:web:0640d6ae60ee20f40291da",
    measurementId: "G-K7T1XKHQ7F"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
var m = 0;
try {
    const db = getDatabase();
    const usersRef = ref(db, 'customer forgot password');
    const snapshot = await get(usersRef);

    if (snapshot.exists()) {
        const userCount = Object.keys(snapshot.val()).length;
        console.log(`Số lượng người trong cơ sở dữ liệu: ${userCount}`);
        console.log(userCount);
        m = userCount;
    } else {
        console.log('Không có dữ liệu người trong cơ sở dữ liệu.');

    }
} catch (error) {
    console.error('Lỗi khi đếm số lượng người:', error);
    throw error; // Re-throw the error
}


// Lấy số lượng người và lưu vào biến
let userCountVariable;
console.log(m)



function writeUserData(email, sothutu) {

    const db = getDatabase();
    set(ref(db, 'customer forgot password/' + sothutu), {
        gmail: email,

    });
}
function forget_pass(){



    console.log('xong')
    // function luu(){
    const email = document.getElementById("email").value;
    const sluong = m;

    console.log(email)
    console.log(sluong)
    writeUserData(email, sluong + 1)
    alert("Nhận tin từ chúng mình nhé"+email)
    


    console.log('xong2')
}