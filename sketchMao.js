// https://publicdelivery.org/andy-warhols-mao/

var state1 = true;
var state2 = false;
var canvas;
var pencil = false;

function preload(){
mask = loadModel("assets/minimumMao.obj");
}

var maoSurface;
var sign;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
angleMode(DEGREES);

maoSurface = createGraphics(windowWidth, windowHeight);
maoSurface.background(255, 255, 255);

sign = createGraphics(500, 500);
sign.fill(0);
sign.textAlign(CENTER);
sign.text("aaaaaaaa", 150, 150);

textFont("Trebuchet MS");
textSize(16);
textAlign(CENTER, CENTER);
}

var maxColorValue = 255;
var minColorValue = 0;

function draw() {

// Assigning width for mouseY or height for mouseX as values in map() avoids creating grey color

if (state1 == true && state2 == false) {
// background which changes with user mouse movement
background(
  map(mouseX, 0, width, maxColorValue, minColorValue)
  ,
   map(mouseY, 0, height, maxColorValue, minColorValue)
   ,
    map(mouseX, 0, height, minColorValue, maxColorValue)
  );




// face color light
directionalLight(
  map(mouseY, 0, height, maxColorValue, minColorValue)
  ,
   map(mouseX, 0, width, minColorValue, maxColorValue)
   ,
    map(mouseX, 0, height, minColorValue, maxColorValue)
    , -(width/5 / width - 0.5) * 2, -(2* height / height - 0.5) * 2, -1);


// Chest color light
pointLight(

  map(mouseX, 0, width, minColorValue, maxColorValue)
    ,
     map(mouseX, 0, width, maxColorValue, minColorValue)
     ,
    map(mouseY, 0, height, maxColorValue, minColorValue)

  , 0, -70, 80);

// Giving Mao a color which changes with user mouse movement
// Main light

directionalLight(
  map(mouseX, 0, height, minColorValue, maxColorValue)
  ,
   map(mouseY, 0, height, minColorValue, maxColorValue)
   ,
    map(mouseX, 0, height, maxColorValue, minColorValue)
, 1, 0.5, 0);

// Secondary light, smoothens shadows
directionalLight(
  map(mouseX, 0, width, minColorValue, maxColorValue)
  ,
   map(mouseY, 0, height, minColorValue, maxColorValue)
   ,
    map(mouseX, 0, height, maxColorValue, minColorValue)
, -1, 0, 0);

} // end of if statement for state 1


else if (state1 == false && state2 == true) {

  background(
    map(  mouseX, 0, width, minColorValue, maxColorValue)
    ,
     map(mouseY, 0, height, minColorValue, maxColorValue)
     ,
      map(mouseX, 0, height, minColorValue, maxColorValue)
    );

// face color light
directionalLight(
  map(mouseX, 0, height, minColorValue, maxColorValue)
    ,
     map(mouseY, 0, height, maxColorValue, minColorValue)
     ,
    map(mouseY, 0, height, maxColorValue, minColorValue)
    , -(width/5 / width - 0.5) * 2, -(2* height / height - 0.5) * 2, -1);


// Chest color light
pointLight(

  map(mouseX, 0, width, maxColorValue, minColorValue
    )
  ,
   map(mouseX, 0, width, minColorValue, maxColorValue)
   ,
    map(mouseX, 0, height, minColorValue, maxColorValue)

  , 0, -70, 80);

// Giving Mao a color which changes with user mouse movement
// Main light

directionalLight(
  map(mouseX, 0, height, minColorValue, maxColorValue)
  ,
   map(mouseY, 0, height, maxColorValue, minColorValue)
   ,
    map(mouseX, 0, width, maxColorValue, minColorValue)
, 1, 0.5, 0);

// Secondary light, smoothens shadows
directionalLight(
  map(mouseX, 0, height, minColorValue, maxColorValue)
  ,
   map(mouseY, 0, height, maxColorValue, minColorValue)
   ,
    map(mouseX, 0, width, maxColorValue, minColorValue)
, -1, 0, 0);

} // end of if statement for state 2



scale(3);
translate(0, 50, 0);
rotateZ(180);
//rotateY(-6);
rotateX(10);
noStroke();


model(mask);
texture(maoSurface);

}

function mouseClicked() {

if(state1 == true && state2 == false) {

state2 = true;
state1 = false;


}

else if (state1 == false && state2 == true) {

state2 = false;
state1 = true;



}



}
