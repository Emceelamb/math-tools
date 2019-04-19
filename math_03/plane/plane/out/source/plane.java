import processing.core.*; 
import processing.data.*; 
import processing.event.*; 
import processing.opengl.*; 

import java.util.HashMap; 
import java.util.ArrayList; 
import java.io.File; 
import java.io.BufferedReader; 
import java.io.PrintWriter; 
import java.io.InputStream; 
import java.io.OutputStream; 
import java.io.IOException; 

public class plane extends PApplet {

PImage plane;

public void setup(){
    
    imageMode(CENTER);
    plane = loadImage("airplane.png");
}

public void draw(){
    background(255,255,255);
    float inc = map(millis(), 0,2000, 0 , 2*PI);
    // same thing
    // float inc = millis() * (2*PI/2000);
    translate(width/2, height/2 + 30*sin(inc));
    rotate(0.2f);
    image(plane,0,0);
}

public float vAxis(int inc){
    return sin(inc)*5;
}
  public void settings() {  size(400,400); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "plane" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
