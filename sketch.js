var one, onestill, next, onelet, onewhen, onewhere, nextstill; //variables

//loads images
function preload() {
  one = loadImage("images/1gif.gif"); //gif main image
  onestill = loadImage("images/1.jpeg"); //still main image
  next = loadImage("images/next.gif"); //gif next button
  onelet = loadImage("1poemtext/1let.gif"); //second line
  onewhen = loadImage("1poemtext/1when.gif"); //first line
  onewhere = loadImage("1poemtext/1where.gif"); //third line
  nextstill = loadImage("images/nextstill.png"); //still next button
}

//creates canvas
function setup() {
  createCanvas(windowWidth, windowHeight); //to fit window size
  background("white");
}

function draw() {
  //background responsive
    // background image, width and height as methods. This allows it to always cover the canvas 
  let imgRatio = onestill.width / onestill.height;
    // define the aspect ratio of the canvas
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
  
  image(onestill, drawX, drawY, drawW, drawH); //draws image to align with center and be as tall as the width and height of canvas
   if (mouseX > width/3 && mouseX < width/1.5 && mouseY > 500 && mouseY < 800) //background animation on hover
  image(one, drawX, drawY, drawW, drawH); // animation

//delay button appearance
  if (frameCount >= 375) { //after x frames or seconds button will appear
  if (mouseX > width/1.1 && mouseX < width && mouseY > height/1.2 && mouseY < height){ //animation on hover
  image(next, width/1.1, height/1.2, 150, 125); //next button animates
  } else { //if mouse not in position, still image shows
  image(nextstill, width/1.1, height/1.2, 150, 125); //still next button appears
  }
}


  // poem appears here
   if (mouseX > width/3 && mouseX < width/1.5 && mouseY > 100 && mouseY < 190) //animation on hover
   image(onewhen, drawX, drawY, drawW, drawH); //first line poem appears
   if (mouseX > width/3 && mouseX < width/1.5 && mouseY > 200 && mouseY < 290) //animation on hover
   image(onelet, drawX, drawY, drawW, drawH); //second line poem appears
   if (mouseX > width/3 && mouseX < width/1.5 && mouseY > 300 && mouseY < 370) //animation on hover
   image(onewhere, drawX, drawY, drawW, drawH); //third line poem appears

  //coords
//textSize(24);
//text("X: "+mouseX, 0, height/4);
//text("Y: "+mouseY, 0, height/2);

//next page link when mouse pressed
if (mouseIsPressed) {
  go(); //custom function
}
}

//function to go to next page
function go(){
  let button = dist(mouseX, mouseY, width/1.1, height/1.1); //button in specific press point area
  if (button <= 100) { 
    window.open('two.html', '_self') //button link to next page
  }
}

//this resizes the canvas to the width and height of the browser window making it responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
