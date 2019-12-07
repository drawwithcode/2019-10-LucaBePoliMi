var sign;
var signW;
var signH;
var reference;
var maoAndyImg;

function preload() {

maoAndyImg = loadImage("./assets/MaoAndy.jpg");

}

function setup() {

signW = 500;
signH = 500;

  createCanvas(windowWidth, windowHeight, WEBGL);
  sign = createGraphics(signW, signH);
  sign.textSize(75);

  reference = select("#referenceDiv");
  reference.position(1/28 * windowWidth, 13/14 * windowHeight);
  reference.addClass("reference");
}

function draw() {
  background(0);
  sign.background(maoAndyImg);
  sign.push();
  sign.noStroke();
  sign.fill(0, 0, 0, 127);
sign.rect(0, 0, 500, 500);
  sign.pop();

  sign.fill(255);
  sign.textFont("Trebuchet MS");
  sign.textSize(25);
  sign.push();
  sign.fill(255, 200, 30);
  sign.text("Press M to go to the model", signW/6, signH/6);
  sign.pop();
  sign.text("You will be able to change colors by moving your mouse or to swap them by clicking", signW/6, signH * 2/6, 4/6 * signW, 600);
sign.text("Reference: Mao by Andy Warhol", signW/6, signH * 5/6);

var cameraX = mouseX - width/2;
var cameraY = mouseY - height/2;
camera(cameraX, cameraY, -600, 0, 0, 0, 1, 0, -1);

  texture(sign);
  rotateX(1);
  rotateY(40)
  translate(0, 30, 0);
  noStroke();
  box(height/2, height/2, height/2);
}

function keyTyped() {
  if (key == "m") {

window.open("indexMao.html", "_self");

}

}
