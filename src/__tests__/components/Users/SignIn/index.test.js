import React from 'react';

import { shallow } from 'enzyme';
import SignIn from '../../../../components/Users/SignIn';

describe('SignIn', () => {
  const wrapper = shallow(<SignIn />);

  it('has a FormContainer', () => {
    expect(wrapper.find('withRouter(FormContainer)')).toHaveLength(1);
  });

  it('has a header with sign in', () => {
    expect(wrapper.find('Header').html()).toContain('Sign In');
  });

  it('has an email field', () => {
    expect(wrapper.find({ type: 'email' })).toHaveLength(1);
  });

  it('updates the email state on change', () => {
    wrapper.find({ type: 'email' }).simulate('change', { target: { value: 'john.smith@gmail.com' }});
    expect(wrapper.state().email).toBe('john.smith@gmail.com');
  });

  it('has a password field', () => {
    expect(wrapper.find({ type: 'password' })).toHaveLength(1);
  });

  it('updates the password state on change', () => {
    wrapper.find({ type: 'password' }).simulate('change', { target: { value: 'notSoSecurePassword' }});
    expect(wrapper.state().password).toBe('notSoSecurePassword');
  });

  it('has a sign in button', () => {
    expect(wrapper.find('SignIn')).toHaveLength(1);
  });
});
