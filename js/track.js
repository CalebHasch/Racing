const trackWidth = 40;
const trackHeight = 40;
const trackCols = 20;
const trackRows = 15;
const trackRoad = 0;
const trackWall = 1;
const trackPlayer = 2;
const trackFinish = 3;
const trackGrass = 4;

var	trackGrid	=
						  [	4,	4,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	4,
								4,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,
								1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
								1,	0,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	1,
								1,	0,	0,	0,	1,	1,	1,	1,	4,	4,	4,	1,	1,	1,	1,	1,	1,	0,	0,	1,
								1,	0,	0,	1,	1,	0,	0,	1,	1,	4,	1,	1,	0,	0,	0,	1,	1,	0,	0,	1,
								1,	0,	0,	1,	0,	0,	0,	0,	1,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	1,
								1,	0,	0,	1,	0,	0,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	1,
								1,	0,	0,	1,	0,	0,	0,	0,	0,	0,	1,	0,	0,	1,	0,	0,	1,	0,	0,	1,
								1,	0,	0,	1,	0,	0,	1,	0,	0,	0,	1,	0,	0,	1,	0,	0,	1,	0,	0,	1,
								1,	0,	2,	1,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	1,	0,	0,	1,
								1,	1,	1,	1,	0,	0,	1,	1,	1,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	1,
								1,	0,	3,	0,	0,	0,	1,	4,	1,	1,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,
								1,	0,	3,	0,	0,	0,	1,	4,	4,	1,	1,	1,	1,	1,	1,	0,	0,	0,	1,	1,
								1,	1,	1,	1,	1,	1,	1,	4,	4,	4,	4,	4,	4,	1,	1,	1,	1,	1,	1,	1];    var trackCounter = trackCols * (trackRows - 3);

function checkForTrackAtPixelCoord(pixelX,pixelY) {
  var row = Math.floor(pixelY/trackHeight);
  var column = Math.floor(pixelX/trackWidth);

  if(column >= trackCols || column < 0 || row < 0 || row >= trackRows) {
    return false;
  } else {
      var trackIndex = trackTileToIndex(column, row);

      return (trackGrid[trackIndex] == trackRoad);
  }
}

function isWallAtTileCoord(trackTileCol, trackTileRow) {
  var trackIndex = trackTileToIndex(trackTileCol, trackTileRow);
  return (trackGrid[trackIndex] == trackWall);
}

function trackTileToIndex(tileCol, tileRow) {
  var trackIndex = tileCol + trackCols*tileRow;
  return trackIndex;
}

function drawTracks() {
  var trackIndex = 0;
  var trackTopEdgeY = 0;

  for(i=0; i<trackRows; i++) {
    var trackLeftEdgeX = 0;
    for(j=0; j<trackCols; j++) {

      var trackTypeHere = trackGrid[ trackIndex ];
      var useImg;

      switch( trackTypeHere ) {
        case trackRoad:
          useImg = trackRoadPic;
          break;
        case trackWall:
          useImg = trackWallPic;
          break;
        case trackFinish:
          useImg = finishLinePic;
          break;
        case trackGrass:
          useImg = grassPic;
          break;
      }

      canvasContext.drawImage(useImg, trackLeftEdgeX, trackTopEdgeY);
      
      trackIndex++;
      trackLeftEdgeX += trackWidth;
    }
    trackTopEdgeY += trackHeight;
  }
}