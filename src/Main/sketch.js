import p5 from 'p5';

const createSketch = (elem) => {
  new p5(function(app) {
    
    app.setup = function () {
      const canvas = app.createCanvas(200, 200);
      canvas.parent(elem);
    }
    
    app.draw = function () {
      app.background(200, 20, 20);
    }
  
  });
}

export default createSketch;