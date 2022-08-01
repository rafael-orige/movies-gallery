import axios from 'axios';

const showsInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/tv',
});

export default showsInstance;
