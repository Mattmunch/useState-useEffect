import React, { useState, useEffect } from 'react';
import { getQuote } from '../services/quoteFetcherApi';
import Quote from '../components/quote/Quote';
import NewQuoteButton from '../components/quote/NewQuoteButton';

const QuoteFetcherFn = () => {
  const [quote, setQuote] = useState({
    character: '',
    image: '',
    quote: ''
  });
  const fetchQuote = () => {
    return getQuote()
      .then(quote => setQuote(quote));
  };
  useEffect(() => {
    fetchQuote();
  }, []);
    
  return (
    <>
      <Quote character={quote.character} quote={quote.quote} image={quote.image} />
      <NewQuoteButton fetchQuote={fetchQuote} />
    </>
  );
};
export default QuoteFetcherFn;
