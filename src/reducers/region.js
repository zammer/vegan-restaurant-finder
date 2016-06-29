import { FETCH_RESTAURANT_LIST } from '../actions/index';

const initialState = [{
  id: null,
  latitude: null,
  longitude: null
}];

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_RESTAURANT_LIST:
      const markers = action.payload.restaurants.map(restaurant => {
        return {
          id: restaurant.id,
          latitude: restaurant.location.coordinate.latitude,
          longitude: restaurant.location.coordinate.longitude
        }
      })
      return markers;
  }
  return state;
};
