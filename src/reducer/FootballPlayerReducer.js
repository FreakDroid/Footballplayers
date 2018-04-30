import * as types from '../actions/actionTypes';
import initialState from './initialState';

///Reducer
export default function footballPlaterReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_FOOTBALL_PLAYERS:
      //add the players to the state
      return Object.assign({}, ...state, { players: action.players, filters: [] });
    case types.LOAD_FILTERS:
      //add the filters to my state
      return Object.assign({}, ...state, { players: state.players, filters: action.filters });
    default:
      return state;
  }
}
