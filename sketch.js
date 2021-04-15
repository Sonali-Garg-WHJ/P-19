var girl, girlImg, evil, evilImg, stone, stoneImg, flower, flowerImg, bucket, bucketImg, village, villageImg;
var evilGroup, bucketGroup, stoneGroup, flowerGroup;
var score = 0;

function preload() {
  //girlImg = loadAnimation("girl2.png","girl3.png","girl4.png");
  girlImg = loadImage("Picture1.png");
  evilImg = loadImage("Picture4.png");
  stoneImg = loadImage("Picture2.png");
  flowerImg = loadImage("Picture5.png");
  bucketImg = loadImage("Picture3.png");
  villageImg = loadImage("back1.jpg");
}

function setup() {
  createCanvas(600, 400);
  // creating village scene
  village = createSprite(0, 0, 600, 400);
  village.addImage(villageImg);
  village.scale = 5;
  village.velocityX = -5;

  // creating girl
  girl = createSprite(500, 350, 50, 50);
  girl.addAnimation("running", girlImg);
  girl.scale = 0.5;

  // creating group for each item
  bucketGroup = new Group();
  evilGroup = new Group();
  stoneGroup = new Group();
  flowerGroup = new Group();
}

function draw() {
  background("white");
  // movement of ground
  if (village.x < 100) {
    village.x = 600;
  }
  // Girl Movement
  // right movement
  if (keyDown("right_arrow")) {
    girl.x = girl.x + 5;
  }
  // left movement
  if (keyDown("left_arrow")) {
    girl.x = girl.x - 5;
  }

  // Adding Score condition and game over
  if (bucketGroup.isTouching(girl)) {
    score = score + 2;
    bucketGroup.destroyEach();
  } else if (stoneGroup.isTouching(girl)) {
    score = score - 3;
    stoneGroup.destroyEach();
  } else if (flowerGroup.isTouching(girl)) {
    score = score + 5;
    flowerGroup.destroyEach();
  } else if (evilGroup.isTouching(girl)) {
    score = 0
    flowerGroup.destroyEach();
    stoneGroup.destroyEach();
    bucketGroup.destroyEach();
    evilGroup.destroyEach();
  }
  // Spawning various items towards girl
  spawnBucket();
  spawnStone();
  spawnEvil();
  spawnFlower();
  drawSprites();

  text("Score = " + score, 400, 20);

}

// Spawn Buckets
function spawnBucket() {
  if (frameCount % 370 === 0) {
    bucket = createSprite(Math.round(random(0, 600)), 0, 20, 20);
    bucket.addImage(bucketImg);
    bucket.scale = 0.2;
    bucket.lifetime = 300;
    bucket.velocityY = 3;
    bucketGroup.add(bucket);
  }
}

// Spawn Stone
function spawnStone() {
  if (frameCount % 160 === 0) {
    stone = createSprite(Math.round(random(0, 600)), 0, 20, 20);
    stone.addImage(stoneImg);
    stone.scale = 0.2;
    stone.lifetime = 300;
    stone.velocityY = 2;
    stoneGroup.add(stone);
  }
}

// Spawn Flower
function spawnFlower() {
  if (frameCount % 270 === 0) {
    flower = createSprite(Math.round(random(0, 600)), 0, 20, 20);
    flower.addImage(flowerImg);
    flower.scale = 0.5;
    flower.lifetime = 300;
    flower.velocityY = 3;
    flowerGroup.add(flower);
  }
}

// Spawn Evil
function spawnEvil() {
  if (frameCount % 200 === 0) {
    evil = createSprite(Math.round(random(0, 600)), 0, 20, 20);
    evil.addImage(evilImg);
    evil.scale = 0.2;
    evil.lifetime = 300;
    evil.velocityY = 5;
    evilGroup.add(evil);
  }
}