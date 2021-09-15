---
theme : "night"
transition: "slide"
highlightTheme: "Monokai"
slideNumber: false
minScale: 1
maxScale: 1
title: "DIG5508 W4"
---
# DIG5508

Week 4: Functions & More

<script src="js/p5.js"></script>
---

## Agenda
 - Sketchbook Sharing
 - Lab 1 Walkthrough
 - More variable and loop practice
 - Functions
 - Lab 2 (In class)


---

### Functions
- Functions allow code to be reused
- Repetition is to be avoided

<span class="fragment current-only">

```javascript
fill(100)
circle(10,20,50)
fill(100)
circle(10,50,50)
fill(100)
circle(10,60,50)
```

</span>
<span class="fragment current-only">
All of the lines have the same radius: 

```javascript
function drawCircle(x,y) {
  fill(100)
  circle(x,y,50)
}
drawCircle(10,20)
drawCircle(10,50)
drawCircle(10,60)
``` 
</span>

---

- Any values that determine the behavior should become parameters.

```javascript
function drawOne(x,y) {
  circle(x,y,30) 
}
```


<script type="text/javascript">
var sketch = function (p) {
  let circleDraw, squareDraw, sliderX, sliderY

  p.setup = function () {
    var canvas = p.createCanvas(400, 100);
    canvas.parent('sketch-holder-1');
    circleDraw = p.createButton("drawCircle(x,y)");
    circleDraw.parent('controls');
    squareDraw = p.createButton("randomRectangle()");
    squareDraw.mousePressed(randomRectangle);
    squareDraw.parent('controls');
    let div = p.createDiv();
    div.parent('controls')
    let labelX = p.createSpan('X: 0');
    labelX.parent(div)
    labelX.position(0, 0, 'relative');
    labelX.style("color", "white")
    labelX.style("font-size", "12px")
    sliderX = p.createSlider(0,p.width, 0);
    sliderX.parent(div)
    sliderX.position(10, 10, 'relative');
    sliderX.changed(() => labelX.html("X: " + sliderX.value()))
    let div2 = p.createDiv();
    div2.parent('controls')
    let labelY = p.createSpan('Y: 0');
    labelY.parent(div2)
    labelY.position(0, 0, 'relative');
    labelY.style("color", "white")
    labelY.style("font-size", "12px")
    sliderY = p.createSlider(0, p.height, 0);
    sliderY.parent(div2)
    sliderY.position(10, 10, 'relative');
    sliderY.style("")
    sliderY.changed(() => labelY.html("Y: " + sliderY.value()))
    circleDraw.mousePressed(() => drawCircle(sliderX.value(), sliderY.value()))
    p.background(50);
    p.noStroke();
  }
  p.draw = function () {
  }

  function randomRectangle () {
    p.fill(p.random(255));
    p.rect(p.random() * p.width, p.random() * p.height,
      p.random(p.width / 2), p.random(p.width / 2));
  }

  function drawCircle(x, y) {
    p.circle(x, y, 30)
  }
}

let myp52 = new p5(sketch);
</script>
<div id="sketch-holder-1" style="display:inline-block;width:50%"></div>
<div id="controls" style="display:inline-block;width:40%"></div>

---

### Translate and Move

Demo 

```javascript
  let x1 = 0, y1 = 25, xo = 0
  setup () {
    createCanvas(400, 100);
    squareDraw = createButton("randomRectangle()");
    squareDraw.mousePressed(() => {stepAndMove(xo,p.height/2);xo+=20});
    squareDraw.parent('sketch-holder-2');
    background(50);
    stroke(255);
    strokeWeight(5)
    fill(255)
  }
  
  let stepAndMove = function (x,y) {
    point(x,y)
    translate(0, -y1)
    rect(x, y, 10, 10);
    translate(0, y1)
    rect(x, y, 10, 10);
    x1+=50
  }
```

<script type="text/javascript">
var sketch1 = function (p) {
  let circleDraw
  let x1 = 0, y1 = 25, xo = 0
  p.setup = function () {
    var canvas = p.createCanvas(400, 100);
    canvas.parent('sketch-holder-2');
    squareDraw = p.createButton("randomRectangle()");
    squareDraw.mousePressed(() => {stepAndMove(xo,p.height/2);xo+=50});
    squareDraw.parent('sketch-holder-2');
    p.background(50);
    p.stroke(255);
    p.fill(255)
  }
  
  let stepAndMove = function (x,y) {
    p.point(x,y)
    p.translate(0, -y1)
    p.rect(x, y, 10, 10);
    p.translate(0, y1)
    p.rect(x, y, 10, 10);
    x1+=50
  }

}

let myp5 = new p5(sketch1);
</script>

<div id="sketch-holder-2" style="display:inline-block;width:50%"></div>
<div id="controls-2" style="display:inline-block;width:40%"></div>

---

### Exercise 1: 

Take 10 minutes and work with a partner to create a function that draws a ring of circles around a provided point.

Hint: You can use rotate and translate.

---

<script type="text/javascript">
var prevZoom
window.addEventListener('load', () => 
{
  // Reveal.on('ready', () => {
  prevZoom = document.getElementsByClassName("slides")[0].style.zoom
  console.log(Reveal.getIndices(Reveal.getCurrentSlide()).h)
  // if(Reveal.getIndices(Reveal.getCurrentSlide()).h==6) {
  //   document.getElementsByClassName("slides")[0].style.zoom = 1
  // }
  Reveal.on( 'slidechanged', event => {
    console.log(event)
    if(event.indexh==6) {
      let slides= document.getElementsByClassName("slides")[0]
      slides.style.zoom = "1"
      console.log(slides)
    } else {
      let slides= document.getElementsByClassName("slides")[0]
      slides.style.zoom = prevZoom
      
    }
  // console.log(event.currentSlide)
  } );
  // })
})
</script>
<script type="text/javascript"> 

var sketch3 = function (p) {
  let circleDraw, squareDraw, sliderX, sliderY, canvas

  p.setup = function () {
    canvas = p.createCanvas(600, 400);
    canvas.parent('sketch-holder-3');
    p.background(50);
    p.noStroke();
  }
  p.draw = function () {
    p.fill(255)
    p.circle(p.mouseX, p.mouseY, 30)
  }

  function randomRectangle () {
    p.fill(p.random(255));
    p.rect(p.random() * p.width, p.random() * p.height,
      p.random(p.width / 2), p.random(p.width / 2));
  }

  function drawCircle(x, y) {
    p.circle(x, y, 30)
  }
}

let myp53 = new p5(sketch3);
</script>

<div id="sketch-holder-3" style="width:600px;height:400px;zoom:1"></div>
