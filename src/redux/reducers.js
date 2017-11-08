import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';
import * as actions from './actions';

const INITIAL_STATE = Immutable({
  isLoading: false,
  matches: [],
  error: null,
});

export default createReducer(INITIAL_STATE, {
  [actions.UPDATE_MATCHES]: (s, a) => s.merge({ matches: a.matches, isLoading: false }),
  [actions.LOAD_MATCHES]: (s, a) => s.merge({ isLoading: true, error: null }),
  [actions.LOAD_ERROR]: (s, a) => s.merge({ error: a.message, isLoading: false }),
});