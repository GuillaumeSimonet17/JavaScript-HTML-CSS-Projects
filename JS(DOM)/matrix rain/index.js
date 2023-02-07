
const lettreMaker = () => {
    const lettre = document.createElement("span");
    const span = document.querySelectorAll(".lettre");

    
    document.body.appendChild(lettre);
    lettre.classList.add('lettre');
    
    span.forEach((lettre) => {
    lettre.innerHTML = `w a k e u p n e o y o u a r e i n t h e m a t r i x w a k e u p n e o y o u a r e i n t h e m a t r i x`
  })  
    
    lettre.style.top = Math.random()*100 + 50 + "%";
    lettre.style.left = Math.random()*200 + "%";
    
    lettre.style.setProperty("--left", Math.random() * 100 + "%");
    
    setTimeout(() => {
        lettre.remove();
    }, 10000)
}

setInterval(lettreMaker, 1000);

