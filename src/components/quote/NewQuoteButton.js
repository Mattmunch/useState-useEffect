import React from 'react';
import PropTypes from 'prop-types';

const NewQuoteButton = ({ fetchQuote }) => (
  <button onClick={() => fetchQuote()}>Random Quote</button>
);

NewQuoteButton.propTypes = {
  fetchQuote:PropTypes.func.isRequired
};

export default NewQuoteButton;
