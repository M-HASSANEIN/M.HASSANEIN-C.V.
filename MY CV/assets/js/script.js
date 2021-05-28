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
      window.addEventListener("click",offclick) ; 
    /////page when loading 
      window.addEventListener("load", () => {
        document.querySelector("body").classList.add("loaded"); 
       });
       
/////print function 
      /*  $("#btnPrint").live("click", function () {
       
        var divContents = $("#dvContainer").html();
        var printWindow = window.open('', '', 'height=800,width=800');
        printWindow.document.write('<html><head><title>DIV Contents</title>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(divContents);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    });
 */





});     