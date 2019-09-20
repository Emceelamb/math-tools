let ballY = 20;
let velocity = 0;
let acceleration = 0.1;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //update
  if(ballY > height){
    velocity  = -velocity * 0.7;
    ballY = height;
  }
  velocity += acceleration;
  ballY += velocity;  
  // draw 
  background(220);
  ellipse(width/2, ballY, 20,20);
}
