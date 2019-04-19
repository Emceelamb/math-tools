PImage plane;

void setup(){
    size(400,400);
    imageMode(CENTER);
    plane = loadImage("airplane.png");
}

void draw(){
    background(255,255,255);
    float inc = map(millis(), 0,2000, 0 , 2*PI);
    // same thing
    // float inc = millis() * (2*PI/2000);
    translate(width/2, height/2 + 30*sin(inc));
    printMatrix();
    rotate(0.2);
    printMatrix();
    image(plane,0,0);
}

float vAxis(int inc){
    return sin(inc)*5;
}
