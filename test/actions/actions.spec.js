import { expect } from '../test_helper';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { RECEIVE_RESTAURANTS, REQUEST_RESTAURANTS, SELECT_RESTAURANT  } from '../../src/actions';
import { fetchRestaurants, selectRestaurant } from '../../src/actions';

import nock from 'nock';
const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Actions' , () => {

  describe('src/actions/selectRestaurant' , () => {
    it('Has the correct type', () => {
      const action = selectRestaurant();
      expect(action.type).to.equal(SELECT_RESTAURANT);
    });

    it('Has the correct payload', () => {
      const action = selectRestaurant('id', { latitude: '1', longitude: '2' } );
      expect(action.payload).to.eql({ id: 'id', coordinate: { latitude: '1', longitude: '2' } });
    });
  });

  describe('src/actions/fetchRestaurants' , () => {

    afterEach(() => {
      nock.cleanAll();
    });

    it('Has the correct type for async call', () => {
      nock('http://localhost:8888/')
      .get('/api/Sydney/AU/false')
      .reply(200, { restaurants: { businesses: [] }});

      const expectedActions = [
        {type: REQUEST_RESTAURANTS},
        { type: RECEIVE_RESTAURANTS,
          payload: {
            restaurants: []
          }
        }
      ];

      const store = mockStore({ restaurants: [] });

      return store.dispatch(fetchRestaurants('Sydney', 'AU', 'false'))
      .then(() => { // return of async actions
        expect(store.getActions()).to.eql(expectedActions);
      })

    });
  });

});
