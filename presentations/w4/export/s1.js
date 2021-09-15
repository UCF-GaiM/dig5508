var sketch1 = function (p) {
  let circleDraw, squareDraw

  p.setup = function () {
    var canvas = p.createCanvas(400, 100);
    canvas.parent('sketch-holder');
    circleDraw = p.createButton("drawCircle(30,30)");
    circleDraw.mousePressed(() => drawCircle(30, 30))
    circleDraw.parent('sketch-holder');
    squareDraw = p.createButton("randomRectangle()");
    squareDraw.mousePressed(randomRectangle);
    squareDraw.parent('sketch-holder');
    p.background(50);
    p.noStroke();
  }
  p.draw() = function () {
  }

  let randomRectangle = function () {
    p.fill(random(255));
    p.rect(random() * width, random() * height,
      random(width / 2), random(width / 2));
  }

  function drawCircle(x, y) {
    p.circle(x, y, 30)
  }
}