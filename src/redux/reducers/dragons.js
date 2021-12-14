/* eslint-disable no-case-declarations */
import { FETCH_ALL_DRAGONS, RESERVE_DRAGON, CANCEL_RESERVE } from '../actions/actionTypes';

const dragons = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_DRAGONS:
      const filteredData = action.payload.map((dragon) => {
        const {
          id, dragons_name: name, dragons_type: type, flickr_images: image, description,
        } = dragon;
        return {
          id, name, type, image, description,
        };
      });
      return [...state, ...filteredData];

    case RESERVE_DRAGON:
    case CANCEL_RESERVE:
      return state.map((dragon) => {
        if (dragon.id !== parseInt(action.payload, 10)) {
          return dragon;
        }
        return { ...dragon, reserved: !dragon.reserved };
      });

    default:
      return state;
  }
};

export default dragons;
