var playership,playershipImg;
var alienship1,alienship2,alienship3,alienship4,alienship1Img,alienship1Img,alienship2Img,alienship3Img,alienship4Img;
var key1,key2,key1Img,key2Img;
var ground;
var bg,backgroundImg;

function preload (){
    playershipImg = loadImage("ship.jpg");
    backgroundImg = loadImage("background.jpg");
    alienship1Img = loadImage("alienship1.png");
    alienship2Img = loadImage("alienship2.png");
    alienship3Img = loadImage("alienship3.png");
    alienship4Img = loadImage("alienship4.png");
    key1Img       = loadImage("key.jpg");
    key2Img       = loadImage("key1.jpg");
}

function setup (){
    createCanvas(1000,1000);

    bg = createSprite(0,0,1000,1000);
    bg.x = bg.width/2;
    

    playership = createSprite(200,200,50,50);
    playership.scale = 0.5;
    


    alienGroup = new Group();
    keyGroup = new Group();
    
}
function draw(){
    background.addImage(backgroundImg);
    playership.addImage(playershipImg);

    if(keyDown("left_arrow")){
        playership.x = playership.x -3;
    }
    if(keyDown("right_arrow")){
        playership.x = playership.x +3;
    }
    if(keyDown("space")){
        playership.velocityY = -10;
    }
    playership.velocityY = playership.velocityY + 0.8;

    if(bg.y>750){
        bg.y = 300;
    }
    spawnAlien();
    spawnKey();
    drawSprites();
}

function spawnAlien(){
  if(frameCount % 50 === 0){
    var alien = createSprite(0,0,10,20);
    alien.velocityY = 5;

    var rand = Math.round(random(1,4));
    switch(rand){
      case 1: alien.addImage(alienship1Img);
              break;
      case 2: alien.addImage(alienship2Img);
              break;
      case 3: alien.addImage(alienship3Img);
              break;
      case 4: alien.addImage(alienship4Img);
              break;
              default: break;
    }
    alien.scale = 0.5
    alien.lifetime = 140;

    alienGroup.add(alien);
  }

}

function spawnKey(){
  if(frameCount % 200 === 0){
    var key = createSprite(700,90,10,40);
    key.velocityX = -6;

    var rand = Math.round(random(1,2));
    switch(rand){
      case 1: key.addImage(key1Img);
              break;
      case 2: key.addImage(key2Img);
              break;
              default: break;
    }
    key.scale = 0.5
    key.lifetime = 116;

    keyGroup.add(key);
  }

}