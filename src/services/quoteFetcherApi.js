export const getQuote = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.json());
};

export const getQuoteByCharacter = (query, count) => {
  return fetch(`https://futuramaapi.herokuapp.com/api/characters/${query}/${count}`)
    .then(res => res.json());
};
