import p5 from 'p5';

const createSketch = (elem) => {
  var sketch = new p5(function(app) {

    var x = 0;
    var col = '#000';
    
    app.setup = function () {
      const canvas = app.createCanvas(200, 200);
      canvas.parent(elem);
    }
    
    app.draw = function () {
      app.background(200);

      app.fill(col);
      app.ellipse(x, 100, 30, 30);
    }

    app.setX = function (posX) {
      x = posX;
    }

    app.setCol = function (c) {
      col = c;
    }
  
  });

  return sketch;
}

export default createSketch;