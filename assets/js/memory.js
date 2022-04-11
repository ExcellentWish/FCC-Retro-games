let cardArry = [{ name:'fries',
                  img:'assets/images/fries.png'
                } ,
            {
                name:'cheeseburger',
                img: 'assets/images/cheeseburger.png'
            },
            {
                name:'hotdog',
                img:'assets/images/hotdog.png'
            },
            {
                name:'ice-cream',
                img:'assets/images/ice-cream.png'
            },
            {
                name:'milkshake',
                img:'assets/images/milkshake.png'
            },
            {
                name:'pizza',
                img:'assets/images/pizza.png'
            },

            { name:'fries',
                  img:'assets/images/fries.png'
                } ,
            {
                name:'cheeseburger',
                img: 'assets/images/cheeseburger.png'
            },
            {
                name:'hotdog',
                img:'assets/images/hotdog.png'
            },
            {
                name:'ice-cream',
                img:'assets/images/ice-cream.png'
            },
            {
                name:'milkshake',
                img:'assets/images/milkshake.png'
            },
            {
                name:'pizza',
                img:'assets/images/pizza.png'
            }
        
        ];

cardArry.sort(() => 0.5 - Math.random()); // Shortcut to shuffle an array

let gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#results');
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard(){
    for (let i = 0; i < cardArry.length; i++){
        let card = document.createElement('img');
        card.setAttribute('src','assets/images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);

        console.log(card,i)
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('#grid img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
console.log(cards);
    console.log("check for a match!!")
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','assets/images/blank.png');
        cards[optionTwoId].setAttribute('src','assets/images/blank.png');
        alert('You Have clicked the same image!');
    }

    if(cardsChosen[0] == cardsChosen[1]){
        alert('You found a match');
       cards[optionOneId].setAttribute('src','assets/images/white.png');
       cards[optionTwoId].setAttribute('src','assets/images/white.png');
       cards[optionOneId].removeEventListener('click', flipCard);
       cards[optionTwoId].removeEventListener('click', flipCard);
       
       cardsWon.push(cardsChosen);
    }else {
        cards[optionOneId].setAttribute('src','assets/images/blank.png');
        cards[optionTwoId].setAttribute('src','assets/images/blank.png');
        alert('Sorry try again')
    }
    resultDisplay.textContent = cardsWon.length
 cardsChosen = [];
 cardsChosenIds = [];
    
    if(cardsWon.length == cardArry.length/2){
        resultDisplay.innerHTML = 'Congratulations you found them all!'
    }

}

function flipCard(){
    let cardId = this.getAttribute('data-id')
    console.log(cardArry[cardId].name);
    cardsChosen.push(cardArry[cardId].name);
    cardsChosenIds.push(cardId);
console.log(cardsChosen);
console.log(cardsChosenIds);

    this.setAttribute('src', cardArry[cardId].img);
    if(cardsChosen.length === 2){
        setTimeout(checkMatch , 500)
    }

    console.log(cardArry);
    console.log('clicked', cardId);
    console.log(cardsChosen);
}

console.log(gridDisplay);
console.log(cardArry);
