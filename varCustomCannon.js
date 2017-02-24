//Drawing basics redo by Zahra Abd'Allh.

var cannonO = 220;
var cannonD = 320;
var cannonC = 425;
var recS = 8

function setup() {
  createCanvas(840, 680);
}

function draw() {
  //Attempting to make a rectangle but came out with a line instead.
  //Turned background blue for sky effect.
  background(0,255,255);
  //Filled rectaange brown, it acts as soil.
  fill(0, 128, 0);
  rect(-10, 400, 858, 400);//changed w to 872 from 400 in previous pic.
  //Fill gives color for grass.
  fill(0, 128, 0);
  //Tried to do the same format with the second line and came out with a street. Rect is grass.
  rect(-20, 300, 859, 98);//Changed w from 672 to 859 from revious pic.
  //Color for sun.
  fill(255, 215,0);
  //I tried to make an arc,but it came out as an ellipse like shape. We'll call it the sun.
  arc(-115, -35, 400, 560, 0, HALF_PI);
  //Color of cannon fire chamber.
  fill(255,0 , 0);
  //Fire chamber for the cannon.
  rect(70, 215, 105, 55, 20);
  //The ellipse attached to the chanber is the wheel.
  fill(105, 105,105);
  ellipse(80, 265, 95, 85);
  // Cannon ball one.
  fill(0, 0, 0);
  ellipse(cannonO, 246, 65, 55);
  cannonO = cannonO + 1;
  //Cannon two.
  ellipse(cannonD, 246, 65, 55);
  cannonD = cannonD + 1;
  //Cannon three.
  ellipse(cannonC, 246, 65, 55);
  cannonC = cannonC + 1; 
  
  
 
  
}