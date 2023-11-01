
let body = document.getElementById('darkmode');
let style = window.getComputedStyle(body);
var color = style.getPropertyValue('background-color');


let element = document.getElementById("chk");
const chk = document.getElementById("chk");

console.log(color);
  chk.addEventListener("click", () => {
      if (color = "rgb(15, 150, 174)") {
        darkmode.style.backgroundColor = ("rgb(239, 125, 0)"); //lar
        console.log("lar");
        
      } else {
        darkmode.style.backgroundColor = ("rgb(15, 150, 174)"); //az
        console.log("az");
      }
    var color = "rgb(239, 125, 0)";
    console.log(color);    
  });
  