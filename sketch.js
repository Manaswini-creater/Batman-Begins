const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies;
var maxDrops = 100
var drops =[]
var rand
function preload(){
    
}

function setup(){
createCanvas(400,700) 
engine = Engine.create()
world = engine.world
if(frameCount % 150 ==0){
 for(var i=0; i<maxDrops; i++)   
drops.push(new createDrop(random(0,400),random(0,400)))
    
}

    
}

function draw(){
  background("black")
  Engine.update(engine);  
 
  for(var i = 0; i<maxDrops; i++){
      drops[i].showDrop();
      drops[i].updateY()
      
  }
  

}   

