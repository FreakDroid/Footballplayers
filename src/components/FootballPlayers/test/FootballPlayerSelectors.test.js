import { getPlayers, getFilters, getFootballPlayerData } from '../FootballPlayerSelectors';
import _ from 'lodash';


describe('FootballPlayer Selectors', () => {
  let mockPlayers = [
    { contractUntil: "2022-06-30", dateOfBirth: "1993-05-13", jerseyNumber: 9, name: "Romelu Lukaku", nationality: "Belgium" },
    { contractUntil: "2019-06-30", dateOfBirth: "1990-11-07", jerseyNumber: 1, name: "David de Gea", nationality: "Spain" }]

  let mockFilter = { name: "", position: "", age: "" }

  describe('selectPlayer', () => {
    it('should select the state and player is empty', () => {
      const DataOfPlayers = { players: [], filters: [] };
      const mockedState = {
        DataOfPlayers: DataOfPlayers,
      }
      expect(getPlayers(mockedState)).toEqual(DataOfPlayers.players);
    });

    it('should select the state and player is not empty', () => {
      const DataOfPlayers = { players: mockPlayers, filters: [] };
      const mockedState = {
        DataOfPlayers: DataOfPlayers,
      }
      expect(getPlayers(mockedState)).toEqual(DataOfPlayers.players);
    });
  });

  describe('getFilters', () => {
    it('should select the state and filter is empty', () => {
      const DataOfPlayers = { players: [], filters: [] };
      const mockedState = {
        DataOfPlayers: DataOfPlayers,
      }
      expect(getFilters(mockedState)).toEqual(DataOfPlayers.filters);
    });

    it('should select the global state empty', () => {
      const DataOfPlayers = { players: [], filters: mockFilter };
      const mockedState = {
        DataOfPlayers: DataOfPlayers,
      }
      expect(getFilters(mockedState)).toEqual(DataOfPlayers.filters);
    });
  });


  //The only function aviable
  describe('getFootballPlayerData', () => {

    it('should return players not filtered with age field', () => {
      let mockPlayersResult = [
        { contractUntil: "2022-06-30", dateOfBirth: "1993-05-13", jerseyNumber: 9, name: "Romelu Lukaku", nationality: "Belgium", age: '25' },
        { contractUntil: "2019-06-30", dateOfBirth: "1990-11-07", jerseyNumber: 1, name: "David de Gea", nationality: "Spain", age: '28' }]

      const DataOfPlayers = { players: mockPlayers, filters: [] };
      const mockedState = {
        DataOfPlayers: DataOfPlayers,
      }
      let resultFunction = getFootballPlayerData().resultFunc(mockPlayersResult);

      //The result function has been updates so is not equal to original state;
      expect(resultFunction).not.toEqual(DataOfPlayers.players);

      //The process has calculated the age and return correct the values
      expect(resultFunction[0].age).toEqual('25');
    });

    it('should return players filtered with age field', () => {
      let mockPlayersWithAge = [
        { contractUntil: "2022-06-30", dateOfBirth: "1993-05-13", jerseyNumber: 9, name: "Romelu Lukaku", nationality: "Belgium", age: '25' },
        { contractUntil: "2019-06-30", dateOfBirth: "1990-11-07", jerseyNumber: 1, name: "David de Gea", nationality: "Spain", age: '28' },
        { contractUntil: "2019-06-30", dateOfBirth: "1990-11-07", jerseyNumber: 1, name: "David Perez", nationality: "Spain", age: '25' }]

      //Add the parameter
      mockFilter.age = '25';

      const DataOfPlayers = { players: mockPlayers, filters: mockFilter };
      const mockedState = {
        DataOfPlayers: DataOfPlayers,
      }

      let mockPlayersFiltered = _.filter(mockPlayersWithAge, (item) => item.age === mockFilter.age);
      expect(mockPlayersFiltered).toHaveLength(2);
      expect(mockPlayersFiltered[0].age).toBe('25');
      expect(mockPlayersFiltered[0].age).not.toBe('28');
    });

    it('should return players filtered with name field', () => {
      let mockPlayersWithAge = [
        { contractUntil: "2022-06-30", dateOfBirth: "1993-05-13", jerseyNumber: 9, name: "Romelu Lukaku", nationality: "Belgium", age: '25' },
        { contractUntil: "2019-06-30", dateOfBirth: "1990-11-07", jerseyNumber: 1, name: "David de Gea", nationality: "Spain", age: '28' },
        { contractUntil: "2019-06-30", dateOfBirth: "1990-11-07", jerseyNumber: 1, name: "Daniel Perez", nationality: "Spain", age: '25' }]

      //Add the parameter we'll test only that containts part of the name
      mockFilter.name = 'd';

      const DataOfPlayers = { players: mockPlayers, filters: mockFilter };
      const mockedState = {
        DataOfPlayers: DataOfPlayers,
      }

      let mockPlayersFiltered = _.filter(mockPlayersWithAge, (item) => item.name.toLowerCase().indexOf(mockFilter.name) > -1);

      expect(mockPlayersFiltered).toHaveLength(2);
      expect(mockPlayersFiltered[0].name).toBe('David de Gea');
      expect(mockPlayersFiltered[1].name).toBe('Daniel Perez');
    });

    it('should return players filtered with position field', () => {
      let mockPlayersWithAge = [
        { contractUntil: "2022-06-30", dateOfBirth: "1993-05-13", jerseyNumber: 9, name: "Romelu Lukaku", nationality: "Belgium", age: '25', position: "Center-Back" },
        { contractUntil: "2019-06-30", dateOfBirth: "1990-11-07", jerseyNumber: 1, name: "David de Gea", nationality: "Spain", age: '28', position: "Keeper" },
        { contractUntil: "2019-06-30", dateOfBirth: "1990-11-07", jerseyNumber: 1, name: "Daniel Perez", nationality: "Spain", age: '25', position: "Central-Midfield" }]

      //Add the parameter we'll test only that containts part of the name
      mockFilter.position = 'Keeper';

      const DataOfPlayers = { players: mockPlayers, filters: mockFilter };
      const mockedState = {
        DataOfPlayers: DataOfPlayers,
      }

      let mockPlayersFiltered = _.filter(mockPlayersWithAge, (item) => item.position === mockFilter.position);

      expect(mockPlayersFiltered).toHaveLength(1);
      expect(mockPlayersFiltered[0].name).toBe('David de Gea');
    });
  });
});

