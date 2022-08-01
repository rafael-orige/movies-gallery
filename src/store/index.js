import { createStore } from 'vuex';
import { moviesSlice } from './movies/movies.slice';

export default createStore({
  state: {
    movies: { ...moviesSlice.initialState },
  },
  getters: {
    ...moviesSlice.getters,
  },
  mutations: {
    ...moviesSlice.mutations,
  },
  actions: {
    ...moviesSlice.actions,
  },
});
