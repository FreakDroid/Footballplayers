import { createSelector } from 'reselect';
import _ from 'lodash';

//Get the players Array
const getPlayers = (state) => state.DataOfPlayers.players;

//Get the filters from the state
const getFilters = (state) => state.DataOfPlayers.filters;

//Get the today's date to calculate the age
const today = new Date();

//I vale for player index
let i = 0;


//Selector that calculate the player's age
const calculateAge = createSelector(
  getPlayers,
  (players) => {
    players.map(player => {
      let birthDate = new Date(player.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      player.age = age;
      player.id = i++;
      return player
    });
    return players;
  }
);

///Selector that hepls to filter the data, depending on filters saved in the state
const filterData = createSelector(
  [getFilters,
    calculateAge],
  (filters, players) => {

    //Get the parameters if they exists
    let name = filters && filters.name;
    let position = filters && filters.position;
    let age = filters && filters.age;

    if (name && !position && !age) {
      return _.filter(players, (item) => item.name.toLowerCase().indexOf(name) > -1);
    }
    else if (position && !name && !age) {
      return _.filter(players, (item) => item.position === position)
    }
    else if (name && position && !age) {
      return _.filter(players, (item) => item.name.toLowerCase.indexOf(name) > -1 && item.position === position)
    }
    else if (age && !position && !name) {
      return _.filter(players, (item) => item.age === parseInt(age, 0))
    }
    else if (age && position && !name) {
      return _.filter(players, (item) => item.age === parseInt(age, 0) && item.position === position)
    }
    else if (age && !position && name) {
      return _.filter(players, (item) => item.name.toLowerCase().indexOf(name) > -1 && item.age === parseInt(age, 0))
    }
    else if (age && position && name) {
      return _.filter(players, (item) => item.name.toLowerCase().indexOf(name) > -1 && item.age === parseInt(age, 0)
        && item.position === position)
    }

    return players;
  }
)


//Selector that wrap everything
const getFootballPlayerData = () => createSelector(
  filterData,
  (players) => {
    return players;
  }
);

//Return the functions in case that they'll be necessary
export {
  getPlayers,
  getFilters,
  calculateAge,
  filterData,
  getFootballPlayerData
};