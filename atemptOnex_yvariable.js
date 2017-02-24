
var circleX= 230

function setup() {
  createCanvas(580,380);
}

function draw() {
  //background
  background(250,0,0)
  //elipse
  noStroke();
  fill(0,214,235);
  ellipse(circleX,36,59,100);
  
  
  circleX = circleX + 1;
  
}