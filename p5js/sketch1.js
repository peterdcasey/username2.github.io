/*
  Simple example Processing sketch
  Peter
  version: 0.1
*/

let slider;

function setup() {
  colorMode(HSB);
  print("hello world");
  //                 low, high, [value], [step]
  slider = createSlider(20, 100, 50, 5);
  slider.position(220, 75);
  slider.style("width", "150px");
  createElement('h1', 'This is my first Processing sketch');
  createCanvas(600, 700);
}

// Draw is called repeatedly (automatically)
function draw() {
  let val = slider.value();

  if (mouseIsPressed) {
    fill(255);
  } else {
    if (pmouseX != mouseX && pmouseY != mouseY) {
      let r = random(0, 256);
      let g = random(0, 256);
      let b = random(0, 256);

      fill(color(r, g, b));
    }
  }

  ellipse(mouseX, mouseY, val, val);
}
