import { FETCH_ALL_DRAGONS, RESERVE_DRAGON, CANCEL_RESERVATION } from './actionTypes';
import * as api from '../../api/api';

export const getDragons = () => async (dispatch) => {
  try {
    const data = await api.fetchDragons();

    dispatch({ type: FETCH_ALL_DRAGONS, payload: data });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const reserveDragon = (payload) => (
  {
    type: RESERVE_DRAGON,
    payload,
  }
);

export const cancelReservation = (payload) => (
  {
    type: CANCEL_RESERVATION,
    payload,
  }
);
