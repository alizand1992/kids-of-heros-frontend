import React from 'react';

import { shallow } from 'enzyme';
import Landing from '../../../components/Landing';

describe('Landing',  () => {
  const wrapper = shallow(<Landing />);

  it('has the menu', () => {
    expect(wrapper.find('Menu')).toHaveLength(1);
  });

  it('has a site-title', () => {
    expect(wrapper.find('h1.site-title')).toHaveLength(1);
  });
});
