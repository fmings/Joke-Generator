const endpoint = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=twopart';

const getAJoke = () => new Promise((resolve, reject) => {
  fetch(endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => (response.json()))
    .then((data) => resolve(data))
    .catch(reject);
});

export default getAJoke;
