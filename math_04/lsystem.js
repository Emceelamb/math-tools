function setup(){
      createCanvas(400,400);
}

function lsystem(x,y,angle, loops){
      if(loops < 0){return;}
      push();
      translate(x,y);
      rotate(angle);
      line(0,0,x,y);
      lsystem(x,y,angle*0.8,loops-1);
      lsystem(x,y,-angle*0.8,loops-1);
      
      pop();
}

function draw(){
      background(200); 
      translate(width/2,height/2);
      scale(1,-1);
      rotate(-PI/8);
      
      lsystem(0,20,PI/map(mouseX,0,400,1,5),5);
}
