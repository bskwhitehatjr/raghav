var arrowimg,bowimg,fish1,fish2,fish3,fish4;

function preload()
{
  arrowimg = loadImage("images/arrow.png");
  bowimg = loadImage("images/bow.png");
  fish1i = loadImage("images/fish1.png");
  fish2i = loadImage("images/fish2.png");
  fish3i = loadImage("images/fish3.png");
  fish4i = loadImage("images/fish4.png");
  boat = loadImage("images/boat.jpg");

}
function setup()
{
  createCanvas(1600,800);
  wall1 = createSprite(800,0,1600,10);
  wall2 = createSprite(800,800,1600,10);
  wall3 = createSprite(0,400,10,800);
  wall4 = createSprite(1600,400,10,800);

  fish1 =  createSprite(200,700,30,30);
  fish1.addImage(fish1i);
  fish1.scale = 0.25;

  fish2 =  createSprite(500,700,30,30);
  fish2.addImage(fish2i);
  fish2.scale = 0.25;
  
  fish3 =  createSprite(800,700,30,30);
  fish3.addImage(fish3i);
  fish3.scale = 0.25;
  
  fish4 =  createSprite(1200,700,30,30);
  fish4.addImage(fish4i);
  fish4.scale = 0.25;


  
}

function draw()
{
  background(boat);
  drawSprites();
  fish1.bounceOff(wall1&&wall2&&wall3&&wall4);
  fish2.bounceOff(wall1&&wall2&&wall3&&wall4);
  fish3.bounceOff(wall1&&wall2&&wall3&&wall4);
  fish4.bounceOff(wall1&&wall2&&wall3&&wall4);
}
