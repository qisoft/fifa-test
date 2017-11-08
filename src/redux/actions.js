import { getMatches } from '../api';
export const LOAD_MATCHES = 'loadMatches';
export const UPDATE_MATCHES = 'updateMatches';
export const LOAD_ERROR = 'loadError';

export const loadMatches = (fifaCode) => async (dispatch) => {
  try {
    dispatch({ type: LOAD_MATCHES });
    const matches = await getMatches(fifaCode);
    dispatch({ type: UPDATE_MATCHES, matches });
  } catch (e) {
    dispatch({ type: LOAD_ERROR, message: e.message });
  }
};