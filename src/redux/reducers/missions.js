import { FETCH_ALL_MISSIONS } from '../actions/actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_MISSIONS:
      // Write code here
      return state;

    default:
      return state;
  }
};

export default reducer;
