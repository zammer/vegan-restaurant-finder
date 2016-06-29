import React from 'react';
import { connect } from 'react-redux';
import RestaurantList from '../components/RestaurantList';
import { selectRestaurant } from '../actions/index';

const mapStateToProps = ({ restaurants, selectedRestaurant }) => {
  return {
    restaurants,
    selectedRestaurant
   }
}

export default connect(mapStateToProps, {selectRestaurant})(RestaurantList);
