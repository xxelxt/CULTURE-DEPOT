function search(){
    const search = () =>{
        const searchbox = document.getElementById("search").value.toUpperCase();
        const storitem = document.getElementsByClassName("col col-lg-9")
        const product = document.querySelectorAll(".course_card list_layout")
        const pname = document.getElementsByTagName("a")

        for(var i = 0;i<pname.length;i++){
            let mathch = product[i].getElementsByTagName("a")[0];
            console.log(mathch);
        }
        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1 ){
                product[i].style.display = "";
            }else{
                product[i].computedStyleMap.display ="none";
            }
        }

    }
}
// đang lỗi 
function search2(){
    const search2 = () =>{
        const searchbox = document.getElementById("search").value.toUpperCase();
        const storitem = document.getElementsByClassName("col col-lg-9")
        const product = document.querySelectorAll(".course_card list_layout")
        const pname = document.getElementsByClassName("1")

        for(var i = 0;i<pname.length;i++){
            let mathch = product[i].getElementsByClassName("1")[0].innerHTML;
            console.log(mathch);
        }
        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > -1 ){
                product[i].style.display = "";
            }else{
                product[i].computedStyleMap.display ="none";
            }
        }
    }
}