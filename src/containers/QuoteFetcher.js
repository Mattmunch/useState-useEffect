import React, { Component } from 'react';
import { getQuote } from '../services/quoteFetcherApi';

export default class QuoteFetcher extends Component {
    state = {
      quote:''
    }

    componentDidMount() {
      this.fetchQuote();
    }

    componentDidUpdate() {
      this.fetchEvents();
    }

    fetchQuote = () => {
      return getQuote()
        .then(quote => this.setState({ quote }));
    }

    handle





}
