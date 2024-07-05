
let canvasWidth = 400;
let canvasHeight = 400;
let points = [];
let yPos = 0;
let xPos = 0;
let numDrops = 300;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  for(let i = 0; i < numDrops; i++){
    xPos = random(0, canvasWidth);
    yPos = random(0, -1 * canvasHeight);
    points.push({yPos: yPos, xPos: xPos});
  }
}

function draw() {
  
  background(220);
 raindrops();
}

function raindrops() {
  for (let point in points) {
  ellipse(points[point].xPos, points[point].yPos, 100, 5);
  points[point].yPos += 1;
  if(points[point].yPos > canvasHeight) {
    points[point].yPos = 0;
    points[point].xPos = random(0, canvasWidth);
  }
}
}