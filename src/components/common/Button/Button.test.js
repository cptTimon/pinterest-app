import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

const select = {
  layout: '.layout',
};

describe('Component Button', () => {
  it('it should render without crashing', () => {
    const component = shallow(<Button />);
    expect(component).toBeTruthy();
  });
  it('it should have proper class based on given variant', () => {
    const component = shallow(<Button variant='layout'/>);
    expect(component.exists(select.layout)).toEqual(true);
  });
});