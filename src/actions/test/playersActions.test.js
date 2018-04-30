import expect from 'expect';
import * as playersActions from '../playersActions';
import * as types from '../actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

// Test a sync action
describe('Players Actions', () => {
  describe('loadFootballPlayers', () => {
    it('should create a LOAD_FILTERS action', () => {
      //arrange
      const filter = { name: "test", position: "", age: "" };
      const expectedAction = {
        type: types.LOAD_FILTERS,
        filters: filter
      };

      //act
      const action = playersActions.loadFiltersSuccess(filter);

      //assert
      expect(action).toEqual(expectedAction);
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

//Testing Async
describe('Async Actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('should loadFootballPlayers when loading player', (done) => {
    const players = [{ id: 'test', title: 'test' }];

    const expectedActions = [
      { type: types.LOAD_FOOTBALL_PLAYERS, players }
    ];

    const store = mockStore({ DataOfPlayers: { players: [], filters: [] } }, expectedActions, done);
    store.dispatch(playersActions.loadFootballPlayers()).then((test) => {
      const actions = store.getActions();
      expect(actions[0].type).toEqual(types.LOAD_FOOTBALL_PLAYERS);
      expect(actions[0].players).not.toEqual(null);
      done();
    });
  });
});