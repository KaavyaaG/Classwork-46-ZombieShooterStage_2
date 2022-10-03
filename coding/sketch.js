var bgImg
var shooterImg
var shootingImg
var bg 
var player
var zombies
var zombieGroup
var zombieImages
var heart1, heart2 , heart3
var heart1Img,  heart2Img,  heart3Img

function preload(){
    bgImg = loadImage("bg.jpeg")
    shooterImg = loadImage("shooter_2.png")
    shootingImg = loadImage("shooter_3.png")
    zombieImages = loadImage("zombie.png")
    heart1Img = loadImage("heart_1.png")
    heart2Img = loadImage("heart_2.png")
    heart3Img =loadImage("heart_3.png")

}

function setup(){
    createCanvas(windowWidth, windowHeight)
    bg = createSprite(displayWidth/2-20, displayHeight/2-40,20,20)
    bg.addImage(bgImg)
    bg.scale = 1.1
    player = createSprite(displayWidth-1150,displayHeight-300,50,50)
    player.addImage(shooterImg)
    player.scale = 0.3
    player.debug=true
    player.setCollider("rectangle",0,0,300,300)
    
    
    heart1=createSprite(displayWidth-150,40,20,20)
    heart1.visible=false
    heart1.addImage("heart1", heart1Img)
    heart1.scale=0.4

    heart2=createSprite(displayWidth-100,40,20,20)
    heart2.visible=false
    heart2.addImage("heart2", heart2Img)
    heart2.scale=0.4

    heart3=createSprite(displayWidth-150,40,20,20)
    heart3.addImage("heart3", heart3Img)
    heart3.scale=0.4

    zombieGroup= new Group();
}



function draw(){
background(0)

if(keyDown("UP_ARROW")){
    player.y=player.y-30
}

if(keyDown("DOWN_ARROW") || touches.length>0){
    player.y=player.y+30
}

if(keyWentDown("SPACE") ){
   player.addImage(shootingImg)
}
else if(keyWentUp("SPACE")){
    player.addImage(shooterImg)
}

if(zombieGroup.isTouching(player)){
    for(var i=0;i<zombieGroup.length;i++){

    if(zombieGroup[i].isTouching(player)){
        zombieGroup[i].destroy()
    }
    }
}
    enemy()

    drawSprites()
}

function enemy(){
    
    if(frameCount%10==0){
        zombies=createSprite(ramdom(500,1000,100),random(100,500),40,40)
        zombies.addImage("Zombie",zombieImages)
        zombies.scale=0.15
        zombies.velocityX=-3
        zombies.debug=true
        zombies.setCollider("rectangle",0,0,400,400)
        zombies.lifetime=400
        zombieGroup.add(zombies)


    
    }
}

