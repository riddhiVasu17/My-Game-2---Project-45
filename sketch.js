const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImg;
var scoreImg;
var dart1;
var target1, target2, target3;
var slingy;
var wall;

function preload() {
    bgImg = loadImage("Design/bg.jpg");
    scoreImg = loadImage("Design/Score.png");
}
function setup() {
    createCanvas(displayWidth, displayHeight-111);

    engine = Engine.create();
    world = engine.world;

    dart1 = new Dart(300, 450);

    wall = new Ground(1200, 430, 200, 300);

    slingy = new SlingShot(dart1.body, {x:300, y:450})

}


function draw() {

    background(bgImg);

    Engine.update(engine);

    image(scoreImg, 30, 20);

    drawTargets();

    drawSprites();

    slingy.display();
    dart1.display();

}

function drawTargets() {
    target1 = createSprite(1200, 430);

    target1.draw = function() { 
        fill("#CC0000");
        ellipse(0,0,200,300) 
    };

    target2 = createSprite(1200, 430);

    target2.draw = function() { 
        fill(255);
        ellipse(0,0,120,200) 
    };

    target3 = createSprite(1200, 430);

    target3.draw = function() { 
        fill("#CC0000");
        ellipse(0,0,50,100) 
    };
}

function mouseDragged(){
    Matter.Body.setPosition(dart1.body, {x: mouseX , y: mouseY});
  }
  
  function mouseReleased(){
    slingy.fly();
  }
  
  function keyPressed() {
      if (keyCode === 32) {
          slingy.attach(dart1.body);
      }
  }