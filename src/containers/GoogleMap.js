import React from 'react';
import { connect } from 'react-redux';
import GoogleMap from '../components/GoogleMap';
import { selectRestaurant } from '../actions/index';

const mapStateToProps = ({selectedRestaurant, region}) => {
  return {
    selectedRestaurant,
    region
  }
}

export default connect(mapStateToProps, { selectRestaurant })(GoogleMap);
