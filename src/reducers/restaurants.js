import { FETCH_RESTAURANT_LIST } from '../actions/index';

export default (state = [], action) => {

  switch(action.type) {
    case FETCH_RESTAURANT_LIST:
      return action.payload.restaurants;
  }
  return state;
};
