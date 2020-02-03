import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ character, quote, image }) => (
  <section>
    <h2>{character}</h2>
    <image src={image}></image>
    <p>{quote}</p>
  </section>
);
Quote.propTypes = {
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};
