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
      
}

function draw() {
  //update
  
  //draw
  
}
