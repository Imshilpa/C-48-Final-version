var BG_1
var player_1IMG, player_2IMG
var player_1
var ball;
var edges;
var player_1score = 0;
var player_2score = 0;
var gameState = 'play';
var goal1, goal2;
var gameover;
var restart_btn;


function preload() {
  BG_1 = loadImage('BG_2.jpeg');
  player_1IMG = loadImage('Racket1.png');
  player_2IMG = loadImage('Racket2.png');
  ballIMG = loadImage('Ball.png');
  gameover_img = loadImage('Game-over.png.webp');
  restart_btn = loadImage('play-again-2.png');
}

function setup() {
  createCanvas(1200, 700);
  player_1 = createSprite(windowWidth/2-150, windowHeight/2, 50, 50);
  player_1.addImage(player_1IMG);
  player_1.scale = 0.3;
player_1.debug = false;
player_1.setCollider('rectangle',0, 0, 50, 50)

  player_2 = createSprite(windowWidth/2+500, windowHeight/2, 50, 50);
  player_2.addImage(player_2IMG);
  player_2.scale = 0.2;
player_2.debug = false;
player_2.setCollider('rectangle', 0, 0, 50, 50)

  ball = createSprite(windowWidth/2, windowHeight/2,);
  ball.addImage(ballIMG);
  ball.scale = 0.3
  ball.velocityX = 12;
  ball.velocityY = 12;
  ball.debug = false;
  ball.setCollider('circle', 0, 0,50)

  gameover = createSprite(600, 350, 70, 70);
  gameover.addImage(gameover_img);
  gameover.scale = 0.8;

  goal1 = createSprite(-1, 0, 1, 1500);
  goal1.shapeColor = 'red';
  

  goal2 = createSprite(1203, 0, 5, 1500);
  goal2.shapeColor = 'red ';

  restart = createSprite(1100, 100, 10, 70);
  restart.addImage(restart_btn);
  restart.scale = 0.2

  edges = createEdgeSprites()

}

function draw(){
  background(BG_1);


if(gameState == 'play') {

if(keyDown(LEFT_ARROW)) {
  player_1.x -= 10
} 
if(keyDown(RIGHT_ARROW)) {
  player_1.x += 10
}
if(keyDown(UP_ARROW)) {
  player_1.y -= 10
}
if(keyDown(DOWN_ARROW)) {
  player_1.y += 10
}

gameover.visible = false;
restart.visible = false;

player_1.visible =true;
  player_2.visible =true;

if(keyDown('A')) {
  player_2.x -= 10
} 
if(keyDown('D')) {
  player_2.x += 10
}
if(keyDown('W')) {
  player_2.y -= 10
}
if(keyDown('S')) {
  player_2.y += 10
}
createEdgeSprites();

if(ball.isTouching(goal1)) {
player_2score += 1;
}
if(ball.isTouching(goal2)) {
  player_1score += 1;
  }

  if(player_1score == 5 || player_2score == 5) {
    gameState = 'end'
  }
  createEdgeSprites();
ball.bounceOff(player_1);
ball.bounceOff(player_2);
ball.bounceOff(edges);
ball.bounceOff(edges);



}


if(gameState == 'end') {
  ball.velocityX = 0;
  ball.velocityY = 0;
  
  
  gameover.visible = true;
  restart.visible = true;

  if(mousePressedOver(restart)) {
    reset();
  }  

}

  drawSprites(); 
  textSize(30);
  fill('red');
  text(player_1score, 520, 90)

  textSize(30);
  fill('red');
  text(player_2score, 650, 90)

 
}



function reset() {
  gameState = 'play'
 // gameover.visible = false;

  ball.velocityX = 12;
  ball.velocityY = 12;
  player_1.visible =true;
  player_2.visible =true;

  player_1score = 0;
  player_2score = 0;
}

 

  
        
      
    

    
  

  
 
    
    
  
    
    

  
  
  
 





