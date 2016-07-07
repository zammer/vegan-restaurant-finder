import { RECEIVE_RESTAURANTS, REQUEST_RESTAURANTS } from '../actions/index';

const initialState = [{
  id: null,
  latitude: null,
  longitude: null
}];

export default (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_RESTAURANTS:
      const markers = action.payload.restaurants.map(restaurant => {
        return {
          id: restaurant.id,
          latitude: restaurant.location.coordinate.latitude,
          longitude: restaurant.location.coordinate.longitude
        }
      })
      return markers;

    case REQUEST_RESTAURANTS:
      return state;

    default:
      return state;
  }
};
