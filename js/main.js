document.addEventListener("DOMContentLoaded", function(){
    var links = document.querySelectorAll(".navbar-nav li a:not([href='#'])");
    for(var x=0; x<links.length; x++){
       links[x].onclick = function(){
          document.querySelector("button.navbar-toggler").click();
       }
    }
 });