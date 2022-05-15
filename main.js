var canvas;
var canvasContext;

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  carInit();

  var framesPerSecond = 30;
  setInterval(function() {
    moveEverything();
    drawEverything();
    }, 1000/framesPerSecond);

  carReset();
  inputInit();
}

function moveEverything() {
  carMove();
}

function drawEverything() {
  // black background
  colorRect(0, 0, canvas.width, canvas.height, "black")

  // adds blue car image
  carDraw()

  // adds the orange track
  drawTracks();
}