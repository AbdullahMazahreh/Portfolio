var x = document.getElementsByClassName("a-bars");
var y = document.getElementsByClassName("a-hamburger-menu");
function afun1() {
  if (y[0].style.transform == "translate(0%)") {
    y[0].style.transform = "translate(-100%)";
  } else {
    y[0].style.transform = "translate(0%)";
  }
}
x[0].addEventListener("click", afun1);
var z = document.getElementsByClassName("a-leftside");
function afun2() {
  y[0].style.transform = "translate(-100%)";
}
z[0].addEventListener("click", afun2);
