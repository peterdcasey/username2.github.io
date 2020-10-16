function setup() {
  createCanvas(600, 400); // height, width
  background(200); // 0..255 shades of gray
}

// The draw function is called repeatedly, over and over.... forever
function draw() {
  fill(150);
  stroke(0);
  rect(20, 20, 130); // x, y, size

  point(100, 100);
  point(101, 101);
  // point(mouseX, mouseY);

  fill(255);
  stroke(0);
  ellipse(mouseX, mouseY, 50);
}
