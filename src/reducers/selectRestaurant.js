import { SELECT_RESTAURANT, FETCH_RESTAURANT_LIST } from '../actions/index';

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
    case FETCH_RESTAURANT_LIST:
      return {
        id: action.payload.restaurants[0].id,
        coordinate: action.payload.restaurants[0].location.coordinate
      }
    }
  return state;
};
