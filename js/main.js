var canvas;
var canvasContext;
var p1 = new carClass();
var p2 = new carClass();

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');

  loadImages();

  p2.carReset(car2Pic);
  p1.carReset(carPic);

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
  p1.carMove();
  p2.carMove();
}

function drawEverything() {
  // adds the orange track
  drawTracks();
  p2.carDraw();

  // adds blue car image
  p1.carDraw();

}