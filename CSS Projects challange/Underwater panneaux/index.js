const compteur = document.querySelector('h3');
const aTrigger = document.querySelector("a");
const form = document.querySelector(".form")
const formContainer = document.querySelector(".form-container")
const btnVar = document.querySelector("#btn-var")
const signupBtn = document.querySelector('#signup')
const loginBtn = document.querySelector('#login')

let i = 0;

// const bubbleMaker = () => {
        
        
//         const bubble = document.createElement('span');
//         document.body.appendChild(bubble);
//         bubble.classList.add('bubble');
        
//         const size = Math.random()*200 + 100 + "px";
//         bubble.style.height = size;
//         bubble.style.width = size;
        
        
//         bubble.style.top = Math.random()*100 + 50 + "%";
//         bubble.style.left = Math.random()*100 + "%";
//         bubble.style.background = "white";
        
//         const plusMinus = Math.random() > 0 ? 1 : -1;
//         bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
        
//         bubble.addEventListener('click', () => {
//             i++;
//             compteur.textContent = i;
//             bubble.remove();
//             console.log(i);
//         })
        
//         setTimeout(() => {
//             bubble.remove();
//         }, 20000)
// }
    

// aTrigger.addEventListener('click', () => {
//     setInterval(bubbleMaker, 700);
// })




loginBtn.addEventListener('click', () => {
    form.style.transform = "translateX(150%)"
    btnVar.innerHTML = "Login"
    formContainer.innerHTML = 
    `
    <input type="text" placeholder="Email">
    <input type="text" placeholder="Password">
    `
})
signupBtn.addEventListener('click', () => {
    form.style.transform = "translateX(0%)"
    btnVar.innerHTML = "Sign Up"
    formContainer.innerHTML = 
    `
    <input type="text" placeholder="First Name">
    <input type="text" placeholder="Last Name">
    <input type="text" placeholder="Email">
    <input type="text" placeholder="Password">
    `
})


window.onload = () => {
    const tab_switchers = document.querySelectorAll("[data-switcher]");
    for(let i = 0; i < tab_switchers.length; i++){
        const tab_switcher = tab_switchers[i];
        const page_id = tab_switcher.dataset.tab;
        
        tab_switcher.addEventListener('click', () => {
            console.log(page_id);
            // document.querySelector('.tab.active').classList.remove("active")
            tab_switcher.parentNode.classList.add('active')

            switchPage(page_id)
        })
    }
}
function switchPage(page_id){
    const currentPage = document.querySelector(".page.active");
    currentPage.classList.remove("active");

    const nextPage = document.querySelector(`.page[data-page="${page_id}"]`);
    nextPage.classList.add("active")
}