var backgroundImage;
var cat, catImage, catAnimation;
var mouse, mouseImage;


function preload() {
    backgroundImage = loadImage("images/garden.png");
    mouseImage = loadImage("images/mouse1.png");
    catImage = loadImage("images/cat1.png");
    catAnimation = loadAnimation("images/cat2.png", "images/cat3.png");
    mouseLast = loadImage("images/mouse4.png");
    catLast = loadImage("images/cat4.png");
}

function setup(){
    var Canvas = createCanvas(1000,800);
    mouse = createSprite(170, 600, 30, 30);
    mouse.addImage("hi", mouseImage);
    mouse.scale = 0.2;
    
    cat = createSprite(830, 600, 30, 30);
    cat.addImage("hi", catImage);
    cat.scale = 0.2;
    

}

function draw() {

    background(backgroundImage);

    if(cat.x - mouse.x < (cat.width - mouse.width)/32){
        console.log("hi");
        cat.velocityX = 0;
        mouse.addImage("hi", mouseLast);
        cat.addImage("hi", catLast);
    }


    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
      cat.velocityX = -5;
      cat.addAnimation("hi", catAnimation);
  }

}
