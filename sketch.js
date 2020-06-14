
var movingRect, fixedRect;
var gameObject1, gameObject2;
var object1, object2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(200,200,80,50);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(700,100,50,50);
  gameObject2.shapeColor = "green";

  gameObject1.velocityX = 10;
  gameObject2.velocityX = -11;
}

function draw() {
  background("black");
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect, gameObject1))
  {gameObject1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
else{
  gameObject1.shapeColor = "green";
  movingRect.shapeColor = "green";
}


bounceOff(gameObject1,gameObject2);

  drawSprites();
}


