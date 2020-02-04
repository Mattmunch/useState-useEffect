export const getQuote = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => res.json()
      .then(res => {
        return res[0];
      }));
};

export const getQuoteByCharacter = (query, count) => {
  return fetch(`futuramaapi.herokuapp.com/api/characters/${query}/${count}`)
    .then(res => res.json());
};
