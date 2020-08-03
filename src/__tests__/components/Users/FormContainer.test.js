import React from 'react';

import { mount } from 'enzyme';
import { HashRouter as Router } from 'react-router-dom';

import FormContainer from '../../../components/Users/FormContainer';

describe('FormContainer', () => {
  const wrapper = mount(<Router><FormContainer>form elements</FormContainer></Router>);

  it('has a close button', () => {
    expect(wrapper.find('i.material-icons').text()).toBe('close');
  });

  it('renders children', () => {
    expect(wrapper.html()).toContain('form elements');
  });
});
