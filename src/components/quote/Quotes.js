import React from 'react';
import PropTypes from 'prop-types';

const Quotes = ({ quotes }) => {
  const quoteElements = quotes.map((quote, i) => (
    <li key={i}>
      <h2>{quote.character}</h2>
      <img src={quote.image} style={{ width: '200px' }}/>
      <p>{quote.quote}</p>
    </li>
  ));
  return <ul>
    {quoteElements}
  </ul>;
};
Quotes.propTypes = {
  quotes: PropTypes.isRequired
};
export default Quotes;
