// Créer 3 ronds de tailles différentes (dont un qui remplacera la souris)

// Ajouter un événement sur la fenetre (window) puis animer la position de ces ronds (top, left injecter "e")

// S'assurer que les liens sont clickables

// Donner un style de transparence aux 2 plus gros ronds (mix-blend-mode)




const mousemove = document.querySelectorAll('.mouse');

window.addEventListener('mousemove', (e) => {
    mousemove.forEach((mouse) => {
        mouse.style.top = e.pageY + "px"
        mouse.style.left = e.pageX + "px"
    })
})




// window.addEventListener('mousemove', (e) => {
//     mouse1.style.top = e.pageY + "px";
//     mouse1.style.left = e.pageX + "px";

//     mouse2.style.top = e.pageY + "px";
//     mouse2.style.left = e.pageX + "px";

//     mouse3.style.top = e.pageY + "px";
//     mouse3.style.left = e.pageX + "px";
// })
