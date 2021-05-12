import React from 'react';
import { shallow } from 'enzyme';
import PageNav from './PageNav';

describe('Component PageNav', () => {
  it('it should render without crashing', () => {
    const component = shallow(<PageNav />);
    expect(component).toBeTruthy();
  });
});