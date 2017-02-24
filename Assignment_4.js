var circleX = 20; //variable

function setup() {
  createCanvas(300, 420);//
}

function draw() {
  // background
  background(0, 0, 50);
  // ellipse
  noStroke( );
  fill(255);
  ellipse(circleX, 70, 74, 25); //ellipse contains circle X which takes the value for x. Then you have y for 70, w for 74, h for 25.
  circleX = circleX + 4;//circleX equals cirlceX + 4  means that circleX  goes to the right .
}
