import movies from '@/services/movies';
import shows from '@/services/shows';
import search from '@/services/search';
import returnWithCategory from '@/utils/returnWithCategory';

async function setAll(context) {
  try {
    const showsArr = await shows().getShows().then((data) => data.results);
    const showsWithCategory = showsArr.map((show) => returnWithCategory(show, 'TV Show'));

    const moviesArr = await movies().getMovies().then((data) => data.results);
    const moviesWithCategory = moviesArr.map((movie) => returnWithCategory(movie, 'Movie'));

    const data = {
      shows: showsWithCategory,
      movies: moviesWithCategory,
    };

    context.commit('setAll', data);
  } catch (error) {
    context.commit('setError', error.message);
  }
}

async function setMovies(context, page = 1) {
  try {
    const moviesArr = await movies().getMovies(page).then((data) => data.results);
    const moviesWithCategory = moviesArr.map((movie) => returnWithCategory(movie, 'Movie'));

    context.commit('setMovies', moviesWithCategory);
  } catch (error) {
    context.commit('setError', error);
  }
}

async function setShows(context, page = 1) {
  try {
    const showsArr = await shows().getShows(page).then((data) => data.results);
    const showsWithCategory = showsArr.map((show) => returnWithCategory(show, 'TV Show'));

    context.commit('setShows', showsWithCategory);
  } catch (error) {
    context.commit('setError', error);
  }
}

function clearSearch(context) {
  context.commit('clearSearch');
}

async function setSearch(context, { query, page }) {
  if (!query) {
    context.commit('clearSearch');
    return;
  }

  const results = await search().getQuery({ query, page });

  context.commit('setSearch', results);
}

export const actions = {
  setAll,
  setMovies,
  setShows,
  clearSearch,
  setSearch,
};
