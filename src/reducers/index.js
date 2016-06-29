import { combineReducers } from 'redux';
import restaurants from './restaurants';
import selectedRestaurant from './selectRestaurant';
import region from './region';

const rootReducer = combineReducers({
  restaurants,
  region,
  selectedRestaurant
});

export default rootReducer;
