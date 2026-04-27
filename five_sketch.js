//variables
var five, fivestill, second, first, previous, next, nextstill;

//loads images
function preload() {
  five = loadImage("images/5gif.gif");
  fivestill = loadImage("images/5.jpeg");
  first = loadImage("5poemtext/5the.gif");
  second = loadImage("5poemtext/5dont.gif");
  previous = loadImage("images/previous.gif");
  next = loadImage("images/next.gif");
  nextstill = loadImage("images/nextstill.png");
}

//create canvas
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

}

// centers the image to the canvas
  drawX = (width - drawW) / 2;
  drawY = (height - drawH) / 2;
  
  //draws the image to align with the center and be as tall as the width and height of the canvas
  image(fivestill, drawX, drawY, drawW, drawH); //draws image to align with center and be as tall as the width and height of canvas
  if (mouseX > width/3 && mouseX < width/1.5 && mouseY > 320 && mouseY < 780) //animation on hover
  image(five, drawX, drawY, drawW, drawH);
  
 //previous and next buttons appear
  if (frameCount >= 375) { //delay button appear
  if (mouseX > width/1.1 && mouseX < width && mouseY > height/1.2 && mouseY < height){ //animation on hover
  image(next, width/1.1, height/1.2, 150, 125); //next button animates
  } else {
  image(nextstill, width/1.1, height/1.2, 150, 125); //next button appears
  }
}
  if (mouseX > 0 && mouseX < 155 && mouseY > 0 && mouseY < 125) //animation on hover
  image (previous, 0, 0, 150, 125); //previous button appears

  // poem appears here
    if (mouseX > width/3 && mouseX < width/1.5 && mouseY > 0 && mouseY < 175) //animation on hover
  image(first, drawX, drawY, drawW, drawH); //first line poem appears
  if (mouseX > width/3 && mouseX < width/1.5 && mouseY > 175 && mouseY < 330) //animation on hover
  image(second, drawX, drawY, drawW, drawH); //second line poem appears


//coords
//textSize(24);
//text("X: "+mouseX, 0, height/4);
//text("Y: "+mouseY, 0, height/2);


//next + previous page link
if (mouseIsPressed) { //custom functions
  go();
  back();
}
}

//function to go to next page
function go(){
  let button = dist(mouseX, mouseY, width/1.1, height/1.1); //button in specific press point area
  if (button <= 100) {
    window.open('thanks.html', '_self'); //button link to next page
  }
}

//function to go to previous page
function back(){
  let button = dist(mouseX, mouseY, 0, 150); //button in specific press point area
  if (button <= 150) {
    window.open('four.html', '_self') //button link to previous page
  }
}


//this resizes the canvas to the width and height of the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
