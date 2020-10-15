// Simple Processing Script
//

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  myColor = color(0, 200, 0);
  fill(myColor);

  ellipse(mouseX, mouseY, 56, 56);
}
