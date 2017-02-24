//Zahra A.Custom Variables 2/18/17

var circleX = 0;
var circleY = 250
var circleH = 280
var circleZ = 580
var circleA = 280
function setup() {
  createCanvas(580,390);
  
}

function draw() {
//background
  background(255,102,255);
  //triangle
  fill(178,255,102);
  ellipse(circleX,circleY,350,circleH);
  
  circleX = circleX + 6;
  circleH = circleH + 2
  
  //elliple 2
  fill(102,204,0);
  ellipse(circleZ,350,250,circleA);// Inverse order to appear on right.
  
  circleZ = circleZ -6;
  circleA = circleA -2;
  
}