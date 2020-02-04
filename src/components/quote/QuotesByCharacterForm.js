import React, { useState } from 'react';
import { getQuoteByCharacter } from '../../services/quoteFetcherApi';


const QuotesByCharacterForm = ({ setQuote }) => {
  const [characterQuery, setCharacterQuery] = useState('');
  const [quoteCount, setQuoteCount] = useState('');
  const changeCharacterQuery = characterQuery => setCharacterQuery(characterQuery);
  const changeQuoteCount = quoteCount => setQuoteCount(quoteCount);
  
  
  return (
    <form>
      <input type="text" name="characterQuery" placeholder="Character Name" onChange={() => changeCharacterQuery(characterQuery)} />
      <input type="number" name="quoteCount" placeholder="# of Quotes" onChange={() => changeQuoteCount(quoteCount)} />
      <button>Search</button>
    </form>);
};
export default QuotesByCharacterForm;
