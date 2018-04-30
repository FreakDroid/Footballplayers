import 'babel-polyfill';
import expect from 'expect';
import footballPlaterReducer from '../FootballPlayerReducer';
import {loadFootballPlayersSuccess, loadFootballPlayers, loadFiltersSuccess }from '../../actions/playersActions';
import initialState from '../initialState';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import * as types from '../../actions/actionTypes';
require('es6-symbol/implement');

describe('FootballPlayer Reducer', () => {
    let state;
    const mockPlayers =[
        {contractUntil: "2022-06-30", dateOfBirth: "1993-05-13", jerseyNumber: 9, name: "Romelu Lukaku", nationality: "Belgium"},
        {contractUntil: "2019-06-30", dateOfBirth: "1990-11-07", jerseyNumber: 1, name: "David de Gea", nationality: "Spain"}]
    
    const mockFilter = {name: "", position: "", age: ""}
    beforeEach(() => {
        state = { players: [], filters: [] }
    });  
  it('Initial state should be loaded', () => {
   
    //assert
    expect(footballPlaterReducer(undefined, {})).toEqual(state);
  });

  it('should handle the loadFootballPlayersSuccess action correctly', () => {
    const expectedResult = {players: mockPlayers, filters: []};
    // console.log(loadFootballPlayersSuccess(players));
    const action = loadFootballPlayersSuccess(mockPlayers);
    const reducerValue = footballPlaterReducer([{ players: [], filters: [] }], action);
    expect(reducerValue).toEqual(expectedResult);
  });

  it('should handle the loadFiltersSuccess action correctly', () => {
    const expectedResult = {players: undefined, filters: mockFilter};
    const action = loadFiltersSuccess(mockFilter);
    const reducerValue = footballPlaterReducer([{ players: [], filters: [] }], action);
    expect(reducerValue).toEqual(expectedResult);
  });
});
