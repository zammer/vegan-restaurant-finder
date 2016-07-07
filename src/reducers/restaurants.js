import { RECEIVE_RESTAURANTS, REQUEST_RESTAURANTS } from '../actions/index';

export default (state = [], action) => {

  switch(action.type) {
    case RECEIVE_RESTAURANTS:
      return action.payload.restaurants;

    case REQUEST_RESTAURANTS:
      return state;

    default:
      return state;
  }
};
