// let stars = document.getElementById("stars") ;
let moon = document.getElementById("moon") ;
let mountainBehind = document.getElementById("mountain-behind") ;
let mountainFront = document.getElementById("mountain-front") ;
let text = document.getElementById("text") ;
let btn = document.querySelector(".btn") ;
let header = document.querySelector(".header");

moon.style.top = 100 + "px";
btn.style.marginTop = -100 + "px";
mountainFront.style.bottom= "0"
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    // stars.style.left = value * 0.25 + "px";
    moon.style.top = 100 + value * 1.05 + "px";
    mountainBehind.style.top = value * -0.1 + "px";
    // mountainFront.style.top = value * 0 + "px";
    text.style.marginRight = value * 4 + "px";
    text.style.marginTop = value * 0.5 + "px";
    btn.style.marginTop = -100 + value * 1.5 + "px";
    header.style.top = value * 0.5 + "px";
})