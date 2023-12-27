
var { getDatabase, ref, child, get } = require('firebase/database')


var {getDatabase} = require('firebase/database')

function test(){
const dbRef = ref(getDatabase());

get(child(dbRef, `khachhang`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
}

