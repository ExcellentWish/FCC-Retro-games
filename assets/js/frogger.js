const timeLeftDisplay = document.getElementById('time-left');
const resultDisplay = document.getElementById('result');
const startPauseButton = document.getElementById('start-pause-button');
const squares = document.querySelectorAll('.frogger-grid div');

// move our frog. need to add event listeners
function moveFrog(){
    console.log('moved');
}
document.addEventListener('keyup', moveFrog);
