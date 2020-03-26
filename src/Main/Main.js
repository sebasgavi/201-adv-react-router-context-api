import React from 'react';

const Main = (props) => {

  console.log(props);

  return <div>
    <h1>Main</h1>

    {!props.match.params.id && <p>default step</p>}
    {props.match.params.id === 'one' && <p>step one</p>}
    {props.match.params.id === 'two' && <p>step two</p>}

  </div>
}

export default Main;
