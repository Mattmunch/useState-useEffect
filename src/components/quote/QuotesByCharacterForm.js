import React, { useState } from 'react';
import { getQuoteByCharacter } from '../../services/quoteFetcherApi';


const QuotesByCharacterForm = () => {
  const [characterQuery, setCharacterQuery] = useState('');
  const changeCharacterQuery = characterQuery => setCharacterQuery(characterQuery);

  return (
    <form>
      <input type="text" name="characterQuery" placeholder="Character Name" onChange={changeCharacterQuery(characterQuery)} />
      <input type="number" name="quoteCount"/>
    </form>);
};
export default QuotesByCharacterForm;
