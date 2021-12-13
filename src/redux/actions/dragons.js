import { FETCH_ALL_DRAGONS } from './actionTypes';
import * as api from '../../api/api';

// API action creators
const getDragons = () => async (dispatch) => {
  try {
    const data = await api.fetchData(); // TODO: Change 'fetchData' to 'fetchDragons'

    dispatch({ type: FETCH_ALL_DRAGONS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getDragons;
