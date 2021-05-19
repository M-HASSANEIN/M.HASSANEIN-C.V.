let lag= document.querySelector(".dropbtn");
let myDropdown= document.getElementById("myDropdown");



function onclick() 
{
 myDropdown.classList.toggle("show");  
}

function offclick(event) 
{
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) 
    {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
      }
    }
  }
}




//FUNCTION UPLOAD AFTER PAGE LOADED
document.addEventListener("DOMContentLoaded" , function()
{ 
      lag.addEventListener("click",onclick);
    // Close the dropdown if the user clicks outside of it
      window.addEventListener("click",offclick)  
});     