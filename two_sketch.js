//variables
var two;
var previous;
var next;

function preload() {
  two = loadImage("images/2gif.gif");
  previous = loadImage("images/previous.gif");
  next = loadImage("images/next.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
}

function draw() {
  //background
    // Create a p5 element for the background image and add width and height as methods. This allows it to always cover the canvas 
  let imgRatio = two.width / two.height;
    // here you define the aspect ratio of the canvas
  let canvasRatio = width / height;
    // here you are creating variables that can be used to adjust the background image to the canvas ratio
  let drawW, drawH, drawX, drawY;

    if (canvasRatio > imgRatio) {
    // if the canvas is wider than image ratio then fit to width
    drawW = width;
    drawH = width / imgRatio;
  } else {
    // if the canvas is taller than image ratio — fit to height
    drawH = height;
    drawW = height * imgRatio;

    //  image(var, 0, 0, windowWidth, windowHeight);
}

// centers the image to the canvas
  drawX = (width - drawW) / 2;
  drawY = (height - drawH) / 2;
  
  //draws the image to align with the center and be as tall as the width and height of the canvas
  image(two, drawX, drawY, drawW, drawH);
  
  // poem appears here
  
}
//previous and next buttons appear
image (previous, 100, 100);
  if (mouseIsPressed) {
    click();
  }

function click() {
  let button = dist(mouseX, mouseY, previous.x, previous.y);
  if (button <= 50) {

   window.open("two.html")
  }
}

//this resizes the canvas to the width and height of the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
