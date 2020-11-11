var car ,wall, speed, weight;

function setup() {

  createCanvas(1600,400);
 
  speed = ranom(55,90);
  weight = random(400,1500);

  car = createSpritre(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);

}

function draw() {
  background(255,255,255);
  
  car.velocityX = speed;
  
  if (car.x-wall.x >  car.width/2 + wall.width/2) {
   deformation = 0.5*weight*speed*speed/22500
  }

  if (car.x-wall.x < 100  ) {
      car.shapecolor = "green"
  }
  
  if  (car.x-wall.x < 100,180 ) {
    car.shapecolor = "yellow"
  }

  if ( car.x-wall.x > 180) {
    car.shapecolor = "red"
  }

  drawSprites();
}
