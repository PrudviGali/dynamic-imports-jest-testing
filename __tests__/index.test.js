/* global it, expect, describe */
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App';
import DynamicTab from '../src/DynamicTab';
import toJson from 'enzyme-to-json';
import { setTimeout } from 'timers';

describe('Dynamic Import', () => {
   it('renders correctly', () => {
     const component = mount(<App />);
     component.find('button').simulate('click');
     const tree = toJson(component);
     expect(tree).toMatchSnapshot();
     // Using Timeout for tetsing
     // Ideally it has to happen through async loading
     setTimeout(()=> {
       component.update();
       console.log(component.find(DynamicTab).children().debug());
     }, 1000)
  });

});
