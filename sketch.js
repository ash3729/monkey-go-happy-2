var monkey,monkeyani;
var jungle,jungleimg;
var rock1,rockimg;
var invis;
var banana1,bananaimg;
var score = 0;


function preload(){

monkeyani = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")

jungleimg = loadImage("jungle.jpg");
rockimg = loadImage("stone.png")
bananaimg = loadImage("banana.png")
}



function setup() {
  jungle = createSprite(200,200);
  jungle.addImage(jungleimg);
  
  monkey = createSprite(50,350);
  monkey.addAnimation("running",monkeyani);
  monkey.scale = 0.1;

  invis = createSprite(200,395,800,10);
  invis.visible = false;

  rockgroup = new Group();
}

function draw() {
  background(220,60,110);
monkey.velocityY = monkey.velocityY+1;
  monkey.collide(invis);
  banana();
  rock();
  if(keyDown("space")){
     monkey.velocityY = -10;
     }
  
  if(rockgroup.isTouching(monkey)){
     monkey.scale = 0.05;
     }
  
  score = score+1;
  
drawSprites();
stroke("white");
textSize (20);
fill ("white");
text("Survival Time: "+score,50,100);

}




function rock(){
if(frameCount % 60 === 0){
  rock1 = createSprite(500,350,30,40);
  rock1.addImage(rockimg);
  rock1.scale = 0.2;
  rock1.velocityX = -5;
   rockgroup.add(rock1);
if(rock1.isTouching(monkey)){
     monkey.scale = 0.05;
  rockgroup.setvelocityXEach = 0;
     }
}
}
function banana(){
if(frameCount % 50 === 0){
  banana1 = createSprite(500,300,30,40);
  banana1.addImage(bananaimg);
  banana1.scale = 0.05;
  banana1.velocityX = -5;
}



}

