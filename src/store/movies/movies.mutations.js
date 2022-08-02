const setAll = (state, { shows, movies }) => {
  const moviesState = state.movies;
  moviesState.loading = true;

  moviesState.error = '';
  moviesState.data.movies = movies;
  moviesState.data.shows = shows;

  moviesState.loading = false;
};

const setMovies = (state, movies) => {
  const moviesState = state.movies;

  moviesState.data.movies = movies;
};

const setShows = (state, shows) => {
  const showsState = state.movies;

  showsState.error = '';
  showsState.data.shows = shows;
};

const setSearch = async (state, result) => {
  const moviesState = state.movies;

  moviesState.loading = true;
  moviesState.searching = true;

  const searchRes = result;
  const { query } = result;
  const totalResults = searchRes.total_results;
  const searchWithoutPersons = searchRes.results.filter((res) => res.media_type !== 'person');
  const searchWithCategory = searchWithoutPersons.map((res) => {
    const category = res.media_type === 'movie' ? 'Movie' : 'TV Show';

    return {
      ...res,
      category,
    };
  });

  moviesState.data.search = {
    result: searchWithCategory || [],
    query,
    total_results: totalResults,
    searching: true,
  };

  moviesState.loading = false;
};

const clearSearch = (state) => {
  state.movies.searching = false;
  state.movies.data.seach = {
    result: [],
    query: '',
    total_results: 0,
    searching: false,
  };
};

const setLoading = (state, loading) => {
  state.loading = loading;
};

const setError = (state, error) => {
  state.error = error.message;
};

export const mutations = {
  setAll,
  setMovies,
  setShows,
  setSearch,
  clearSearch,
  setLoading,
  setError,
};
