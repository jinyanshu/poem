//variables
var 1gif;

function preload() {
  1gif = loadImage("images/1gif.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("green");
}

function draw() {
  //background
  image(bg, 0, 0, windowWidth, windowHeight);
}
