//variables
var bg;

function preload() {
  bg = loadImage("images/1.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("green");
}

function draw() {
  //background
  image(bg, 0, 0, windowWidth, windowHeight);
}
