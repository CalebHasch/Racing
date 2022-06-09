const drivePower = .5;
const turnRate = .03*Math.PI;
const groundSpeedDecay = .94;
const minTurningSpeed = .5;

function carClass() {
  // var for input states
  this.keyHeldGas = false;
  this.keyHeldReverse = false;
  this.keyHeldLeft = false;
  this.keyHeldRight = false;

  this.setupControls = function(forwardKey, backKey, leftKey, rightKey) {
    this.controlKeyForGas = forwardKey;
    this.controlKeyForReverse = backKey;
    this.controlKeyForLeft = leftKey;
    this.controlKeyForRight = rightKey;
  }
  
  this.carInit = function(whichGraphic, whichName) {
    this.myBitmap = whichGraphic;
    this.myName = whichName;
    this.carReset();
  }

  this.carReset = function() {
    this.carSpeed = 0;
    this.carAng = -.5*Math.PI;
    
    if (this.homeX == undefined) {
      for(i=0; i<trackGrid.length; i++) {
        if(trackGrid[i] === trackPlayer) {
          var tileRow = Math.floor(i/trackCols);
          var tileCol = i%trackCols;

          this.homeX = tileCol * trackWidth + 0.5*trackWidth;
          this.homeY = tileRow * trackHeight + 0.5*trackHeight;
          trackGrid[i] = 0;
          break;
        }
      }
    }
    this.carX = this.homeX;
    this.carY = this.homeY;
  }
  
  this.carMove = function() {
    if(this.keyHeldGas) {
      this.carSpeed += drivePower;
    }
    if(this.keyHeldReverse) {
      this.carSpeed -= drivePower;
    }
    if (Math.abs(this.carSpeed) >= minTurningSpeed) {
      if(this.keyHeldLeft) {
        this.carAng -= turnRate;
      }
      if(this.keyHeldRight) {
        this.carAng += turnRate;
      }
    }

    var nextX = this.carX + Math.cos(this.carAng) * this.carSpeed;
    var nextY = this.carY + Math.sin(this.carAng) * this.carSpeed;
    
    var drivingIntoTileType = getTrackAtPixelCoord(nextX, nextY);
    if (drivingIntoTileType === trackRoad) {
      this.carX = nextX;
      this.carY = nextY;
    } else if(drivingIntoTileType === trackFinish) {
      document.getElementById("debugText").innerHTML = this.myName + " won the race!";
      p1.carReset();
      p2.carReset();
    } else {
      this.carSpeed *= -0.25;
    }
    this.carSpeed *= groundSpeedDecay;
  }
  
  this.carDraw = function() {
    if(true) {
      drawBitmapCenteredAtLocationWithRoation(this.myBitmap, this.carX, this.carY, this.carAng);
    }
  }
}