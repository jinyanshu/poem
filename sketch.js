//variables
var one_loadImg, one_createImg;

function preload() {
  one_loadImage = loadImage("images/one.gif");
  one_createImg = createImg("images/one.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("green");
}

function draw() {
  //background
  image(one, 0, 0, windowWidth, windowHeight);
}
