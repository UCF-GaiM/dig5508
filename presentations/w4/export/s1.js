let sketch1 = function (p) {
  let circleDraw, squareDraw

  function setup() {
    var canvas = createCanvas(400, 100);
    canvas.parent('sketch-holder');
    circleDraw = createButton("drawCircle(30,30)");
    circleDraw.mousePressed(() => drawCircle(30, 30))
    circleDraw.parent('sketch-holder');
    squareDraw = createButton("randomRectangle()");
    squareDraw.mousePressed(randomRectangle);
    squareDraw.parent('sketch-holder');
    background(50);
    noStroke();
  }
  function draw() {
  }
  function randomRectangle() {
    fill(random(255));
    rect(random() * width, random() * height,
      random(width / 2), random(width / 2));
  }

  function drawCircle(x, y) {
    circle(x, y, 30)
  }
}