const getData = (state) => state.movies.data;
const getLoading = (state) => state.movies.loading;
const getError = (state) => state.movies.error;

export const getters = {
  getData,
  getLoading,
  getError,
};
