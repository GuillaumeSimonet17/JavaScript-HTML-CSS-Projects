const bg = document.querySelector(".bg");
const girl = document.querySelector(".girl");
const text = document.querySelector("h1");
const pos = document.documentElement;

pos.addEventListener("mousemove", (e) => {
    pos.style.setProperty('--x', e.clientX + "px");
})


// window.addEventListener("mousemove", () => {
//     let valueY = window.scrollY;
//     let valueX = window.scrollX;
//     console.log("Y = " + valueY);
//     console.log("X = " + valueX);
//     console.log(window);
//     // bg.style.transform = "scale(1.2)"
// })