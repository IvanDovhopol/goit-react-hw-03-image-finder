import axios from 'axios';

const API_KEY = '24325435-7f403507b2d97ff755af9f968';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getImages = async (query, page) => {
  const response = await axios.get(
    `?key=${API_KEY}&q=${query}&image_type=photo&pretty=true&page=${page}`
  );

  return response.data;
};
