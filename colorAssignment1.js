//Color Assignment
function setup() {
  createCanvas(580,690);
}
//Create shape with fill(), stroke(),and color().
function draw() {
  //Background sets color of canvas.
  background(0,247,0);
  //Fill sets color for interior shape.
  fill(255, 0, 0);
  //Stroke sets color for shape outline.
  stroke(0, 0, 159 );
  //The color functions above turned the square red.
  rect(95,46,165,165);
  //Fill is turned the ellipse blue.
  fill(0,0,128);
  //Stroke outlined color black.
  stroke(0,0,0);
  //The above functions gave the ellipse it's look.
  ellipse(225,58,178,175);
  //Fill made the triangle light blue.
  fill(0,128,255);
  //Stroke made image light green.
  stroke(128,255,0);
  //Appeared on upper left hand corner because of cordinates.
  triangle(30, 34, 58, 28,38,75);
  
  
}