import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
const URL_LENGTH = 5;

export const rocketImage = require('./Assets/Images/rocket.svg').default;
export const womanImage = require('./Assets/Images/woman.svg').default;

export const dummyURLs = [
  'http://localhost:3000/asdasd',
  'http://localhost:3000/K83ksl',
  'http://localhost:3000/M9ajhs',
  'http://localhost:3000/09atYa',
];

export const setToLocalStorage = url => {
  let recentURLs = JSON.parse(localStorage.getItem('urls'));

  if (recentURLs === null) {
    recentURLs = [];
  }
  let recentURLLength = recentURLs.length;
  if (recentURLLength >= URL_LENGTH) {
    recentURLs = [];
  }
  recentURLs.push(url);
  localStorage.setItem('urls', JSON.stringify(recentURLs));
  return;
};
export const setBlankLocalStorage = () => {
  let recentURLs = [];
  localStorage.setItem('urls', JSON.stringify(recentURLs));
  return;
};

export const getFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('urls'));
};

export const notyf = new Notyf({
  types: [
    {
      type: 'success',
      className: 'notyf__toast--success',
      backgroundColor: '#ff6347',
      icon: {
        className: 'notyf__icon--success',
        tagName: 'i',
      },
    },
  ],
  position: {
    x: 'right',
    y: 'top',
  },
});
