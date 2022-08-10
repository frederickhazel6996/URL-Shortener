import axios from 'axios';
import { notyf } from './values';
const URL = '/api/url/add-url';
const URL_LENGTH = 5;
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

export const urlShorterner = async longUrl => {
  try {
    const response = await axios.post(
      URL,
      { url: longUrl },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.url;
  } catch (error) {
    if (error.response.status === 422) {
      notyf.error('Invalid URL');
    } else {
      notyf.error('No Internet');
    }

    console.log(error);
    return 0;
  }
};
