import React from 'react';

import { shallow } from 'enzyme';
import Header from '../../../components/Users/Header';

describe('Header', () => {
  const wrapper = shallow(<Header>Sign In</Header>);

  it('has an h2 with header class', () => {
    expect(wrapper.find('h2.header')).toHaveLength(1);
  });

  it('renders its children inside the header tag', () => {
    expect(wrapper.find('h2.header').text()).toBe('Sign In');
  });
});
