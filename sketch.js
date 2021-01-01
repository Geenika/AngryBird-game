const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bgImg ;
var flySound;
var levelSound;
var flyingSound;
var engine, world;
var box1, pig1;

function preload(){

    bgImg = loadImage("sprites/b_g.png")
    levelSound = loadSound("sprites/level.mp3")
    flySound = loadSound("sprites/fly.mp3")
    flyingSound = loadSound("sprites/flying.mp3")


}
   

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    //flySound.play()

   platform = new Ground(100,350,300,300); 
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2); 

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 200);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);
    sling1 = new SlingShot(bird.body , {x:200,y:80})
}

function draw(){
    background(bgImg);
    Engine.update(engine);
   
    box1.display();
    box2.display();
    platform.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    sling1.display();
    bird.display();
}

function mouseDragged(){
Matter.Body.setPosition(bird.body ,  {x: mouseX , y: mouseY})
}
 function mouseReleased(){
    sling1.fly()
  //  flySound.play()
 }

