import { FETCH_ALL_ROCKETS, RESERVE_ROCKET, CANCEL_RESERVATION } from './actionTypes';
import * as api from '../../api/api';

export const getRockets = () => async (dispatch) => {
  try {
    const data = await api.fetchRockets();

    dispatch({ type: FETCH_ALL_ROCKETS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const reserveRocket = (payload) => (
  {
    type: RESERVE_ROCKET,
    payload,
  }
);

export const cancelReservation = (payload) => (
  {
    type: CANCEL_RESERVATION,
    payload,
  }
);
