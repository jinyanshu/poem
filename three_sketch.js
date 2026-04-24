//variables
var three, threestill, first, second, previous, next, nextstill;

function preload() {
  three = loadImage("images/3gif.gif");
  threestill = loadImage("images/3.jpeg");
  previous = loadImage("images/previous.gif");
  next = loadImage("images/next.gif");
  nextstill = loadImage("images/nextstill.png");
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
  if (mouseX > width/3 && mouseX < width/1.5 && mouseY > 200 && mouseY < 1200) //animation on hover
  image(three, drawX, drawY, drawW, drawH);
  
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
  if (mouseX > width/4 && mouseX < width/2 && mouseY > 70 && mouseY < 300) //animation on hover
  image(first, drawX, drawY, drawW, drawH); //first line poem appears
  if (mouseX > width/1.8 && mouseX < width/0.3 && mouseY > 400 && mouseY < 700) //animation on hover
  image(second, drawX, drawY, drawW, drawH); //second line poem appears
  

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
    window.open('four.html', '_self');
  }
}

//function to go to previous page
function back(){
  let button = dist(mouseX, mouseY, 0, 150); 
  if (button <= 150) {
    window.open('two.html', '_self')
  }
}

//this resizes the canvas to the width and height of the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
