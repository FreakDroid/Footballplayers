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
      // //Simple function to calculate the age
      let birthDate = new Date(player.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      let currentMonth = today.getMonth();
      let playerBrithdayMonth = birthDate.getMonth();
      let currentDay = today.getDay();
      let playerBirthdayDay = birthDate.getDay();

      //The age calculation is not correct if I simply subtract the years
      //I should check the month and the day if it's necessary

      //If the current month is more than the payer's bitrday month he has turned years
      if (currentMonth > playerBrithdayMonth) {
        player.age = age;
      }
      //If the months are equals I need to check his birthday day 
      else if(currentMonth === playerBrithdayMonth){
        //if the current day is more than player's birthday day, The player turned age
        if (currentDay >= playerBirthdayDay){
          player.age = age;
        }
        //he must to wait days for his birthday
        else{
          player.age = age - 1;
        }
      }
      //The player has not turned years
      else {
        player.age = age - 1;
      }

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
      return _.filter(players, (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
    else if (position && !name && !age) {
      return _.filter(players, (item) => item.position === position)
    }
    else if (name && position && !age) {
      return _.filter(players, (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1 && item.position === position)
    }
    else if (age && !position && !name) {
      return _.filter(players, (item) => item.age === parseInt(age, 0))
    }
    else if (age && position && !name) {
      return _.filter(players, (item) => item.age === parseInt(age, 0) && item.position === position)
    }
    else if (age && !position && name) {
      return _.filter(players, (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1 && item.age === parseInt(age, 0))
    }
    else if (age && position && name) {
      return _.filter(players, (item) => item.name.toLowerCase().indexOf(name.toLowerCase()) > -1 && item.age === parseInt(age, 0)
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