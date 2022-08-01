const setMovies = (state, { shows, movies }) => {
  const moviesState = state.movies;
  moviesState.loading = true;

  const moviesArr = movies;
  const moviesWithCategory = moviesArr.map((movie) => ({ ...movie, category: 'Movie' }));

  const showsArr = shows;
  const showsWithCategory = showsArr.map((show) => ({ ...show, category: 'TV Show' }));

  moviesState.error = '';
  moviesState.data.movies = moviesWithCategory;
  moviesState.data.shows = showsWithCategory;

  moviesState.loading = false;
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
    result: searchWithCategory || {},
    query,
    total_results: totalResults,
    searching: true,
  };

  moviesState.loading = false;
};

const clearSearch = (state) => {
  state.movies.searching = false;
};

export const mutations = {
  setMovies,
  setSearch,
  clearSearch,
};
