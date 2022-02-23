let rocket;
//let inimigo1;
let star1Img,star2Img,rocketImg,powerImg,asteroidImg,inimigo1;
let gameState = "serve";
let score = 0;
//let lifes = 3;

function preload(){
  star1Img = loadImage("star01_2D0.png");
  star2Img = loadImage("star02_2D0.png");
  rocketImg = loadImage("rocket2D0.png");
  powerImg = loadImage("poder+.png");
  asteroidImg = loadImage("asteroide2D.png");
  lifesImg = loadImage("Heart2D0.png");
}

function setup(){
  createCanvas(500,300);
  edges = createEdgeSprites();
  rocket = createSprite(-40,150,20,20);
  rocket.scale = 0.15;
  rocket.addImage(rocketImg);
}

function draw() {
  background(0);
  spawnSTARS1();
  spawnSTARS2();
  if(gameState == "serve"){
    if(keyDown("SPACE")){
      gameState = "fase1";
    }
  }
  if(gameState == "fase1"){
      rocket.velocityX = + 3;
    if(rocket.x > 100){
        rocket.velocityX = 0;
      gameState = "play";
    }
  }
    if(gameState == "play"){
      ballas1();
      spawnPOWERS();
      spawnASTEROIDS();
      rocket.bounceOff(edges);
      if(keyDown("W")){
        rocket.y = rocket.y - 5;
      }
      if(keyDown("S")){
        rocket.y = rocket.y + 5;
      }
      if(keyDown("A")){
        rocket.x = rocket.x - 5;
      }
      if(keyDown("D")){
        rocket.x = rocket.x + 5;
      }
      if(keyDown("UP")){
        rocket.y = rocket.y - 5;
      }
      if(keyDown("DOWN")){
        rocket.y = rocket.y + 5;
      }
      if(keyDown("LEFT")){
        rocket.x = rocket.x - 5;
      }
      if(keyDown("RIGHT")){
        rocket.x = rocket.x + 5;
      }
    }
    //if(rocket.isTouching(?)){
    //  rocket.destroy();
    //  lifes = lifes - 1;
    //}
  //if(gameState == "end"){
  //
  //}
  //if(gameState == "gameOver"){
  //
  //}
  drawSprites();

  //////////TEXTOS/////////

  if(gameState == "serve"){
    textSize(20);
    fill("white");
    text("Press SPACE to play!",150,250);
    textSize(15);
    fill("white");
    text("v0.1",465,295);
  }
}

function spawnSTARS1(){
  if(frameCount % 8 === 0){
    let star1 = createSprite(500,150,10,10);
    star1.addImage(star1Img);
    star1.lifetime = 150;
    star1.velocityX = - 4;
    star1.y = Math.round(random(1,299));
    star1.x = Math.round(random(1,499));
    rocket.depth = star1.depth;
    rocket.depth += 1;
  }
}

function spawnSTARS2(){
  if(frameCount % 8 === 0){
    let star2 = createSprite(500,150,10,10);
    star2.addImage(star2Img);
    star2.scale = 5;
    star2.lifetime = 150;
    star2.velocityX = - 4;
    star2.y = Math.round(random(1,299));
    star2.x = Math.round(random(1,499));
    rocket.depth = star2.depth;
    rocket.depth += 1;
  }
}

function spawnASTEROIDS(){
  if(frameCount % 18 === 0){
    let asteroid = createSprite(500,150,10,10);
    asteroid.addImage(asteroidImg);
    asteroid.scale = (random(0.03,0.1));
    asteroid.lifetime = 600/asteroid.velocityX;
    asteroid.rotation = Math.round(random(1,360));
    asteroid.velocityX = Math.round(random(-1,-10));
    asteroid.y = Math.round(random(1,299));
    asteroid.x = 600;
  }
}

function spawnPOWERS(){
  if(frameCount % 1000 === 0){
    let power1 = createSprite(500,150,10,10);
    power1.addImage(powerImg);
    power1.scale = 0.08;
    power1.lifetime = 200;
    power1.velocityX = - 3;
    power1.y = Math.round(random(10,289));
    power1.x = 600;
  }
}

function ballas1(){
  if(frameCount % 6 === 0){
    let bala1 = createSprite(200,200,18,3.5);
    bala1.shapeColor = "yellow";
    bala1.lifetime = 60;
    bala1.velocityX = + 10;
    bala1.x = rocket.x + 40;
    bala1.y = rocket.y;
    bala1.depth = rocket.depth;
    bala1.depth += 1;
  }
}