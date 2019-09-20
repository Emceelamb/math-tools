// p5 sketch
let x, y;
let counter = 0;

function setup() {
  createCanvas(400, 400);
  background(33);
  x = width/2;
  y = height/2;
  stroke(230, 100);
  strokeWeight(1);
}

function draw() {
  //update
  x += noise(50, counter) - 0.5; // subtract 0.5 to balance out
  y += noise(0 , counter) - 0.5;
  counter+=0.01;
  //draw
  point(x,y);
}
