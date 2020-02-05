import React, { useState, useEffect } from 'react';
import { getQuote } from '../services/quoteFetcherApi';
import Quotes from '../components/quote/Quotes';
import NewQuoteButton from '../components/quote/NewQuoteButton';
import QuotesByCharacterForm from '../components/quote/QuotesByCharacterForm';

const QuoteFetcherFn = () => {
  const [quoteArray, setQuoteArray] = useState([]);
  const fetchQuote = () => {
    return getQuote()
      .then(quote => setQuoteArray(quote));
  };
  useEffect(() => {
    fetchQuote();
  }, []);
    
  return (
    <>
      <NewQuoteButton fetchQuote={fetchQuote} />
      <QuotesByCharacterForm setQuoteArray={setQuoteArray} />
      <Quotes quotes={quoteArray} />
    </>
  );
};
export default QuoteFetcherFn;
