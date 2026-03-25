//variables
let bg;
//variable for background image

function preload() {
  bg = loadImage("1.jpeg");
}

function setup() {
  createCanvas(width, height);
}

function draw() {
  //background
  image(bg, 0, 0, width, height);

  fill("#E8C0A0");
  noStroke();
  ellipse(width / 2, height / 2, 225, 300);
}
