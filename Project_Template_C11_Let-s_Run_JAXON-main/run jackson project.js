var runner,runner_running;
var pathImage;
function preload(){
  //pre-load images
runner_running.loadAnimation("Runner-1.png","Runner-2.png");
pathImage=loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  runner = createSprite(50,160,20,50);
  runner.addAnimation("running",runner_running);
  path = createSprite(200,200);
  path.addImage("path",pathImage);
  path.velocityY=4;
  path.scale=1.2;
}

function draw() {
  background(0);

}
