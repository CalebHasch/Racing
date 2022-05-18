// player 1 buttons
const keyUpArrow = 38;
const keyDownArrow = 40;
const keyLeftArrow = 37;
const keyRightArrow = 39;

// player 2 buttons
const keyW = 87;
const keyS = 83;
const keyA = 65;
const keyD = 68;

function inputInit() {
  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);

  p1.setupControls(keyUpArrow, keyDownArrow, keyLeftArrow, keyRightArrow);
  p2.setupControls(keyW, keyS, keyA, keyD);
}

function setKeyHoldState(thisKey, thisCar, setTo) {
  if(thisKey === thisCar.controlKeyForGas) {
    thisCar.keyHeldGas = setTo;
  } else if(thisKey === thisCar.controlKeyForReverse) {
    thisCar.keyHeldReverse = setTo;
  } 
  if(thisKey === thisCar.controlKeyForLeft) {
    thisCar.keyHeldLeft = setTo;
  } else if(thisKey === thisCar.controlKeyForRight) {
    thisCar.keyHeldRight = setTo;
  } 
}

function keyPressed(evt) {
  setKeyHoldState(evt.keyCode, p1, true);
  setKeyHoldState(evt.keyCode, p2, true);
  evt.preventDefault();
}

function keyReleased(evt)	{
  setKeyHoldState(evt.keyCode, p1, false);
  setKeyHoldState(evt.keyCode, p2, false);
}