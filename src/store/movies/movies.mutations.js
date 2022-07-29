const setData = (state, payload) => {
  state.movies.data = payload;
};

const setLoading = (state, payload) => {
  state.movies.loading = payload;
};

const setError = (state, payload) => {
  state.movies.error = payload;
};

export const mutations = {
  setData,
  setLoading,
  setError,
};
