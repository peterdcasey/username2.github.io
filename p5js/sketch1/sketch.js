// Simple Processing Script
//

function setup() {
  let cnv = createCanvas(600, 600);
  cnv.parent("sketchHolder")
  background(220);
}

function draw() {
  myColor = color(250, 0, 0);
  fill(myColor);

  rect(mouseX, mouseY, 56, 89);
}
