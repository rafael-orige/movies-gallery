import moviesInstance from '@/modules/axios/movies';

const API_KEY = process.env.VUE_APP_API_KEY || 'API KEY UNDEFINED';
const baseParams = {
  api_key: API_KEY,
  language: 'pt-BR',
};

const movies = () => {
  const getMovies = async () => {
    const res = await moviesInstance.get('/popular', {
      params: {
        ...baseParams,
        page: 1,
      },
    });
    const result = res.data;
    return result;
  };

  return {
    getMovies,
  };
};

export default movies;
