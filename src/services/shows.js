import showsInstance from '@/modules/axios/shows';

const API_KEY = process.env.VUE_APP_API_KEY || 'API KEY UNDEFINED';

const baseParams = {
  api_key: API_KEY,
  language: 'pt-BR',
};

const shows = () => {
  const getShows = async () => {
    const res = await showsInstance.get('/popular', {
      params: {
        ...baseParams,
        page: 1,
      },
    });

    const result = res.data;
    return result;
  };

  return {
    getShows,
  };
};

export default shows;
