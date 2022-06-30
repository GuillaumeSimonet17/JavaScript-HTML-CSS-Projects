const btn = document.querySelector(".toggle");
const body = document.body;
const p = document.querySelector(".p");

btn.addEventListener('click', () => {
    if(btn.checked){
        body.style.background = "rgb(51, 51, 51)";
        p.innerHTML=`Dark Mode`;

    }else {
        body.style.background = "white";
        p.innerHTML=`Clear Mode`;


    }
})