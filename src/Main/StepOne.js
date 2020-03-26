import React from 'react';
import Context from '../context';
import PropTypes from 'prop-types';

const StepOne = (props) => {
  const context = React.useContext(Context);
  return <div>
    step one
    <p>{context.contextName}</p>
    <p>{props.value}</p>
  </div>
}

StepOne.propTypes = {
  value: PropTypes.string,
}

export default StepOne;
