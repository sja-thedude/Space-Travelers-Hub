import { FETCH_ALL_ROCKETS } from './actionTypes';
import * as api from '../../api/api';

// API action creators
const getRockets = () => async (dispatch) => {
  try {
    const data = await api.fetchData();

    dispatch({ type: FETCH_ALL_ROCKETS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getRockets;
