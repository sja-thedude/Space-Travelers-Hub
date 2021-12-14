/* eslint-disable no-case-declarations */
import { FETCH_ALL_DRAGONS } from '../actions/actionTypes';

const dragons = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL_DRAGONS:
      const filteredData = action.payload.map((dragon) => {
        const {
          id, dragon_name: name, dragon_type: type, flickr_images: image, description,
        } = dragon;
        return {
          id, name, type, image, description,
        };
      });
      return [...state, ...filteredData];

    default:
      return state;
  }
};

export default dragons;
