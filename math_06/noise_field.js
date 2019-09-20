// p5 sketch
// noprotect

var p = [];

function setup() {
  createCanvas(400, 400);
  background(33);
  
  noStroke();
  
  for(var x = 0; x < width; x++){
    for(var y = 0; y < height; y++){
      var c = noise(x * 0.01,y * 0.01);
      fill(c * 255);
      rect(x, y, 1, 1);
    }
  }
  
  for(var i = 0; i< width; i+=10){
    for(var j = 0; j < height; j += 10){
      p.push(createVector(i,j));
    }
  }
}

function getFlow(pos) {
  let angle = noise(pos.x * 0.01, pos.y * 0.01) * TWO_PI;
  return p5.Vector.fromAngle(angle);
}

function draw() {
  fill(255);
  
  p.forEach(point => {
    ellipse(point.x, point.y, 1);
    var v = getFlow(point);
    point.add(v);    
  });
}
