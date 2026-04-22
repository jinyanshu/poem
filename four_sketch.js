//variables
var four, fourstill, second, first, previous, next;

function preload() {
  four = loadImage("images/4gif.gif");
  fourstill = loadImage("images/4.jpeg");
  second = loadImage("4poemtext/4and.gif");
  first = loadImage("4poemtext/4of.gif");
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
  let imgRatio = four.width / four.height;
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
  image(four, drawX, drawY, drawW, drawH);
  
 //previous and next buttons appear
  if (mouseX > 0 && mouseX < 155 && mouseY > 0 && mouseY < 125) //animation on hover
  image (previous, 0, 0, 150, 125); //previous button appears
  if (mouseX > 1700 && mouseX < 2000 && mouseY > 700 && mouseY < 1000) //animation on hover
  image(next, width-150, height-125, 150, 125); //next button appears

  // poem appears here
  

   //coords
textSize(24);
text("X: "+mouseX, 0, height/4);
text("Y: "+mouseY, 0, height/2);
}

//this resizes the canvas to the width and height of the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
