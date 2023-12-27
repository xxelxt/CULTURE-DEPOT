const timkiem =() =>{
    const thamsotimkiem = document.getElementById("search-item").value.toUpperCase();
    if (thamsotimkiem) {
        const searchValue = thamsotimkiem.value.toUpperCase();
        // Tiếp tục xử lý dữ liệu...
    } else {
        console.error("Không tìm thấy phần tử với ID 'search-item'");
        return;
    }
    const thongtinsanpham = document.getElementById("thongtinsanpham")
    const thongtinchitietsanpham = document.querySelectorAll(".course_card list_layout");
    // Lấy div có class "item_content"
    const tensanpham = document.getElementsByClassName("tensanpham")
    for(var i=0;i <tensanpham.length;i++){
        let match = thongtinchitietsanpham[i].getElementsByClassName("tensanpham")[0];

        if(match){
            let textvaLue = match.textContent || match.innerHTML

            if(textvaLue.toUpperCase().indexOf(thamsotimkiem)>-1){
                thongtinchitietsanpham[i].style.display = "";
            }else{
                thongtinchitietsanpham[i].style.display ="none";
            }
        }

    }
}
