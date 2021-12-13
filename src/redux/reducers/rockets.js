import { FETCH_ALL_ROCKETS } from '../actions/actionTypes';

const reducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ROCKETS:
      // Write code here
      return state; // TODO: return 'action.payload'

    default:
      return state;
  }
};

export default reducer;
