
var circleX = 50;
var circleY = 107;
var r= 200
var g = 56
var b = 245
var fr= 45
var fg=249
var fb= 64

function setup() {
  createCanvas(580,320);
}

function draw() {
  //background
  background(200, 56, 245);
  noStroke();
  fill(fr, fg, fb);
  rect(circleX,circleY, 55, 35);
  
  circleX = circleX + 31;
  
}