import { FETCH_ALL_MISSIONS, RESERVE_MISSION } from '../actions/actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_MISSIONS:
      return [...state, ...action.payload];

    case RESERVE_MISSION:

      return [...action.payload];

    default:
      return state;
  }
};

export default reducer;
