let lag= document.getElementById("lang");
let cv = document.querySelector(".cv");

console.log(cv)


function onclick() {
    document.getElementById("myDropdown").classList.toggle("show");  
}
function rembtn() {
    /* openDropdown.classList.remove('show'); */
    /* document.getElementById("myDropdown").classList.remove("show");  */
}

//FUNCTION UPLOAD AFTER PAGE LOADED
document.addEventListener("DOMContentLoaded" , function()
{ 
      lag.addEventListener("click",onclick);
      cv.addEventListener("click",rembtn);
});     