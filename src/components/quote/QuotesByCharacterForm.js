import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { getQuoteByCharacter } from '../../services/quoteFetcherApi';


const QuotesByCharacterForm = ({ setQuoteArray }) => {
  const [characterQuery, setCharacterQuery] = useState('');
  const changeCharacterQuery = ({ target }) => setCharacterQuery(target.value);
  const [quoteCount, setQuoteCount] = useState('');
  const changeQuoteCount = ({ target })=> setQuoteCount(target.value);
    
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchQuoteByCharacter();
  };
    
  const fetchQuoteByCharacter = () => {
    getQuoteByCharacter(characterQuery, quoteCount)
      .then(quotes => {
        setQuoteArray(quotes);
      });
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="characterQuery" placeholder="Character Name" onChange={changeCharacterQuery} />
      <input type="number" name="quoteCount" placeholder="# of Quotes" onChange= {changeQuoteCount} />
      <button>Search</button>
    </form>
  );
};
QuotesByCharacterForm.propTypes = {
  setQuoteArray: PropTypes.func.isRequired
};
export default QuotesByCharacterForm;
