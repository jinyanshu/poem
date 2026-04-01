//variables
var one;

function preload() {
  one = loadImage("images/one.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("green");
}

function draw() {
  //background
  image(one, 0, 0, windowWidth, windowHeight);
}
