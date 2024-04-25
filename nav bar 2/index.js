let menuList = document.getElementById("menuList") 
let bilist = document.getElementById("bilist")
bilist.addEventListener("click", marvel);
function marvel(){
 if(menuList.style.display == "none")
 {  menuList.style.display = "block"
 }else{
     menuList.style.display = "none";
 }
}