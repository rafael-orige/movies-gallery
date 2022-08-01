import searchInstance from '@/modules/axios/search';

const API_KEY = process.env.VUE_APP_API_KEY || 'API KEY UNDEFINED';

const baseParams = {
  api_key: API_KEY,
  language: 'pt-BR',
};

const search = () => {
  const getQuery = async (query) => {
    const res = await searchInstance.get('/multi', {
      params: {
        ...baseParams,
        page: 1,
        include_adult: false,
        query,
      },
    });

    const result = res.data;
    return result;
  };

  return {
    getQuery,
  };
};

export default search;
