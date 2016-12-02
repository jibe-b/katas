const sizeAnt = 20;
var worldWidth, worldHeight;

window.onload = function () {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  worldWidth = canvas.width;
  worldHeight = canvas.height;
  var positionFourmi = [0, 0];
  var casesNoires = [];
  var orientationFourmi = [0, -1];

  move.onclick = function () {
    drawAnt(positionFourmi, context);
    positionFourmi = nouvellePositionFourmi(positionFourmi, orientationFourmi);
    orientationFourmi = nouvelleOrientationFourmi(positionFourmi, orientationFourmi, casesNoires);
  };
}

const drawAnt = function (positionFourmi, context) {
  context.fillStyle = "black";
  context.fillRect(positionAntX(positionFourmi[0]), positionAntY(positionFourmi[1]), sizeAnt, sizeAnt);
}

const positionAntX = function (oldPositionX) {
  return (oldPositionX * sizeAnt) + (worldWidth/2) - (sizeAnt/2);
}

const positionAntY = function (oldPositionY) {
  return (oldPositionY * sizeAnt) + (worldHeight/2) - (sizeAnt/2);
}
