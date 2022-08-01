import { mutations } from './movies.mutations';
import { getters } from './movies.getters';
import { actions } from './movies.actions';

const initialState = {
  data: {},
  loading: false,
  error: '',
  searching: false,
};

export const moviesSlice = {
  initialState,
  mutations,
  getters,
  actions,
};
