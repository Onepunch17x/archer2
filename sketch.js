const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player1, player2;
var base1, base2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  //Initialising Engine
  engine = Engine.create();
  world = engine.world;

  //Create Player Base and Computer Base Object
  base1 = new ComputerBase(300, random(450, height - 300), 180, 150);
  player1 = new Player(285,base1.body.position.y-153,50,180);
  base2= new Base(1100, random(450, height - 300), 180, 150);
  player2 = new Player(1100,base2.body.position.y-153,50,180)

}

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  //Display Playerbase and computer base 
  base1.display();
  base2.display();


  //display Player and computerplayer
player1.display();
player2.display();


}
