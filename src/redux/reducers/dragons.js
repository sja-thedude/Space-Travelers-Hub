import { FETCH_ALL_DRAGONS } from '../actions/actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_DRAGONS:
      // Write code here
      return state; // TODO: return 'action.payload'

    default:
      return state;
  }
};

export default reducer;
