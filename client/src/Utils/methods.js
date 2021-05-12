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
