import { FETCH_ALL_MISSIONS, RESERVE_MISSION } from './actionTypes';
import * as api from '../../api/api';

const getMissions = () => async (dispatch) => {
  try {
    const data = await api.fetchMissions();
    const filteredObject = data.map((obj) => {
      const { mission_id: missionId, mission_name: missionName, description } = obj;
      return {
        mission_id: missionId, mission_name: missionName, description, reserved: false,
      };
    });

    dispatch({ type: FETCH_ALL_MISSIONS, payload: filteredObject });
  } catch (error) {
    throw new Error(error.message);
  }
};

export const missionReservation = (payload) => {
  const { mission, id } = payload;
  const reservationUpdate = mission.map((mission) => {
    let reserved;
    if (mission.mission_id === id) {
      reserved = !mission.reserved;
    } else {
      reserved = mission.reserved;
    }
    return {
      ...mission,
      reserved,
    };
  });
  return {
    type: RESERVE_MISSION,
    payload: reservationUpdate,
  };
};

export default getMissions;
