
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gamestate = "serve";

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	playButton = createButton("PLAY");
	playButton.position(350, 340);
	playButton.size(100,30);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(gamestate === "serve"){
    playButton.mouseClicked(gameStatePlay);
  }
  else if(gamestate === "play"){
	background(125);
  }
  
  drawSprites();
 
}

function gameStatePlay(){
	gamestate = 'play';
	playButton.hide()

}



