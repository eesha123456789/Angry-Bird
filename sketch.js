/*var num=10;
console.log(num)
var name='Eesha'
console.log(name)
var bool=true
console.log(bool)
var obj
console.log(obj)
var obj2=null
console.log(obj2)
num=null
console.log(num)
if(obj2===num){
	console.log('matching')
}
var arr=[1,2,name,num]
console.log(arr[3])
console.log(arr[4])
var arr2=[[1,2],[3,4],['Eesha','Teja']]
console.log(arr2[1]) //Prints [3,4]]
arr2.push([1,1])
console.log(arr2[3]) // Prints [1,1]
console.log(arr2)
arr2.pop()
console.log(arr2)*/

//Namespacing - not creating variables
const Engine=Matter.Engine; // constant variables
const Bodies=Matter.Bodies;
const World=Matter.World;
const Constraint=Matter.Constraint

var engine,world,object, ground, ball, pig1, pig2,log1,log2, log3,log4,bird, platform, bgPicture, sling;
var birdOnSling=1
var birdOffSling=0
var gameState=birdOnSling
var box1,box2, box3, box4, box5;
function preload(){
  bgPicture=loadImage('bg.png')
}
function setup() {
  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;

  box1 = new Box(860,750,70,70);
  box2= new Box(1000,750,70,70);
  box3= new Box(860,680,70,70);
  box4 = new Box(1000,680,70,70)
  box5 = new Box(930,600,70,70)
  platform = new Ground(120,700,400,300)
  ground = new Ground(600,height,1200,15);
  pig1 = new Pig(930,750);
  pig2 = new Pig(930,680);
  log1 = new Log(930,715,200,PI/2)
  log2 = new Log(930,630,200,PI/2)
  log3 = new Log(880,600,100,PI/7)
  log4 = new Log(965,600,100,-PI/7)
  bird = new Bird (325,380)
  sling=new Slingshot(bird.body,{x:325,y:380})

  /*var ball_options=
  //{
  //  restitution:0.6, 
  // density: 1
  //}
  ball = Bodies.circle(100,200,20,ball_options) //JSON structure
  //JSON - Java Standard Object Notation
  World.add(world,ball);
  console.log(ball);
  //console.log(object);*/
} 

function draw() {
  background(bgPicture);  
  Engine.update(engine);
  ground.display();
  platform.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  pig2.display();
  box4.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
  sling.display();
  console.log(gameState)
  //ellipseMode(RADIUS)
  //ellipse(ball.position.x,ball.position.y,20,20)
  //drawSprites();
}
function mouseDragged(){
  gameState=birdOnSling
  Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
  
}
function mouseReleased(){
  sling.fly();
  gameState=birdOffSling
}
function keyPressed(){
  if(keyCode===32){
    gameState===birdOnSling
    bird.trajectory=[]
    Matter.Body.setPosition(bird.body,{x:225,y:380})
    sling.attach(bird.body);
  }
}