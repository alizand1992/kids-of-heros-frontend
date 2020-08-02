import React from 'react';

import { shallow } from 'enzyme';
import Menu from '../../../components/Menu';

describe('Menu', () => {
  const wrapper = shallow(<Menu />);

  it('has a container with user-action-menu classname', () => {
    expect(wrapper.find('div.user-action-menu')).toHaveLength(1);
  });

  it('has a sign in button', () => {
    expect(wrapper.find('SignIn')).toHaveLength(1);
  });

  it('has a sign up button', () => {
    expect(wrapper.find('SignUp')).toHaveLength(1);
  });
});
