import { getDatabase } from "firebase/database";
function thongtindangky(){
    const email = document.getElementById('email').value;
    const mk= document.getElementById('matkhau').value;
    const xacnhanmk = document.getElementById('xacnhanmk').value;

    console.log(email)
    console.log(mk)
    console.log(xacnhanmk)
    

    const database = getDatabase();
    



}