let img;
let xPos;
let yPos;
let xSpeed = 1;
let ySpeed = 1;
let imgHeight = 75;
let imgWidth = 100;
let canvasWidth = 1000;
let canvasHeight = 700;
let numDrops = 100;

function preload() {
	img = loadImage("./images/supr-monky-bal.jpg");
}

function setup() {
	createCanvas(500,300);
	xPos = 0;
	yPos = 0;
} 

function draw() {
	background(147, 7, 132);
	image(img, xPos, yPos, imgWidth, imgHeight);
	xPos += xSpeed;
	yPos += ySpeed;
	if (xPos > 500-100 || xPos < 0) {
		xSpeed *= -1;
	}
	if(yPos > 300-imgHeight || yPos < 0) {
		ySpeed *= -1;
	}
}

/*
background(147, 7, 132);
    circle(width/2, height/2, 25);
    circle(width/2, height/3, 30);
    circle(width/3, height/4, 15);
    circle(width/4, height/5, 10);
    circle(width/3, height/2, 17);

}

function draw() {
    stroke(20, 20, 100);
    fill(20, 20, 100);
    circle(width/5, height/6, 24);
    triangle(10, 10, 30,50, 60,70);
}
*/
