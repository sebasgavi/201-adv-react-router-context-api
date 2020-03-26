import React from 'react';
import { Redirect } from 'react-router-dom';

const Main = (props) => {

  console.log(props.match.params.id);

  if(!props.match.params.id) {
    // redirigir al usuario a la ruta /main/one
    return <Redirect to="/main/one" />;
  }

  return <div>
    <h1>Main</h1>

    {props.match.params.id === 'one' && <p>step one</p>}
    {props.match.params.id === 'two' && <p>step two</p>}

  </div>
}

export default Main;
