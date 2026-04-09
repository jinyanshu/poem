//variables
var one, one1;

function preload() {
  one = loadImage("images/one.gif");
  one1 = createImage("images/one.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("black");
}

function draw() {
  //background
    // Create a p5 element for the background image and add width and height as methods. This allows it to always cover the canvas 
  let imgRatio = one.width / one.height;
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

    //  image(one, 0, 0, windowWidth, windowHeight);
}

// centers the image to the canvas
  drawX = (width - drawW) / 2;
  drawY = (height - drawH) / 2;
  
  //draws the image to align with the center and be as tall as the width and height of the canvas
  image(one, drawX, drawY, drawW, drawH);
  
  // YOur content would go here
  fill(255);
  ellipse(width / 2, height / 2, width * 0.1);
}

//this resizes the canvas to the width and height of the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
