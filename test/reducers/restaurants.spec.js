import { expect } from '../test_helper';
import { RECEIVE_RESTAURANTS, REQUEST_RESTAURANTS } from '../../src/actions/index';
import reducer from '../../src/reducers/restaurants';

describe('src/reducers/restaurants', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).to.eql([]);
  });

  it('should handle RECEIVE_RESTAURANTS correctly', () => {

    const action = {
      type: RECEIVE_RESTAURANTS,
      payload: {
        restaurants: ['Business 1', 'Business 2']
      }
    }

    expect(reducer([], action)).to.eql(['Business 1', 'Business 2']);
  });

  it('should handle REQUEST_RESTAURANTS correctly', () => {
    const action = {
      type: REQUEST_RESTAURANTS
    };

    expect(reducer([], action)).to.eql([]);
    expect(reducer(['Business 1', 'Business 2'], action)).to.eql(['Business 1', 'Business 2']);
  })
})
