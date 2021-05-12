import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container';

describe('Component Container', () => {
  it('it should render without crashing', () => {
    const component = shallow(<Container />);
    expect(component).toBeTruthy();
  });
});