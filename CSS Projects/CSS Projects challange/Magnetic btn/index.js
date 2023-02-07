const btns = document.querySelectorAll(".btn");
console.log(btns);

btns.forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
        const pos = btn.getBoundingClientRect();
        const x = e.pageX - pos.left - pos.width /2;
        const y = e.pageY - pos.top - pos.height /2;

        btn.children[0].style.transform = "translate(" + x *0.3 + "px, " + y *0.5 + "px)";
    })
})
btns.forEach((btn) => {
    btn.addEventListener("mouseout", (e) => {
        btn.children[0].style.transform = "translate(0px, 0px)";
    })
})