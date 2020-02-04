import React from 'react';
import PropTypes from 'prop-types';

const NewQuoteButton = ({ fetchQuote }) => (
  <button onClick={() => fetchQuote()}></button>
);

NewQuoteButton.propTypes = {
  fetchQuote:PropTypes.func.isRequired
};

export default NewQuoteButton;
