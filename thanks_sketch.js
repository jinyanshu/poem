//variables
var thanks, thanksstill, previous, end, endstill;

function preload() {
  thanks = loadImage("images/thanks.gif");
  thanksstill = loadImage("images/thanksstill.jpeg");
  previous = loadImage("images/previous.gif");
  end = loadImage("images/end.gif");
  endstill = loadImage("images/endstill.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
}

function draw() {
  //background
    // Create a p5 element for the background image and add width and height as methods. This allows it to always cover the canvas 
  let imgRatio = thanks.width / thanks.height;
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
  image(thanksstill, drawX, drawY, drawW, drawH); //draws image to align with center and be as tall as the width and height of canvas
  if (mouseX > width/3 && mouseX < width/1.5 && mouseY > 200 && mouseY < 1000) //animation on hover
  image(thanks, drawX, drawY, drawW, drawH);
  
 //previous and end buttons appear
  if (frameCount >= 375) { //delay button appear
  if (mouseX > width/1.1 && mouseX < width && mouseY > height/1.2 && mouseY < height){ //animation on hover
  image(end, width/1.1, height/1.2, 150, 125); //end button animates
  } else {
  image(endstill, width/1.1, height/1.2, 150, 125); //end button appears
  }
}
  if (mouseX > 0 && mouseX < 155 && mouseY > 0 && mouseY < 125) //animation on hover
  image (previous, 0, 0, 150, 125); //previous button appears


//coords
//textSize(24);
//text("X: "+mouseX, 0, height/4);
//text("Y: "+mouseY, 0, height/2);


//next + previous page link
if (mouseIsPressed) {
  go();
  back();
}
}

//function to go to next page
function go(){
  let button = dist(mouseX, mouseY, width/1.1, height/1.1); 
  if (button <= 100) {
    window.open('index.html', '_self');
  }
}

//function to go to previous page
function back(){
  let button = dist(mouseX, mouseY, 0, 150); 
  if (button <= 150) {
    window.open('five.html', '_self')
  }
}


//this resizes the canvas to the width and height of the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
