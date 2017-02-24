//Zahra A.Custom Variables 2/18/17

var circleX = 0;
var circleY = 250
var circleH = 280
var circleZ = 580
var circleA = 280
var r = 255;
var g = 102;
var b = 255;
var e = 178;
var n = 255;
var h = 102;


function setup() {
  createCanvas(580,390);

}

function draw() {
//background
  background(r, g , b );
  fill(e,n,h);
  ellipseMode(CORNERS);
  ellipse(circleX,circleY,350,circleH);
  
  circleX = circleX + 6;
  circleH = circleH + 2
  
  //elliple 2
  noStroke();
  fill(245,95,0)
  ellipse(circleZ,350,250,circleA);// Inverse order to appear on right.
  
  circleZ = circleZ -6;
  circleA = circleA -2;
  
}