var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=190;
var score =0;

function setup() {
  createCanvas(700, 500);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 8, divisionHeight));
  }
  for (var k = 0; k <=160; k = k + 160) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 8, divisionHeight));
  }
  for (var k = 0; k <=240; k = k + 240) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 8, divisionHeight));
  }
  for (var k = 0; k <=320; k = k + 320) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 8, divisionHeight));
  }
  for (var k = 0; k <=400; k = k + 400) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 8, divisionHeight));
  }
  for (var k = 0; k <=480; k = k + 480) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 8, divisionHeight));
  }
  for (var k = 0; k <=560; k = k + 560) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 8, divisionHeight));
  }
  for (var k = 0; k <=640; k = k + 640) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 8, divisionHeight));
  }
  

 
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,60));
  }

  //create 2nd row of plinko objects
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,140));
  }

  //create 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,230));
    }

  
  //create 4th row of plinko objects


  
  
    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(150, 700), 10,10));
    score++;
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  

  //display the paricles 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

} 



