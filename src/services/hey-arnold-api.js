export const getCharacters = (page) => {
  // eslint-disable-next-line max-len
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=20&page=${page}`)
    .then(res => res.json());
};
