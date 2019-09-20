// p5 sketch
let start, end;

function setup() {
  createCanvas(400, 400);
  start = createVector(width/2, height/2);
  end   = createVector(0  , height  ); 
}

let count = 0;
function draw() {
  // background(220);
  
  let position = start.lerp(end, count);
  count+=0.0002;
  point(position.x, position.y);
  
}

