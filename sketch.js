const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800,320,50,50);
    box2 = new Box(1000,320,50,50);
    Pig1 = new Pig (900,320,50,50);
    log1 = new Log(900,250,250,PI/2),
    box3 = new Box(800,200,50,50),
    box4 = new Box(1000,200,50,50),
    pig2 = new Pig(900,200,50,50),
    log2 = new Log(900,150,250,PI/2),
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    log1.display();
    Pig1.display();
    box3.display();
    box4.display(),
    pig2.display(),
    log2.display(),
    ground.display();
}