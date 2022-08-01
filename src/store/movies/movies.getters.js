const getAll = (state) => {
  const { movies } = state.movies.data;
  const { shows } = state.movies.data;

  return {
    movies,
    shows,
  };
};
const getMovies = (state) => state.movies.data.movies;
const getShows = (state) => state.movies.data.shows;
const getSearch = (state) => state.movies.data.search;
const getSearching = (state) => state.movies.searching;
const getLoading = (state) => state.movies.loading;
const getError = (state) => state.movies.error;

export const getters = {
  getAll,
  getMovies,
  getShows,
  getSearch,
  getSearching,
  getLoading,
  getError,
};
