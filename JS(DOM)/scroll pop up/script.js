// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours

let dejavu = false;

window.addEventListener('scroll', () => {
    
    // let maxHeight = document.body.offsetHeight - window.innerHeight;     le max scroll value de la page variant selon le width de la page. Donc quand le mec arrive tout à la fin (donc if(window.scrollY == maxHeight)) => tu m'affiche la popup. Mais dans ce cas là on va garder qu'une seule variable (scrollValue) puisqu'elle est plus précise, enfaite on va dire que quand le mec arrive presque tout à la fin on affiche l'img.
    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;


    if (window.scrollY < 10) {
        navbar.style.height = "90px";
    } else navbar.style.height = "40px";

    if(scrollValue > 0.50) {
        imgImprovise.style.opacity = 1;
        imgImprovise.style.transform = "none";
    }


    if(scrollValue > 0.98 && dejavu == false){
        popup.style.opacity = 1;
        popup.style.transform = "none";
        dejavu = true;
    }

})



closeBtn.addEventListener('click', () => {
    popup.style.opacity = 0;
    popup.style.transform = "translate(400px)";
}) 

