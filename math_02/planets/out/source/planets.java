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

public class planets extends PApplet {

float[] radii = {0.4f,0.7f,1.0f,1.5f,5.2f,9.5f,19.2f,30.1f};

public void setup(){
  
}

public void draw(){
  background(0);
  fill(255);
  for(int i = 0; i < 8; i++){
    float x = radii[i];
    ellipse(log(x*mouseX), 100,20,20);
  }
}
  public void settings() {  size(1000,200); }
  static public void main(String[] passedArgs) {
    String[] appletArgs = new String[] { "planets" };
    if (passedArgs != null) {
      PApplet.main(concat(appletArgs, passedArgs));
    } else {
      PApplet.main(appletArgs);
    }
  }
}
