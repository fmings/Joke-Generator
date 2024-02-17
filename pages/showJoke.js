import renderToDom from '../utils/renderToDom';

const showJoke = (joke) => {
  let domString = '';
  domString += `<h3>${joke.setup}</h3>`;

  renderToDom('#joke', domString);
};

const showPunchline = (joke) => {
  console.warn(joke, 'show Punchline');

  let domString = '';
  domString += `<h3>${joke.delivery}</h3>`;

  renderToDom('#punchline', domString);
};

export { showJoke, showPunchline };
