const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var Box1;
var Box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    Box1=new Box(200,200,20,20);
    Box2=new Box(210,175,20,20);

    ground=new Ground(200,390,400,20);
    /*var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);*/
}

function draw(){
    background(0);
    Engine.update(engine);
    Box1.display();
    Box2.display();
    ground.display();
    /*rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);*/
}
