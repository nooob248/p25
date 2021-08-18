
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin, dustbin2, dustbin3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=createSprite(400,650,1000,20);
	ground.shapeColor="red";
	paper=new Paper(100,600,50,50);
	dustbin=new Dustbin(600,605,10,70);
	dustbin2= new Dustbin(601,605,70,10);
	dustbin3= new Dustbin(602,605,10,70)
	

	Engine.run(engine);
	keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
 
}



