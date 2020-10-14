// Simple Processing Script
//

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  myColor = color(250, 0, 0);
  fill(myColor);

  rect(mouseX, mouseY, 56, 89);
}
