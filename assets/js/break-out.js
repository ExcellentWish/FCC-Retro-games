const grid = document.querySelector('.b-grid');
const blockWidth = 100;
const blockHeight = 20;
const boardWidth = 470;

const ballDiameter = 20;
let xDirection = 2;
let yDirection = 2;

let timerId;


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
  drawBall()
  checkForCollision()
}
 timerId = setInterval(moveBall, 30);
 
 // check for collision
 function checkForCollision(){
   // check for the wall collision
   if(ballCurrentPostion[0] >= (boardWidth - ballDiameter)){
     changeDirection();
   }
 }

 function changeDirection(){
      if(xDirection === 2 && yDirection == 2){
        yDirection = -2;
        return;
      }
      //if()
 }