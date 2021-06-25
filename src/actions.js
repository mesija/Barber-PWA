import axios from 'axios';

export const magicGetter = async (url) => {
  let result;
  const { pathname } = new URL(url);
  try {
    result = (await axios.get(url)).data;
    localStorage.setItem(pathname, JSON.stringify(result));
  } catch (e) {
    result = JSON.parse(localStorage.getItem(pathname));
  }
  return new Promise((resolve) => resolve(result));
};
