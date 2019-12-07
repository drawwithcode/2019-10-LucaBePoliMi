// Initializing variables for different colored states
var state1 = true;
var state2 = false;


function preload() {
  // loading the 3d model of Mao
  mao = loadModel("assets/minimumMao.obj");
}

// setting variable for creategraphics
var maoSurface;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);

  maoSurface = createGraphics(windowWidth, windowHeight);
  // the background is 255 so that all the colors can be enlightened by light sources
  // the colors will be given infact by light sources, not by the background color of the surface
  // this way the 3d model can be colored by many colors of any value the mouse x and y will generate
  // while if I used the mouse x and y directly to generate the background color
  // the lights could shine of just a limited range of rgb values, limit given by the background color
  maoSurface.background(255, 255, 255);
}

// principal variables used to map color
var maxColorValue = 255;
var minColorValue = 0;

function draw() {

  // Assigning width for mouseY or height for mouseX as values in map() avoids creating grey color
  // because this way the rgb values won't ever be the all same

  // colors state 1, standard
  if (state1 == true && state2 == false) {
    // background
    background(
      map(mouseX, 0, width, maxColorValue, minColorValue),
      map(mouseY, 0, height, maxColorValue, minColorValue),
      map(mouseX, 0, height, minColorValue, maxColorValue)
    );




    // face color light
    directionalLight(
      map(mouseY, 0, height, maxColorValue, minColorValue),
      map(mouseX, 0, width, minColorValue, maxColorValue),
      map(mouseX, 0, height, minColorValue, maxColorValue), -(width / 5 / width - 0.5) * 2, -(2 * height / height - 0.5) * 2, -1);


    // Chest color light
    pointLight(

      map(mouseX, 0, width, minColorValue, maxColorValue),
      map(mouseX, 0, width, maxColorValue, minColorValue),
      map(mouseY, 0, height, maxColorValue, minColorValue), 0, -70, 80);

    // Giving Mao the main color with lights
    // Main light
    directionalLight(
      map(mouseX, 0, height, minColorValue, maxColorValue),
      map(mouseY, 0, height, minColorValue, maxColorValue),
      map(mouseX, 0, height, maxColorValue, minColorValue), 1, 0.5, 0);

    // Secondary light, smoothens shadows
    directionalLight(
      map(mouseX, 0, width, minColorValue, maxColorValue),
      map(mouseY, 0, height, minColorValue, maxColorValue),
      map(mouseX, 0, height, maxColorValue, minColorValue), -1, 0, 0);

  } // end of if statement for state 1

  // color state 2, after click
  else if (state1 == false && state2 == true) {

    background(
      map(mouseX, 0, width, minColorValue, maxColorValue),
      map(mouseY, 0, height, minColorValue, maxColorValue),
      map(mouseX, 0, height, minColorValue, maxColorValue)
    );

    // face color light
    directionalLight(
      map(mouseX, 0, height, minColorValue, maxColorValue),
      map(mouseY, 0, height, maxColorValue, minColorValue),
      map(mouseY, 0, height, maxColorValue, minColorValue), -(width / 5 / width - 0.5) * 2, -(2 * height / height - 0.5) * 2, -1);


    // Chest color light
    pointLight(

      map(mouseX, 0, width, maxColorValue, minColorValue),
      map(mouseX, 0, width, minColorValue, maxColorValue),
      map(mouseX, 0, height, minColorValue, maxColorValue), 0, -70, 80);

    // Giving Mao the main colors with lights
    // Main light

    directionalLight(
      map(mouseX, 0, height, minColorValue, maxColorValue),
      map(mouseY, 0, height, maxColorValue, minColorValue),
      map(mouseX, 0, width, maxColorValue, minColorValue), 1, 0.5, 0);

    // Secondary light, smoothens shadows
    directionalLight(
      map(mouseX, 0, height, minColorValue, maxColorValue),
      map(mouseY, 0, height, maxColorValue, minColorValue),
      map(mouseX, 0, width, maxColorValue, minColorValue), -1, 0, 0);

  } // end of if statement for state 2


  // enlarging the 3d model
  scale(3);

  translate(0, 50, 0);

  // to have him not upside down
  rotateZ(180);

  //rotateY(-6); apply this to have him looking at you

  // slightly inclined, less monumental, more faithful to the reference
  rotateX(10);

  //avoiding black borders contaminating the colors
  noStroke();

  // rendering the model
  model(mao);

  // applying the model the white creategraphics as texture
  texture(maoSurface);

}
// clicking will swap colors
function mouseClicked() {

  if (state1 == true && state2 == false) {

    state2 = true;
    state1 = false;


  } else if (state1 == false && state2 == true) {

    state2 = false;
    state1 = true;



  }



}
