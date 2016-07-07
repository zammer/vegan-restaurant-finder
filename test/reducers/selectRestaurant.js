import { expect } from '../test_helper';
import { RECEIVE_RESTAURANTS, SELECT_RESTAURANT } from '../../src/actions/index';
import reducer from '../../src/reducers/selectRestaurant';

describe('src/reducers/selectRestaurant', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql({
      id: null,
      coordinate: {
        latitude: null,
        longitude: null
      }
    });
  });

  it('should handle RECEIVE_RESTAURANTS correctly', () => {

    const action = {
      type: RECEIVE_RESTAURANTS,
      payload: {
        restaurants: [{
          id: 1,
          location: {
            coordinate: {
              latitude: 1000,
              longitude: 2000
            }
          }
        },{
          id: 2,
          location: {
            coordinate: {
              latitude: 3000,
              longitude: 4000
            }
          }
        }]
      }
    };

    expect(reducer([], action)).to.eql({
        id: 1,
        coordinate: {
          latitude: 1000,
          longitude: 2000
        }
      });

  });

  it('should handle SELECT_RESTAURANT correctly', () => {
    const action = {
      type: SELECT_RESTAURANT,
      payload: {
        id: 1,
        coordinate: {
          latitude: 1000,
          longitude: 2000
        }
      }
    };

    expect(reducer([], action)).to.eql({
      id: 1,
      coordinate: {
        latitude: 1000,
        longitude: 2000
      }});
  });
});
