import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ heroName }) => {
  if (heroName === 'Joker') {
    throw new Error('Not a hero'); // Updated error message
  }

  return <h1>{heroName}</h1>;
};

Hero.propTypes = {
  heroName: PropTypes.string.isRequired,
};

export default Hero;