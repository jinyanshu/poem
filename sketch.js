//variables
var bg;

function preload() {
  bg = image("1.jpeg");
}

function setup() {
  createCanvas(width, height);
}

function draw() {
  //background
  image(bg, 0, 0, width, height);
}
