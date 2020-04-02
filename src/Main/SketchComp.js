import React from 'react';
import createSketch from './sketch';

const SketchComp = (props) => {
  
  const elem = React.useRef(null);
  
  React.useEffect(() => {
    createSketch(elem.current);
  }, []);

  return <div ref={elem}></div>;
}

export default SketchComp;