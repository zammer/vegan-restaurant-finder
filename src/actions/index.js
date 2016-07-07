import axios from 'axios';
export const REQUEST_RESTAURANTS = 'REQUEST_RESTAURANTS';
export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const SELECT_RESTAURANT = 'SELECT_RESTAURANT';


const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const requestRestaurants = () => {
  return {
    type: REQUEST_RESTAURANTS
  }
}

export const fetchRestaurants = (city, cc, veg) => {
  return dispatch => {
    dispatch(requestRestaurants())
    return axios.get(`http://localhost:8888/api/${city}/${cc}/${veg}`)
      .then(({data}) => {
        dispatch({
          type: RECEIVE_RESTAURANTS,
          payload: {
            restaurants: data.restaurants.businesses
          }
        });
      }).catch((ex) => {
        console.log('parsing failed', ex)
      })
  }
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
