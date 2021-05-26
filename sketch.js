const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var divisions=[];
var plinko = [];
var particles = [];


function preload(){

}


function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
  ground1 = new Ground(240,800,1300,20);
  
  for(var j = 20; j <=width;j=j+35){
    plinko.push(new Plinko(j,30));
  }
  for(var j = 10; j <=width;j=j+35){
    plinko.push(new Plinko(j,90));
  }
  for(var j = 20; j <=width;j=j+35){
    plinko.push(new Plinko(j,150));
  }
  for(var j = 10; j <=width;j=j+35){
    plinko.push(new Plinko(j,210));
  }
  
  for(var k = 0;k <=width;k=k+80){
    divisions.push(new Division(k,750,10,480));
  }

}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  if(frameCount%60===0){
    particles.push(new Particles(random(10,800),10,10));

  }
  for(var j = 0; j<plinko.length;j++){
    plinko[j].display();
  }
  for(var j = 0; j<particles.length;j++){
    particles[j].display();
  }
  for(var k = 0; k<divisions.length;k++){
  divisions[k].display();
}
ground1.display();
}
