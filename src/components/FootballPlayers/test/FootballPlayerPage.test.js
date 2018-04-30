import React from 'react';
import { shallow } from 'enzyme';

import FootballPlayerSearchForm from '../FootballPlayerSearchForm';
import FootballPlayerList from '../FootballPlayerList';


// describe what we are testing
describe('FootballPLayerPage Component', () => {

    // make our assertion and what we expect to happen 
    it('should render FootballPlayerSearchForm without throwing an error', () => {
        let submitFunction = () => { };
        expect(shallow(<FootballPlayerSearchForm submitFunction={submitFunction} />).find('#searchBar').length).toBe(1)
    })

    // make our assertion and what we expect to happen 
    it('should render FootballPlayerList without throwing an error', () => {
        let mockPlayersWithAge = [
            { contractUntil: "2022-06-30", dateOfBirth: "1993-05-13", jerseyNumber: 9, name: "Romelu Lukaku", nationality: "Belgium", age: '25', position: "Center-Back" },
            { contractUntil: "2019-06-30", dateOfBirth: "1990-11-07", jerseyNumber: 1, name: "David de Gea", nationality: "Spain", age: '28', position: "Keeper" },
            { contractUntil: "2019-06-30", dateOfBirth: "1990-11-07", jerseyNumber: 1, name: "Daniel Perez", nationality: "Spain", age: '25', position: "Central-Midfield" }]

        expect(shallow(<FootballPlayerList footballPlayers={mockPlayersWithAge} />).exists()).toBe(true)
    })
})