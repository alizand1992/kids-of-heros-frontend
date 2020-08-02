import React from 'react';

import { DefaultButton, SignIn, SignUp } from '../../../../components/Common/Buttons';
import { shallow } from 'enzyme';

describe('Buttons', () => {
  describe('DefaultButton', () => {
    describe('without props', () => {
      const wrapper = shallow(<DefaultButton />);

      it('has a button', () => {
        expect(wrapper.find('Button')).toHaveLength(1);
      });

      it('has a button with default-button className', () => {
        expect(wrapper.find('Button.default-button')).toHaveLength(1);
      });
    });

    describe('with style', () => {
      const wrapper = shallow(<DefaultButton style={{ test: 'test' }} />);

      it('has a style props with the passed on style', () => {
        expect(wrapper.find('Button').props().style).toStrictEqual({ test: 'test' });
      });
    });

    describe('with children', () => {
      const wrapper = shallow(<DefaultButton>Child</DefaultButton>);

      it('has renders the children', () => {
        expect(wrapper.text()).toBe('Child');
      });
    });
  });

  describe('Sign In', () => {
    const wrapper = shallow(<SignIn />);

    it('has a DefaultButton', () => {
      expect(wrapper.find('DefaultButton')).toHaveLength(1);
    });

    it('has a green background', () => {
      expect(wrapper.find('DefaultButton').props().style.backgroundColor).toBe('#3C787E');
    });

    it('has a Sign In text', () => {
      expect(wrapper.find('DefaultButton').childAt(0).text()).toBe('Sign In');
    });
  });

  describe('Sign Up', () => {
    const wrapper = shallow(<SignUp />);

    it('has a DefaultButton', () => {
      expect(wrapper.find('DefaultButton')).toHaveLength(1);
    });

    it('has a orange background', () => {
      expect(wrapper.find('DefaultButton').props().style.backgroundColor).toBe('#D56F3E');
    });

    it('has a Sign In text', () => {
      expect(wrapper.find('DefaultButton').childAt(0).text()).toBe('Sign Up');
    });
  });
});
