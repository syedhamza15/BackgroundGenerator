var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("body");
var randomcolorbtn = document.getElementById("random");


function settingRandomBgColor(){
    color1.value = getRandomColor();
    color2.value = getRandomColor();
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
}
function backgroundGradientCode(){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}
backgroundGradientCode();
function setGradient(){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    backgroundGradientCode();
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

randomcolorbtn.addEventListener("click", settingRandomBgColor)
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

