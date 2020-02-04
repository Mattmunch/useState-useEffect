import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ quote: { character, quote, image } }) => {
  return <section>
    <h2>{character}</h2>
    <image src={image}/>
    <p>{quote}</p>
  </section>;
};
Quote.propTypes = {
  character: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired
};
export default Quote;
