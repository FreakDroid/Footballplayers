import React from 'react';
import { shallow } from 'enzyme';

import FootballPlayerListRow from '../FootballPlayerListRow';


// describe what we are testing
describe('FootballPLayerListRow Component', () => {
    let mockPlayersWithAge =[
        {contractUntil: "2022-06-30", dateOfBirth: "1993-05-13", jerseyNumber: 9, name: "Romelu Lukaku", nationality: "Belgium", age:'25', position: "Center-Back"},
        {contractUntil: "2019-06-30", dateOfBirth: "1990-11-07", jerseyNumber: 1, name: "David de Gea", nationality: "Spain", age:'28', position: "Keeper"},
        {contractUntil: "2019-06-30", dateOfBirth: "1990-11-07", jerseyNumber: 1, name: "Daniel Perez", nationality: "Spain", age:'25', position: "Central-Midfield"}]

    // make our assertion and what we expect to happen 
    it('should render FootballPlayerList without throwing an error', () => {

        let mount = shallow(<FootballPlayerListRow player={mockPlayersWithAge[0]} />);

        // //Mounted the componenet
        expect((mount).exists()).toBe(true);
        //The component is correct
        expect(mount.find('tr').length).toBe(1);
    })
})