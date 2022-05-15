var carPic=document.createElement("img");
var carPicLoaded = false;
var carX = 60, carY= 250;
var carSpeed = 0;
var carAng = -.5*Math.PI;

const drivePower = .5;
const turnRate = .03*Math.PI;
const groundSpeedDecay = .94;
const minTurningSpeed = .5;

function carInit() {
  carPic.onload=function(){
    carPicLoaded = true;
  }

  carPic.src="Blue-Car-Mini.png";
}

function carReset() {
  for(i=0; i<trackGrid.length; i++) {
    if(trackGrid[i] === trackPlayer) {
      var tileRow = Math.floor(i/trackCols);
      var tileCol = i%trackCols;

      carX = tileCol * trackWidth + 0.5*trackWidth;
      carY = tileRow * trackHeight + 0.5*trackHeight;
      trackGrid[i] = 0;

      document.getElementById("debugText").innerHTML	=
      "Car	starting	at	tile:	("	+	tileCol	+	",	"	+	tileRow	+	")	"	+
      "Pixel	coordinate:	("	+	carX	+	",	"	+	carY	+	")";
    }
  }
}

function carMove() {
  if(keyHeldGas) {
    carSpeed += drivePower;
  }
  if(keyHeldReverse) {
    carSpeed -= drivePower;
  }
  if (Math.abs(carSpeed) >= minTurningSpeed) {
    if(keyHeldLeft) {
      carAng -= turnRate;
    }
    if(keyHeldRight) {
      carAng += turnRate;
    }
  }

  var nextX = carX + Math.cos(carAng) * carSpeed;
  var nextY = carY + Math.sin(carAng) * carSpeed;

  if (checkForTrackAtPixelCoord(nextX, nextY)) {
    carX = nextX;
    carY = nextY;
  } else {
    carSpeed *= -0.5;
  }
  carSpeed *= groundSpeedDecay;
}

function carDraw() {
  if(carPicLoaded) {
    drawBitmapCenteredAtLocationWithRoation(carPic, carX, carY, carAng);
  }
}