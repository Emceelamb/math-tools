// p5 sketch
// noprotect
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
      p = createVector(width/2, height/2);
}

function getFlow(pos) {
  let angle = noise(pos.x * 0.01, pos.y * 0.01) * TWO_PI;
  return p5.Vector.fromAngle(angle);
}

function draw() {
  fill(255);
  ellipse(p.x, p.y, 1);
  var v = getFlow(p);
  p.add(v);
}
