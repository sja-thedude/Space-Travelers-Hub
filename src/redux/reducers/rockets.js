/* eslint-disable no-case-declarations */
import { FETCH_ALL_ROCKETS, RESERVE_ROCKET, CANCEL_RESERVATION } from '../actions/actionTypes';

const rockets = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_ROCKETS:
      const filteredData = action.payload.map((rocket) => {
        const {
          id, rocket_name: name, rocket_type: type, flickr_images: image, description,
        } = rocket;
        return {
          id, name, type, image, description,
        };
      });
      return [...state, ...filteredData];

    case RESERVE_ROCKET:
    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== parseInt(action.payload, 10)) {
          return rocket;
        }
        return { ...rocket, reserved: !rocket.reserved };
      });

    default:
      return state;
  }
};

export default rockets;
