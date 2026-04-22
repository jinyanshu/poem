//variables
var three, threestill, first, second, previous, next;

function preload() {
  three = loadImage("images/3gif.gif");
  threestill = loadImage("images/3.jpeg");
  previous = loadImage("images/previous.gif");
  next = loadImage("images/next.gif");
  first = loadImage("3poemtext/3fert.gif");
  second = loadImage("3poemtext/3let.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
}

function draw() {
  //background
    // Create a p5 element for the background image and add width and height as methods. This allows it to always cover the canvas 
  let imgRatio = three.width / three.height;
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
  image(threestill, drawX, drawY, drawW, drawH); //draws image to align with center and be as tall as the width and height of canvas
  if (mouseX > 630 && mouseX < 1280 && mouseY > 200 && mouseY < 1200) //animation on hover
  image(three, drawX, drawY, drawW, drawH);
  
 //previous and next buttons appear
  if (mouseX > 0 && mouseX < 155 && mouseY > 0 && mouseY < 125) //animation on hover
  image (previous, 0, 0, 150, 125); //previous button appears
  if (mouseX > 1700 && mouseX < 2000 && mouseY > 700 && mouseY < 1000) //animation on hover
  image(next, width-150, height-125, 150, 125); //next button appears

  // poem appears here
  if (mouseX > 300 && mouseX < 680 && mouseY > 70 && mouseY < 300) //animation on hover
  image(first, drawX, drawY, drawW, drawH); //first line poem appears
  if (mouseX > 1200 && mouseX < 1550 && mouseY > 400 && mouseY < 700) //animation on hover
  image(second, drawX, drawY, drawW, drawH); //second line poem appears
  

 //coords
//textSize(24);
//text("X: "+mouseX, 0, height/4);
//text("Y: "+mouseY, 0, height/2);
}

//this resizes the canvas to the width and height of the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
