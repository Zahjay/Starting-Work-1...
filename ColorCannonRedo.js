//Drawing basics redo by Zahra Abd'Allh.
function setup() {
  createCanvas(440, 680);
}

function draw() {
  //Attempting to make a rectangle but came out with a line instead.
  //Turned background blue for sky effect.
  background(0,255,255);
  // I think it made everything 
  ellipseMode(CENTER);
  //I was playing with this function and it produced a car out of the cannon.
  rectMode(RADIUS);
  //Filled rectaange brown, it acts as soil.
  fill(0, 128, 0);
  rect(-10, 400, 672, 400);
  //Fill gives color for grass.
  fill(0, 128, 0);
  //Tried to do the same format with the second line and came out with a street. Rect is grass.
  rect(-20, 300, 600, 200);
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
  ellipse(220, 246, 65, 55);
  //Cannon two.
  ellipse(320, 246, 65, 55);
  //Cannon three.
  ellipse(425, 246, 65, 55);
  
}