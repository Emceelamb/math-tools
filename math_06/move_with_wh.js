// p5 sketch
let start, end;
let position;

function setup() {
  createCanvas(400, 400);
  start = createVector(width/2, height/2);
  end   = createVector(width  , height  ); 
  // this is a pointer and has address of start
  //position = start;
  position = createVector(start.x, start.y);
}

function draw() {
  // background(220);
  
  let w = end.x - start.x;
  let h = end.y - start.y;
  
  stroke(0);
  strokeWeight(4);
  position.x += w/100;
  position.y += h/100;
  
  point(position.x, position.y);
}
