import { FETCH_SPECIE_REQUEST, FETCH_SPECIE_SUCCESS, FETCH_SPECIE_FAILURE } from 'redux-flow/constants/Specie';

const initialState = {};

const Specie = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPECIE_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case FETCH_SPECIE_SUCCESS:
      return Object.assign({}, state, {
        ...action.payload,
        loading: false,
        error: false,
      });
    case FETCH_SPECIE_FAILURE:
      return Object.assign({}, state, {
        ...action.payload,
        loading: false,
        error: true,
      });
    default:
      return state;
  }
};

export default Specie;
