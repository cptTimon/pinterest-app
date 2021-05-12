import React from 'react';
import { shallow } from 'enzyme';
import Image from './Image';

const mockProps = {
  url: 'https://picsum.photos/id/117/1544/1024',
};

describe('Component Image', () => {
  it('it should render without crashing', () => {
    const component = shallow(<Image url={mockProps.url} />);
    expect(component).toBeTruthy();
  });
  it('it should throw error without url', () => {
    expect(() => shallow(<Image />)).toThrow();
  });
});