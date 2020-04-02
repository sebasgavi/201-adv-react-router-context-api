import p5 from 'p5';

const createSketch = (elem) => {
  var sketch = new p5(function(app) {

    var x = 0;
    
    app.setup = function () {
      const canvas = app.createCanvas(200, 200);
      canvas.parent(elem);
    }
    
    app.draw = function () {
      app.background(200);

      app.fill(200, 120, 170);
      app.ellipse(x, 100, 30, 30);
    }

    app.setX = function (posX) {
      x = posX;
    }
  
  });

  return sketch;
}

export default createSketch;