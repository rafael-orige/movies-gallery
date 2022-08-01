function fetchContent(context) {
  context.commit('setMovies');
}

function clearSearch(context) {
  context.commit('clearSearch');
}

export const actions = {
  fetchContent,
  clearSearch,
};
