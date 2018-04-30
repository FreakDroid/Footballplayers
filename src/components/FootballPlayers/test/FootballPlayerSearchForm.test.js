import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

import FootballPlayerSearchForm from '../FootballPlayerSearchForm';


// describe what we are testing
describe('FootballPlayerSearchForm Component', () => {

    // make our assertion and what we expect to happen 
    it('should render FootballPlayerSearchForm without throwing an error', () => {
        const mockFunction = () => { }
        let component = shallow(<FootballPlayerSearchForm submitFunction={mockFunction} />);
        expect(component.type()).toEqual('form');
    })

    // make our assertion and what we expect to happen 
    it('should render submit FootballPlayerSearchForm without throwing an error', () => {

        const onSubmit = jest.fn();
        let component = mount(<FootballPlayerSearchForm submitFunction={onSubmit} />);
        
        const button = component.find('button');
        button.simulate('submit');
        expect(onSubmit).toHaveBeenCalled();
    });
})