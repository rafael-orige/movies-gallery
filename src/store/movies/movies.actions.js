import movies from '@/services/movies';
import shows from '@/services/shows';
import search from '@/services/search';

async function setMovies(context) {
  const showsArr = await shows().getShows().then((data) => data.results);
  const moviesArr = await movies().getMovies().then((data) => data.results);

  const data = {
    shows: showsArr,
    movies: moviesArr,
  };

  console.log(data);

  context.commit('setMovies', data);
}

function clearSearch(context) {
  context.commit('clearSearch');
}

async function setSearch(context, query) {
  if (!query) {
    context.commit('clearSearch');
    return;
  }

  context.commit('setSearch', await search().getQuery(query));
}

export const actions = {
  setMovies,
  clearSearch,
  setSearch,
};
