import React from 'react';
import createSketch from './sketch';
import PropTypes from 'prop-types';

const SketchComp = (props) => {
  
  // elemento div que tiene el canvas adentro
  const elem = React.useRef(null);
  // aplicación de processing
  const sketch = React.useRef();
  
  // esto solo se debe ejecutar al inicio, una vez
  React.useEffect(() => {
    // instanciamos la app de processing
    sketch.current = createSketch(elem.current);
  }, []);

  // esto se debe ejecutar siempre que las propiedades cambien
  React.useEffect(() => {
    // usamos la misma app de processing para actualizar un valor
    sketch.current.setX(props.posX);
  }, [ props.posX ]);

  return <div ref={elem}></div>;
}

SketchComp.propTypes = {
  posX: PropTypes.number,
}

export default SketchComp;