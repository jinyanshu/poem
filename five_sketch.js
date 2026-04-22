//variables
var five, fivestill, second, first, previous;

function preload() {
  five = loadImage("images/5gif.gif");
  fivestill = loadImage("images/5.jpeg");
  first = loadImage("5poemtext/5the.gif");
  second = loadImage("5poemtext/5dont.gif");
  previous = loadImage("images/previous.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
}

function draw() {
  //background
    // Create a p5 element for the background image and add width and height as methods. This allows it to always cover the canvas 
  let imgRatio = five.width / five.height;
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
  image(fivestill, drawX, drawY, drawW, drawH); //draws image to align with center and be as tall as the width and height of canvas
  if (mouseX > 700 && mouseX < 1220 && mouseY > 320 && mouseY < 780) //animation on hover
  image(five, drawX, drawY, drawW, drawH);
  
 //previous button appears
  if (mouseX > 0 && mouseX < 155 && mouseY > 0 && mouseY < 125) //animation on hover
  image (previous, 0, 0, 150, 125); //previous button appears

  // poem appears here
    if (mouseX > 500 && mouseX < 1460 && mouseY > 0 && mouseY < 125) //animation on hover
  image(first, drawX, drawY, drawW, drawH); //first line poem appears
  if (mouseX > 500 && mouseX < 1460 && mouseY > 130 && mouseY < 250) //animation on hover
  image(second, drawX, drawY, drawW, drawH); //second line poem appears


//coords
//textSize(24);
//text("X: "+mouseX, 0, height/4);
//text("Y: "+mouseY, 0, height/2);


//previous page link
if (mouseIsPressed) {
  back();
}
}
//function to go to previous page
function back(){
  let button = dist(mouseX, mouseY, 0, 150); 
  if (button <= 150) {
    window.open('four.html', '_self')
  }
}

//this resizes the canvas to the width and height of the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
