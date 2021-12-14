/* eslint-disable no-case-declarations */
import { FETCH_ALL_DRAGONS, RESERVE_DRAGON, CANCEL_RESERVE } from '../actions/actionTypes';

const dragons = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_DRAGONS:
      const filteredData = action.payload.map((dragon, i) => {
        const {
          name, type, flickr_images: image,
        } = dragon;
        return {
          id: i + 1, name, type, image,
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
