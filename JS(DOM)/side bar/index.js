// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : !important > id > classe > baliseHtml


const sidebar = document.getElementById("side-bar");
const content = document.querySelector(".content");

// let ouvert = false;

// btn.addEventListener('click', () => {
//     if (ouvert == false){
//         sidebar.style.left = "0px";
//         ouvert = true;
//     } else {
//         sidebar.style.left = "-230px";
//         ouvert = false;
//     } 
// })

// content.addEventListener('click', () => {
//     sidebar.style.left = "-230px";
//     ouvert = false;
// })


btn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
})

content.addEventListener('click', () => {
    sidebar.classList.remove('active');
})