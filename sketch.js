var astronaut
var edge1,edge2,edge3,edge4

function preload(){
  bg = loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadImage("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  bath = loadAnimation("bath1.png","bath2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  move = loadAnimation("move1.png","move2.png");
}

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(400, 200, 50, 50);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.08;
  astronaut.debug = false;

  edge1 = createSprite(0,200,10,400);
  edge1.visible = false;

  edge2 = createSprite(800,200,10,400);
  edge2.visible = false;

  edge3 = createSprite(400,0,800,10);
  edge3.visible = false;

  edge4 = createSprite(400,400,800,10);
  edge4.visible = false;

}

function draw() {
  background(bg);
  stroke("black");
  fill("white");
  textSize(30);
  stroke("black");
  fill("white");
  text("Instrucciones: ",45,30); 
  
  
  textSize(20);
  text("Flecha hacia Arriba = Cepillarse", 50, 60); 
  text("Flecha hacia Abajo = Ejercitarse", 50, 80);
  text("Flecha hacia la Izquierda = Bañarse", 50, 100);
  text("Flecha hacia la Derecha = Comer", 50, 120);
  text("Tecla M = Moverse",50,140);

  //El astronauta se cepillará los dientes cuando se presione la tecla de flecha arriba
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing", brush);
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("exercise", gym);
    astronaut.changeAnimation("exercise", gym);
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing", bath);
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating", eat);
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("M")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving", move);
    astronaut.y = 250;
    astronaut.velocityX = 2;
    astronaut.velocityY = -0.5;
  }

 if(astronaut.isTouching(edge1)){
   astronaut.velocityX = astronaut.velocityX+4;
 }

 if(astronaut.isTouching(edge2)){
  astronaut.velocityX = astronaut.velocityX-4;
}

if(astronaut.isTouching(edge3)){
  astronaut.velocityY = astronaut.velocityY+1;
}

if(astronaut.isTouching(edge4)){
  astronaut.velocityY = astronaut.velocityY-1;
}

  
  drawSprites();
}