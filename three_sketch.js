//variables
var three_loadImg, three_createImg;

function preload() {
  three_loadImage = loadImage("images/3gif.gif");
  three_createImg = createImg("images/3gif.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  //background
  image(one, 0, 0, windowWidth, windowHeight);
}
