import React, { Component } from 'react';
import { getQuote } from '../services/quoteFetcherApi';
import Quote from '../components/quote/Quote';
import NewQuoteButton from '../components/quote/NewQuoteButton';

export default class QuoteFetcher extends Component {
    state = {
      quote: {
        character: '',
        image: '',
        quote:''
      }
    }
    componentDidMount() {
      this.fetchQuote();
    }
    fetchQuote = () => {
      return getQuote()
        .then(quote => this.setState({ quote }));
    }
    render() {
      return (
        <>
          <Quote quote={this.state.quote} /> 
          <NewQuoteButton fetchQuote={this.fetchQuote} />
        </>
      );
    }





}
