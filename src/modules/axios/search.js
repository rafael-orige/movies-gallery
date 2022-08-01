import axios from 'axios';

const searchInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search',
});

export default searchInstance;
