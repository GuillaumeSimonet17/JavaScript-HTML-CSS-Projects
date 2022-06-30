const cardsGrid = document.querySelector(".cards-grid");
const cards = document.querySelector(".card ");
const body = document.querySelector('body');

const loadContent = async () => {
    const res = await fetch("https://picsum.photos/v2/list");
    const data = await res.json();
    createCards(data);

    // console.log(data[1].download_url);
}
loadContent();

const createCards = data => {
    let cardsList = "";
    let i;
    for(i = 0; i < data.length; i++) {
        const newCard = 
        `
        <div class="card">
            <img src=${data[i].download_url} class="skeleton-anim"></img>
            <div class="content">
                <h3 class="card-title"></h3>
                <p class="card-text"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quae consequuntur rerum !</p>
                <p class="card-text">orem ipsum dolor sit amet</p>
            </div>
        </div>
        `

        cardsList += newCard;
    }
    cardsGrid.innerHTML = cardsList;
    // body.classList.add("loaded");


}