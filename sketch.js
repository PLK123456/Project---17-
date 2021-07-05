var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  
  appleImg = loadImage("apple.png");
  leafImg =  loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
  fill("red");
  text(mouseX + "," + mouseY, mouseX, mouseY);
  
  rabbit.x = mouseX;
        spawnApples();
  spawnLeaves();


}

function spawnApples()  
{
  if(frameCount % 60 === 0)
    { apple = createSprite(100,80,30,20);
  apple.velocityY = 2;
  apple.addImage("apple", appleImg);
  apple.scale = 0.05;
  apple.x = random(60,280);
  apple.y = 20;   
      
    }
}

function spawnLeaves() 
{
  if(frameCount % 80 === 0)
    { leaf= createSprite(200,80,30,20);
  leaf.velocityY = 2;
  leaf.addImage("leaf", leafImg);
  leaf.scale = 0.05;
  leaf.x = random(80,300);
  //leaf.y = 20;  
    }
  
  
}


