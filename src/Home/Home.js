import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Context from '../context';

const Home = (props) => {

  const context = React.useContext(Context);

  const handleInput = (event) => {
    context.contextSetName(event.target.value);
  }

  return <div>
    <h1>Home</h1>

    <label>
      Enter your name <br />
      <input type="text" value={context.contextName} onChange={handleInput} />
    </label>

    {context.contextEmail}

    <Link to="/main">Next</Link>

  </div>
}

export default Home;
