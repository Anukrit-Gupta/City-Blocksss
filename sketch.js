const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base,ground;
var backgroundImg,platform;
var ball,rope;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    backgroundImg = loadImage("building.gif");
}

function setup(){
    var canvas = createCanvas(1800,900);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(900,height,1800,10);
    base = new buildingbase(900,854,400,80);
    ball = new Ball(800,400,100,100);
    
    rope = new Rope(ball.body,{x:900,y:50})
}

function draw(){
        background(0);
    
        noStroke();
        textSize(35);
        fill("white");
        text("Score  " + score, width-300, 50);

    Engine.update(engine);
    //strokeWeight(4);
    base.display();
   // box2.display();
   //box3.display();
    ground.display();
    ball.display();  
    rope.display();        
}

/*function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}*/

function mouseReleased(){
    rope.fly();
    console.log("creatingAnotherBlock");
    ball1 = new Ball(800,400,100,100);
    rope1 = new Rope(ball1.body,{x:900,y:50})
    gameState = "launched";
    console.log("DisplayingAnotherBlock");
    ball1.display();
    rope1.display(); 
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(bird.body);
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body, {x:200 , y:50});
    }
}