import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Context from '../context';
import { TextField, Slider } from '@material-ui/core';
import Loader from 'react-loaders';
import { TwitterPicker } from 'react-color';

const Home = (props) => {

  const context = React.useContext(Context);

  const handleInput = (event) => {
    context.contextSetName(event.target.value);
  }

  const handleColor = (color) => {
    context.contextSetName(color.hex);
  }

  return <div>
    <h1>Home</h1>

    <TwitterPicker color={context.contextName} onChange={handleColor} />


    <Loader type="pacman" innerClassName={context.contextName.length > 3 && 'loader-hidden'} />

    <TextField label="Enter your name" variant="outlined" value={context.contextName} onChange={handleInput} color="secondary" />

    <Slider  />

    {context.contextEmail}

    <Link to="/main">Next</Link>

  </div>
}

export default Home;
