import { FETCH_SPECIE_REQUEST, FETCH_SPECIE_SUCCESS, FETCH_SPECIE_FAILURE } from 'redux-flow/constants/Specie';

function fetchSpecieRequest() {
  return { type: FETCH_SPECIE_REQUEST };
}

function fetchSpecieSuccess(payload) {
  return { type: FETCH_SPECIE_SUCCESS, payload };
}

function fetchSpecieFailure(payload) {
  return { type: FETCH_SPECIE_FAILURE, payload };
}

function fetchSpecie(params, dispatch) {
  const { endpoint, name } = params;
  dispatch(fetchSpecieRequest());
}

export const actionFetchSpecie = params => (dispatch, getState) => fetchSpecie(params, dispatch, getState);
