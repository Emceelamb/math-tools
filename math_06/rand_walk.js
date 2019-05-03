// p5 sketch
let x, y;

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
  x += random(-1,1);
  y += random(-1,1);
  
  //draw
  point(x,y);
}

