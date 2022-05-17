var canvas;
var canvasContext;

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  loadImages();

  carReset();

  inputInit();
}

function loadingDoneSoStartGame() {
  var framesPerSecond = 30;
  setInterval(function() {
    moveEverything();
    drawEverything();
    }, 1000/framesPerSecond);
}

function moveEverything() {
  carMove();
}

function drawEverything() {
  // adds the orange track
  drawTracks();
  
  // adds blue car image
  carDraw()
}