// USE WITH FIREBASE AUTH
// import ViewDirectorBasedOnUserAuthStatus from '../utils/viewDirector';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import getAJoke from '../api/jokeData';
import { showJoke, showPunchline } from '../pages/showJoke';
import renderToDom from '../utils/renderToDom';

const init = () => {
  document.querySelector('#app').innerHTML = `
    <div id="generator-block"><img src="https://i.imgur.com/A3AgnmB.png" alt="joke generator graphic" width="500px">
    <div id="joke-container">
    <div id="joke"></div>
    <div id="punchline"></div>
    <div id="btn-container">
    <button class="btn btn-danger" id="joke-btn">GET A JOKE</button><br />
    </div>
    </div>
    </div>
    <hr />
  `;

  document
    .querySelector('#joke-container')
    .addEventListener('click', (e) => {
      if (e.target.id.includes('joke-btn')) {
        renderToDom('#btn-container', '<button class="btn btn-danger" id="punchline-btn">GET PUNCHLINE</button><br />');
        getAJoke().then((response) => {
          showJoke(response);
          showPunchline(response);
          document.querySelector('#punchline').style.display = 'none';
        });
      }
      if (e.target.id.includes('punchline-btn')) {
        document.querySelector('#punchline').style.display = 'block';
        renderToDom('#btn-container', '<button class="btn btn-danger" id="joke-btn">GET A NEW JOKE</button><br />');
      }
    });

  // USE WITH FIREBASE AUTH
  // ViewDirectorBasedOnUserAuthStatus();
};

init();
