import { FETCH_ALL_MISSIONS } from './actionTypes';
import * as api from '../../api/api';

// API action creators
const getMissions = () => async (dispatch) => {
  try {
    const data = await api.fetchData();

    dispatch({ type: FETCH_ALL_MISSIONS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getMissions;
