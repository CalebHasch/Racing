var carPic=document.createElement("img");
var trackRoadPic=document.createElement("img");
var trackWallPic=document.createElement("img");
var finishLinePic=document.createElement("img");
var grassPic=document.createElement("img");
var trackPics = [];
var picsToLoad = 0;

function beginLoadingImage(img, file) {
  picsToLoad++;
  img.onload=countLoadedImageAndLaunchIfReady;
  img.src = "images/" + file;
}

function countLoadedImageAndLaunchIfReady() {
  picsToLoad -= 1;

  if(picsToLoad === 0) {
    loadingDoneSoStartGame();
  }
}

function loadImages() {
  var imageList = [
    {varName:carPic, file:"Blue-Car-Mini.png"},
    {varName:trackRoadPic, file:"asphalt2_40x40.jpg"},
    {varName:trackWallPic, file:"brick-40x40.png"},
    {varName:grassPic, file:"grass_40x40.jpg"},
    {varName:finishLinePic, file:"checkered_finishLine_40x40.jpg"}
  ]
  
  for(var i=0; i<imageList.length; i++) {
    beginLoadingImage(imageList[i].varName, imageList[i].file);
  }
}
