let y1 = 0;
let x1 = 0;
let x2 = 200;
let y2 = 200;
let x3 = 400;
let y3 = 400;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(215,70,140);
  
if (x1 > 300) {
  fill(50, 70, 120);
} else {fill(569,679,54);}
  stroke (569,679,54);
  
  triangle(x1, y1, x2, y2, x3, y3);
  x1 = x1 + 2;
  y1 = y1 + 2;
  x2 = x2 + 2;
  y2 = y2 + 2;
  x3 = x3 + 2;
  y3 = y3 + 2;
  
  if (x1 > width) {
    x1 =150;
}
  if (y1 > height) {
    y1 = 200;
}
  if (x2 > width) {
    x2 = 200;
}
  if (y2 > height ) {
    y2 = 150;
}
  if (x3 > width) {
    x3 = 250;
}
  if (y3 > height) {
    y3 = 250;
}
  

}