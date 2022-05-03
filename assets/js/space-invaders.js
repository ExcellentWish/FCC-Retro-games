const grid = document.querySelector('.space-grid');
let currentShooterInvaderIndex = 202;
let width = 15;
let direction = 1;
let invadersId = null;
let goingRight = true;
const resultDisplay = document.querySelector('#invader-result')


for(let i = 0; i < 225; i++){
    const square = document.createElement('div');
    grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll('.space-grid div'))

const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
    
]

function draw(){
    for(let y = 0; y < alienInvaders.length; y++){
        squares[alienInvaders[y]].classList.add('invader');
    }
}

draw();

function remove(){
    for(let y = 0; y < alienInvaders.length; y++){
        squares[alienInvaders[y]].classList.remove('invader');
    }
}


squares[currentShooterInvaderIndex].classList.add('shooter');

function moveShooter(event){
    squares[currentShooterInvaderIndex].classList.remove('shooter')
    switch(event.key){
        case 'ArrowLeft':
            if(currentShooterInvaderIndex % width !== 0) currentShooterInvaderIndex -=1;
            break;
        case 'ArrowRight' :
            if(currentShooterInvaderIndex % width < width -1) currentShooterInvaderIndex +=1;
            break;    
    }
    squares[currentShooterInvaderIndex].classList.add('shooter');
}
document.addEventListener('keydown', moveShooter )

function moveInvaders(){
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length -1] % width === width -1;
    remove();

    if(rightEdge && goingRight){
        for(let i = 0; i < alienInvaders.length; i++)
        alienInvaders[i] += width +1;
        direction = -1;
        goingRight = false;
    }

    if( leftEdge && !goingRight){
        for(let i = 0; i < alienInvaders.length; i++)
        alienInvaders[i] += width -1;
        direction = 1;
        goingRight = true;
    }

    for(let x = 0; x <alienInvaders.length; x++){
        alienInvaders[x] += direction;
    }
    draw()

    if(squares[currentShooterInvaderIndex].classList.contains('invader', 'shooter')){
        resultDisplay.innerHTML = 'GAME OVER';
        clearInterval(invadersId);
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        if(alienInvaders[i] > (squares.length)) {
          resultsDisplay.innerHTML = 'GAME OVER'
          clearInterval(invadersId)
        }
    }
}

invadersId = setInterval(moveInvaders, 500);
