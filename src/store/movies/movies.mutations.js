import movies from '@/services/movies';
import shows from '@/services/shows';
import search from '@/services/search';

const setMovies = async (state) => {
  const moviesState = state.movies;
  moviesState.loading = true;

  try {
    const moviesArr = await movies().getMovies().then((data) => data.results);
    const moviesWithCategory = moviesArr.map((movie) => ({ ...movie, category: 'Movie' }));

    const showsArr = await shows().getShows().then((data) => data.results);
    const showsWithCategory = showsArr.map((show) => ({ ...show, category: 'TV Show' }));

    moviesState.error = '';
    moviesState.data.movies = moviesWithCategory;
    moviesState.data.shows = showsWithCategory;
  } catch (error) {
    moviesState.error = error.message;
  }

  moviesState.loading = false;
};

const setSearch = async (state, query) => {
  const moviesState = state.movies;
  if (!query) {
    moviesState.searching = false;
    return;
  }

  moviesState.loading = true;
  moviesState.searching = true;

  try {
    const searchRes = await search().getQuery(query);
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
  } catch (error) {
    moviesState.error = error.message;
  }

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
