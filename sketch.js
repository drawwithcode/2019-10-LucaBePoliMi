// Initializing variables for creategraphics
var sign;
var signW;
var signH;

// html element
var reference;

// and image
var maoAndyImg;

function preload() {

  maoAndyImg = loadImage("./assets/MaoAndy.jpg");

}

function setup() {

  // setting variables for width and height of creategraphics
  signW = 500;
  signH = 500;

  createCanvas(windowWidth, windowHeight, WEBGL);
  sign = createGraphics(signW, signH);

  // setting html element which will contain a link
  reference = select("#referenceDiv");
  reference.position(1 / 28 * windowWidth, 13 / 14 * windowHeight);
  reference.addClass("reference");
}

function draw() {
  background(0);

  // setting the previous image as background
  sign.background(maoAndyImg);

  // creating a 50% opacity rectangle to ensure readability
  sign.push();
  sign.noStroke();
  sign.fill(0, 0, 0, 127);
  sign.rect(0, 0, 500, 500);
  sign.pop();

  // creating instructions
  sign.fill(255);
  sign.textFont("Trebuchet MS");
  sign.textSize(25);
  sign.push();
  sign.fill(255, 200, 30);
  sign.text("Press M to go to the model", signW / 6, signH / 6);
  sign.pop();
  sign.text("You will be able to change colors by moving your mouse or to swap them by clicking. You can also click and drag to rotate the model or zoom with your mouse wheel", signW / 6, signH * 2 / 6, 4 / 6 * signW, 600);
  sign.text("Inspired to Mao by Andy Warhol", signW / 6, signH * 5 / 6);

  //setting the camera for the instructions cube
  var cameraX = mouseX - width / 2;
  var cameraY = mouseY - height / 2;
  camera(cameraX, cameraY, -600, 0, 0, 0, 1, 0, -1);

  // creating the instructions cube with the creategraphics and so its contents as texture
  texture(sign);
  rotateX(1);
  rotateY(40)
  translate(0, 30, 0);
  noStroke();
  box(height / 2, height / 2, height / 2);
}

// pressing M will allow to open the page with the 3d model of Mao
function keyTyped() {
  if (key == "m") {

    window.open("indexMao.html", "_self");

  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
