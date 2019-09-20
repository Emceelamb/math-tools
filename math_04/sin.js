function setup() {
  createCanvas(400, 400);
}

let y = 400;
let animate = false;

let incr = 0;

function draw() {

  if(animate){
    //y=y-10;
    incr+=0.02;
    y = map(sin(incr), -1,1,400,0);
    if(incr>PI/2){animate=false;}
  
  }  
    background(220);

  rect(200-2, 0, 4, 400);
  rect(180, y-10, 40, 20);
}
  
function mousePressed(){
  animate=true;
  incr = -PI/2
}
