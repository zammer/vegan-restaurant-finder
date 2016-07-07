import { expect } from '../test_helper';
import { RECEIVE_RESTAURANTS, REQUEST_RESTAURANTS } from '../../src/actions/index';
import reducer from '../../src/reducers/region';

describe('src/reducers/region', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql([{
      id: null,
      latitude: null,
      longitude: null
    }]);
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

    expect(reducer([], action)).to.eql([{
        id: 1,
        latitude: 1000,
        longitude: 2000
      },{
        id: 2,
        latitude: 3000,
        longitude: 4000
      }]);

  });

  it('should handle REQUEST_RESTAURANTS correctly', () => {
    const action = {
      type: REQUEST_RESTAURANTS
    };

    expect(reducer([], action)).to.eql([]);
    expect(reducer(['Business 1', 'Business 2'], action)).to.eql(['Business 1', 'Business 2']);
  });
});
