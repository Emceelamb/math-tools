float[] radii = {0.4,0.7,1.0,1.5,5.2,9.5,19.2,30.1};

void setup(){
  size(1000,200);
}

void draw(){
  background(0);
  fill(255);
  for(int i = 0; i < 8; i++){
    float x = radii[i];
    ellipse(x*log(mouseX), 100,20,20);
  }
}
