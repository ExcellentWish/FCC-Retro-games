const timeLeftDisplay = document.getElementById('time-left');
const resultDisplay = document.getElementById('result');
const startPauseButton = document.getElementById('start-pause-button');
const squares = document.querySelectorAll('.frogger-grid div');

const logsLeft = document.querySelectorAll('.log-left')
const logsRight = document.querySelectorAll('.log-right')

const carsLeft = document.querySelectorAll('.car-left');
const carsRight = document.querySelectorAll('.car-right');

let currentTime = 20;
let timerId = null;

let currentIndex = 76; //starting point
const width = 9;


// move our frog. need to add event listeners
function moveFrog(event) {
    squares[currentIndex].classList.remove('frog');

    switch (event.key) {
        case 'ArrowLeft':
            if (currentIndex % width !== 0) currentIndex -= 1; // if current index width is not =  0 it will not move off the sqaure to a new div on the left
            break;

        case 'ArrowRight':
            if (currentIndex % width < width - 1) currentIndex += 1;
            break;

        case 'ArrowUp':
            if (currentIndex - width >= 0) currentIndex -= width
            break;

        case 'ArrowDown':
            if (currentIndex + width < width * width) currentIndex += width
            break;
    }
    squares[currentIndex].classList.add('frog');

}
document.addEventListener('keyup', moveFrog);

//moving logs and cars to move aout
function autoMoveElements() {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft));
    logsRight.forEach(logRight => moveLogRight(logRight));

    carsLeft.forEach(carLeft => moveCarLeft(carLeft));
    carsRight.forEach(carRight => moveCarRight(carRight))
}
//moves log to left
function moveLogLeft(logLeft) {
    switch (true) {
        case logLeft.classList.contains('l1'):
            logLeft.classList.remove('l1')
            logLeft.classList.add('l2')
            break;

        case logLeft.classList.contains('l2'):
            logLeft.classList.remove('l2')
            logLeft.classList.add('l3')
            break;

        case logLeft.classList.contains('l3'):
            logLeft.classList.remove('l3')
            logLeft.classList.add('l4')
            break;

        case logLeft.classList.contains('l4'):
            logLeft.classList.remove('l4')
            logLeft.classList.add('l5')
            break;

        case logLeft.classList.contains('l5'):
            logLeft.classList.remove('l5')
            logLeft.classList.add('l1')
            break;
    }
}
//move logs right
function moveLogRight(logRight) {
    switch (true) {
        case logRight.classList.contains('l1'):
            logRight.classList.remove('l1')
            logRight.classList.add('l5')
            break;

        case logRight.classList.contains('l2'):
            logRight.classList.remove('l2')
            logRight.classList.add('l1')
            break;

        case logRight.classList.contains('l3'):
            logRight.classList.remove('l3')
            logRight.classList.add('l2')
            break;

        case logRight.classList.contains('l4'):
            logRight.classList.remove('l4')
            logRight.classList.add('l3')
            break;

        case logRight.classList.contains('l5'):
            logRight.classList.remove('l5')
            logRight.classList.add('l4')
            break;
    }
}

function moveCarLeft(carLeft) {
    switch (true) {
        case carLeft.classList.contains('c1'):
            carLeft.classList.remove('c1')
            carLeft.classList.add('c2')
            break;
        case carLeft.classList.contains('c2'):
            carLeft.classList.remove('c2')
            carLeft.classList.add('c3')
            break;
        case carLeft.classList.contains('c3'):
            carLeft.classList.remove('c3')
            carLeft.classList.add('c1')
            break;
    }
}

function moveCarRight(carRight) {
    switch (true) {
        case carRight.classList.contains('c1'):
            carRight.classList.remove('c1')
            carRight.classList.add('c3')
            break;
        case carRight.classList.contains('c2'):
            carRight.classList.remove('c2')
            carRight.classList.add('c1')
            break;
        case carRight.classList.contains('c3'):
            carRight.classList.remove('c3')
            carRight.classList.add('c2')
            break;
    }
}


setInterval(autoMoveElements, 1000)



// timer second countdown
function countDown() {
    currentTime--;
    timeLeftDisplay.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);

    }
}

let countDownTimerId = setInterval(countDown, 1000)

