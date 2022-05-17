var keyHeldGas = false;
var keyHeldReverse = false;
var keyHeldLeft = false;
var keyHeldRight = false;

const keyUpArrow = 38;
const keyDownArrow = 40;
const keyLeftArrow = 37;
const keyRightArrow = 39;

function inputInit() {
  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);
}

function setKeyHoldState(thisKey, setTo) {
  if(thisKey === keyUpArrow) {
    keyHeldGas = setTo;
  } else if(thisKey === keyDownArrow) {
    keyHeldReverse = setTo;
  } 
  if(thisKey === keyLeftArrow) {
    keyHeldLeft = setTo;
  } else if(thisKey === keyRightArrow) {
    keyHeldRight = setTo;
  } 
}

function keyPressed(evt) {
  setKeyHoldState(evt.keyCode, true);
  evt.preventDefault();
}

function keyReleased(evt)	{
  setKeyHoldState(evt.keyCode, false);
}