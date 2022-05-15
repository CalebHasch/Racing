const trackWidth = 40;
const trackHeight = 40;
const trackGap = 1;
const trackCols = 20;
const trackRows = 15;
const trackRoad = 0;
const trackWall = 1;
const trackPlayer = 2;

var	trackGrid	=
						[	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,
								1,	1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,	1,
								1,	1,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	1,
								1,	0,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	1,
								1,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	1,
								1,	0,	0,	1,	1,	0,	0,	1,	1,	1,	1,	1,	0,	0,	0,	1,	1,	0,	0,	1,
								1,	0,	0,	1,	0,	0,	0,	0,	1,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	1,
								1,	0,	0,	1,	0,	0,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	1,
								1,	0,	0,	1,	0,	0,	0,	0,	0,	0,	1,	0,	0,	1,	0,	0,	1,	0,	0,	1,
								1,	0,	0,	1,	0,	0,	1,	0,	0,	0,	1,	0,	0,	1,	0,	0,	1,	0,	0,	1,
								1,	0,	2,	1,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	1,	0,	0,	1,
								1,	1,	1,	1,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,	0,	0,	0,	0,	0,	1,
								1,	0,	0,	0,	0,	0,	1,	1,	1,	0,	0,	0,	1,	1,	0,	0,	0,	0,	0,	1,
								1,	0,	0,	0,	0,	0,	1,	1,	1,	1,	1,	1,	1,	1,	1,	0,	0,	0,	1,	1,
								1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1,	1];    var trackCounter = trackCols * (trackRows - 3);

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
  for(i=0; i<trackCols; i++) {
    for(j=0; j<trackRows; j++) {
      if(isWallAtTileCoord(i, j)) {
        colorRect(i*trackWidth, j*trackHeight, trackWidth - trackGap, trackHeight - trackGap, 'orange')
      }
    }
  }
}