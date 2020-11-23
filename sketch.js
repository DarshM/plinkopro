const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;
var ground;
function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);


  engine=Engine.create();
  world=engine.world;

  ground = new Ground(240,790,480,10);
}

function draw() {
  background(0); 
  Engine.update(engine);
  console.log(frameCount);
  for(var jk=0;j<=width;j=j+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,20,divisionHeight));
  }

  for(var j=40;j<=width;j=j+50)
  {

    plinkos.push(new Plinko(j,75));
  }

  for(var j=40;j<=width;j=j+50)
  {

    plinkos.push(new Plinko(j,275));
  }


  for(var j=15;j<=width;j=j+50)
  {

    plinkos.push(new Plinko(j,175));
  }

  for(var j=15;j<=width;j=j+50)
  {

    plinkos.push(new Plinko(j,375));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
 

  for(var j=0;j<plinkos.length;j++){

    plinkos[j].display();
  }


  for(var j=0;j<divisions.length;j++){

    divisions[k].display();
  }

  for(var j=0;j<particles.length;j++){

    particles[j].display();
  }

  ground.display();


 
}