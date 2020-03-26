import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Home = (props) => {

  const handleInput = (event) => {
    props.setName(event.target.value);
  }

  return <div>
    <h1>Home</h1>

    <label>
      Enter your name <br />
      <input type="text" value={props.name} onChange={handleInput} />
    </label>

    <Link to="/main">Next</Link>

  </div>
}

Home.propTypes = {
  name: PropTypes.string,
  setName: PropTypes.func,
}

export default Home;
