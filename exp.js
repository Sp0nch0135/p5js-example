function setup() {
    createCanvas(100, 100);
  
    background(200);
  
    stroke(0);
    strokeWeight(5);
    point(85, 20);
    point(15, 80);
  
    stroke(255, 0, 0);
    point(10, 10);
    point(90, 90);
  
    noFill();
    stroke(0);
    strokeWeight(1);
    bezier(85, 20, 10, 10, 90, 90, 15, 80);
  
    stroke(255, 0, 0);
    line(85, 20, 10, 10);
    line(15, 80, 90, 90);
  
    describe(
      'A gray square with three curves. A black s-curve has two straight, red lines that extend from its ends. The endpoints of all the curves are marked with dots.'
    );
  }