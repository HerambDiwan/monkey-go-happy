var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  ground=loadAnimation("jungle.jpg")
 
}



function setup() {
  createCanvas(400,400)
  background("white")
  monkey=createSprite(60,370,20,20)
  ground=createSprite(0,400,850,10)
  
  
  if (frameCount%80===0){
    
   banana=createSprite(200,200,30,30)
    
    banana.velocityX=0
    banana.addImage("banana",bananaImage)
    banana.scale=0.2
    
  }
    
 ground.velocityX=-2
   
  
}


function draw() {
monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1
 
  if (keyIsDown(UP_ARROW)){
    monkey.velocityY=-3
  
  }
  
drawSprites();  
}
