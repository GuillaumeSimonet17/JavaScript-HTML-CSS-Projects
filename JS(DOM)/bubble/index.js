const compteur = document.querySelector('h3');
let i = 0;

const bubbleMaker = () => {


    const bubble = document.createElement('span');
    document.body.appendChild(bubble);
    bubble.classList.add('bubble');
    
    const size = Math.random()*200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    

    bubble.style.top = Math.random()*100 + 50 + "%";
    bubble.style.left = Math.random()*100 + "%";
    
    const plusMinus = Math.random() > 0 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

    bubble.addEventListener('click', () => {
        i++;
        compteur.textContent = i;
        bubble.remove();
        console.log(i);
    })
    
    setTimeout(() => {
        bubble.remove();
    }, 20000)
}


setInterval(bubbleMaker, 400);
