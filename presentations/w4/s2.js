var sketch2 = function (p) {
  let circleDraw, squareDraw

  p.setup = function () {
    var canvas = p.createCanvas(400, 100);
    canvas.parent('sketch-holder-2');
    circleDraw = p.createButton("drawCircle(30,30)");
    circleDraw.mousePressed(() => drawCircle(30, 30))
    circleDraw.parent('sketch-holder-2');
    squareDraw = p.createButton("randomRectangle()");
    squareDraw.mousePressed(randomRectangle);
    squareDraw.parent('sketch-holder-2');
    p.background(50);
    p.noStroke();
  }
  p.draw = function () {
  }

  let randomRectangle = function () {
    p.fill(p.random(255));
    p.rect(p.random() * width, p.random() * height,
      p.random(width / 2), p.random(width / 2));
  }

  function drawCircle(x, y) {
    p.circle(x, y, 30)
  }
}

let myp52 = new p5(sketch2);