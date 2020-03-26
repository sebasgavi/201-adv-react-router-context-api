import React from 'react';
import { Redirect, Link } from 'react-router-dom';

const Main = (props) => {
  const [ active, setActive ] = React.useState(false);

  console.log(props.match.params.id);

  if(!props.match.params.id) {
    // redirigir al usuario a la ruta /main/one
    return <Redirect to="/main/one" />;
  }

  if(!active && props.match.params.id === 'two') {
    // redirigir al usuario a la ruta /main/one
    return <Redirect to="/main/one" />;
  }

  const handleActivateClick = () => {
    setActive(true);
  }

  return <div>
    <h1>Main</h1>

    {!active && <button onClick={handleActivateClick}>Activate</button>}
    {active && <p>Active</p>}

    <nav>
      <Link to="/main/one">Step One</Link>
      <Link to="/main/two">Step Two</Link>
    </nav>

    {/* si no se usa redirect se puede hacer esta condición */}
    {/* !props.match.params.id && <p>default step</p> */}
    {props.match.params.id === 'one' && <p>step one</p>}
    {props.match.params.id === 'two' && <p>step two</p>}

  </div>
}

export default Main;
