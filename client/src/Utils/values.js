import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

export const rocketImage = require('../Assets/Images/rocket.svg').default;
export const rocketImageIco =
  require('../Assets/Images/rocket_ico.svg').default;

export const dummyURLs = [
  'http://localhost:3000/asdasd',
  'http://localhost:3000/K83ksl',
  'http://localhost:3000/M9ajhs',
  'http://localhost:3000/09atYa',
];

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
