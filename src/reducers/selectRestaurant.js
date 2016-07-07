import { SELECT_RESTAURANT, RECEIVE_RESTAURANTS } from '../actions/index';

const initialState = {
  id: null,
  coordinate: {
    latitude: null,
    longitude: null
  }
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SELECT_RESTAURANT:
      return {
        id: action.payload.id,
        coordinate: action.payload.coordinate
      }
    case RECEIVE_RESTAURANTS:
      return {
        id: action.payload.restaurants[0].id,
        coordinate: action.payload.restaurants[0].location.coordinate
      }
    }
  return state;
};
