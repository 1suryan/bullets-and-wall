var wall, thickness;
var bullet, speed, weight;



function setup() {
  createCanvas(1600,400);
  bullet = createSprite(400, 200, 50, 50);
thickness = random(22, 83)
speed = random(223, 321)
weight = random (30, 52)
wall = createSprite(1200,200,thickness,height/2)
bullet.velocityX = speed;

}




function draw() {
  wall.shapeColour = color(80,80,80)
  background(255,255,255);  
  drawSprites();

if(hasCollided(bullet, wall))
{
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    console.log (damage)

    if(damage>10)
    {
        
          wall.shapeColor = "green"

    }


    if(damage<10)
    {
      wall.shapeColor = "red"
    }


    

  }








}

function hasCollided(bullet, wall) 
{
     bulletRightEdge = bullet.x +bullet.width;
     wallLeftEdge = wall.x;
     if (bulletRightEdge>=wallLeftEdge) 
     {
         return true 
    
     }
     return false;


}

