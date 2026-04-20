var one, onestill, next, nextstill; //variables

function preload() {
  one = loadImage("images/one.gif"); //gif main image
  onestill = loadImage("images/1.jpeg"); //still main image
  next = loadImage("images/next.gif"); //gif next button
  nextstill = loadImage("images/nextstill.png"); //still next button
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");

  //previous and next interaction
  //link = createA('two.html', '<img src="images/next.gif" alt="next">');
  //link.position(width-150, height-125);
}

function draw() {
  //background
    // Create a p5 element for the background image and add width and height as methods. This allows it to always cover the canvas 
  let imgRatio = onestill.width / onestill.height;
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
  
  image(onestill, drawX, drawY, drawW, drawH); //draws image to align with center and be as tall as the width and height of canvas
   if (mouseX > 700 && mouseX < 1500 && mouseY > 500 && mouseY < 800) //animation on hover
  image(one, drawX, drawY, drawW, drawH);

  //image (nextstill, width-150, height-125, 150, 125); //next button
   if (mouseX > 1700 && mouseX < 2000 && mouseY > 700 && mouseY < 1000) //animation on hover
   image(next, width-150, height-125, 150, 125);


  // poem appears here
  
//textSize(24);
//text("X: "+mouseX, 0, height/4);
//text("Y: "+mouseY, 0, height/2);
}

//this resizes the canvas to the width and height of the browser window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
