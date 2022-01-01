const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
var PLAY = 1
var END = 0
var gameState = PLAY
//var Poste

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);
  

  box1 = new Box(900, 100, 70, 70);
  box2 = new Box(900, 110, 70, 70);
  box3 = new Box(900, 120, 70, 70);
  box4 = new Box(900, 130, 70, 70);
  box5 = new Box(900,140,70,70);
  box6 = new Box(830,100,70,70)
  box7 = new Box(830,110,70,70)
  box8 = new Box(830,120,70,70)
  box9 = new Box(830,130,70,70)
  box10 = new Box(830,140,70,70)
  
}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  //Poste.display();
  
if(gameState === PLAY){
textSize(23)
text("Presiona tecla espaciadora para reacomodar",20,20)
  fill("black")
  box1.display();
  fill("blue")
  box2.display();
  fill("green")
  box3.display();
  fill("red")
  box4.display();
  fill("yellow")
  box5.display();
  fill("white")
  box6.display();
  fill("orange")
  box7.display();
  fill("purple")
  box8.display();
  fill("pink")
  box9.display();
  fill("lightblue")
  box10.display();

  hero.display();
  rope.display();
  monster.display();
  mouseDragged();

}
if(monster.y > 200){

gameState = END

}

if(gameState === END){
textSize(212)
text("dftgy",80,100)

if(keyDown("32")){
reacomodar();
}
}


}

function mouseDragged() {

  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
  
  }

  function reacomodar(){

box1.x = 900
box1.y = 100
box2.x = 900
box2.y = 110
box3.x = 900
box3.y = 120
box4.x = 900
box4.y = 130
box5.x = 900
box5.y = 140
box6.x = 830
box6.y = 100
box7.x = 830
box7.y = 110
box8.x = 830
box8.y = 120
box9.x = 830
box9.y = 130
box10.x = 830
box10.y = 140

monster.x = 1100
monster.y = 550

  }     
