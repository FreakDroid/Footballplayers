import * as types from './actionTypes';
import axios from 'axios';

//Action Creator when I get the players success
export function loadFootballPlayersSuccess(players) {
  return { type: types.LOAD_FOOTBALL_PLAYERS, players };
}

//Action Creator for filters
export function loadFiltersSuccess(filters) {
  return { type: types.LOAD_FILTERS, filters };
}

//LoadFilters Method
export function loadFilters(filters) {
  return (dispatch) => {
    dispatch(loadFiltersSuccess(filters));
  };
}

//loadFootball players method
export function loadFootballPlayers() {
  return (dispatch) => {
    return axios.get("https://football-players-b31f2.firebaseio.com/players.json").then(players => {
      dispatch(loadFootballPlayersSuccess(players.data));
    }).catch(error => {
      throw (error);
    });
  };
}

