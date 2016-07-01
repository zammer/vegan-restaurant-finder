import axios from 'axios';
export const FETCH_RESTAURANT_LIST = 'FETCH_RESTAURANT_LIST';
export const SELECT_RESTAURANT = 'SELECT_RESTAURANT';

export const fetchRestaurants = (city, cc, veg) => {

  const request = axios.get(`http://localhost:8888/api/${city}/${cc}/${veg}`);

  return (dispatch) => {
    request.then(({data}) => {
      dispatch({
        type: FETCH_RESTAURANT_LIST,
        payload: {
          restaurants: data.restaurants.businesses
        }
      });
    });
  };
}

export const selectRestaurant = (id, coordinate) => {
  return {
    type: SELECT_RESTAURANT,
    payload: {
      id,
      coordinate
    }
  }
}
