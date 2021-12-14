import { FETCH_ALL_MISSIONS } from './actionTypes';
import * as api from '../../api/api';

const getMissions = () => async (dispatch) => {
  try {
    const data = await api.fetchMissions();
    const filteredObject = data.map((obj) => {
      const { mission_id: missionId, mission_name: missionName, description } = obj;
      return { mission_id: missionId, mission_name: missionName, description };
    });
    console.log(filteredObject);

    dispatch({ type: FETCH_ALL_MISSIONS, payload: filteredObject });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getMissions;
