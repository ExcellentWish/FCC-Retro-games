const grid = document.querySelector('.b-grid');
const blockWidth = 100;
const blockHeight = 20;

const boardHeight = 300
const boardWidth = 560;

const scoreDisplay = document.querySelector('#score');

const ballDiameter = 20;
let xDirection = -2;
let yDirection = 2;

let timerId;
let score = 0;


const userStart = [230,10];
let currentPostion = userStart;

const ballStart= [270,40]
let ballCurrentPostion =ballStart;


//create block
class Block{
    constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis]
    this.topLeft = [xAxis, yAxis + blockHeight]
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
}
// all my blocks
const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),

    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),

    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210),
   
]



// draw my block

function addBlocks(){
 for(let i = 0; i < blocks.length; i++){

    const block = document.createElement('div');
    block.classList.add('block');
    block.style.left = blocks[i].bottomLeft[0] + 'px';
    block.style.bottom = blocks[i].bottomLeft[1] + 'px';
    grid.appendChild(block);
  }
}
addBlocks();

//add user
const user = document.createElement('div');
user.classList.add('user');
drawUser();
grid.appendChild(user);


// draw the User
function drawUser(){
  user.style.left =  currentPostion[0] + 'px';
  user.style.bottom = currentPostion[1] + 'px';
}


// move user
function moveUser(event){
  switch(event.key){
    case 'ArrowLeft':
      if(currentPostion[0] > 0){
      currentPostion[0] -= 10;
      drawUser();
      }
    break;
  }
  switch(event.key){
    case 'ArrowRight':
      if(currentPostion[0] < 470){
      currentPostion[0] += 10;
       drawUser();
      }
    break;
  }
  switch(event.key){
    case 'ArrowUp':
    currentPostion[1] += 1;
    drawUser();
    break;
  }
  switch(event.key){
    case 'ArrowDown':
    currentPostion[1] -= 1;
    drawUser();
    break;
  }
}

document.addEventListener('keydown',moveUser);


// draw the ball
function drawBall(){
  ball.style.left = ballCurrentPostion[0] +'px';
  ball.style.bottom =  ballCurrentPostion[1] +'px'
}

// add ball

const ball = document.createElement('div');
ball.classList.add('ball');
drawBall();
grid.appendChild(ball);

//move the ball

function moveBall(){
  ballCurrentPostion[0] += xDirection;
  ballCurrentPostion[1] += yDirection;
  drawBall();
  checkForCollision();
}
 timerId = setInterval(moveBall, 30);
 
 // check for collision
 function checkForCollision(){
// check for block collision
for(let i = 0; i < blocks.length; i++){
  if(
    (ballCurrentPostion[0] > blocks[i].bottomLeft[0] && ballCurrentPostion[0] < blocks[i].bottomRight[0]) && 
    ((ballCurrentPostion[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPostion[1] < blocks[i].topLeft[1]	)
  ){
    const allBlocks = Array.from(document.querySelectorAll('.block'))
    allBlocks[i].classList.remove('block');
    blocks.splice(i, 1)
    changeDirection();
    score++
    scoreDisplay.innerHTML = score;
  }
}

//get user collision
if(
  (ballCurrentPostion[0] > currentPostion[0] && ballCurrentPostion[0] < currentPostion[0] + blockWidth) &&
  (ballCurrentPostion[1] > currentPostion[1] && ballCurrentPostion[1] < currentPostion[1] + blockHeight)
){
  changeDirection();
}

   // check for the wall collision
   if(ballCurrentPostion[0] >= (boardWidth - ballDiameter) ||
    ballCurrentPostion[1] >= (boardHeight - ballDiameter) || 
     (ballCurrentPostion[0] <= 0) || (ballCurrentPostion[1] < 0)){
     changeDirection();
   }
   //check for win
   if(blocks.length === 0){
    clearInterval(timerId);
    scoreDisplay.innerHTML = 'You Win!!';
   }

   //check for game over 
   if (ballCurrentPostion[1] <= 0){
     clearInterval(timerId);
     scoreDisplay.innerHTML = 'You lose';
     document.removeEventListener('keydown', moveUser)

   }
 }

 function changeDirection(){
      if(xDirection === 2 && yDirection == 2){
        yDirection = -2;
        return;
      }
      if(xDirection === 2 && yDirection === -2){
        xDirection = -2;
        return;
      }
      if(xDirection === -2 && yDirection === -2){
      yDirection = 2;
        return;
      }
      if(xDirection === -2 && yDirection === 2){
        xDirection = 2;
        return;
      }
 }