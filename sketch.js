const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  ground;
var ball, ball1,ball2,ball3,ball4,rope,rope1,rope2,rope3,rope4;

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  ball = new Ball(200, 200, 25, 80);
  ball1 = new Ball(250,200,25,80);
  ball2 = new Ball(300,200,25,80);
  ball3 = new Ball(350,200,25,80);
  ball4 = new Ball(400,200,25,80);

  rope = new Rope(ball.body, { x: 500, y: 100 });
  rope1 = new Rope(ball1.body,{x: 550,y:100});
  rope2 = new Rope(ball2.body,{x:600,y:100});
  rope3 = new Rope(ball3.body,{x:650,y:100});
  rope4 = new Rope(ball4.body,{x:700,y:100});
}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();

  ball.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();

  rope.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();

}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
