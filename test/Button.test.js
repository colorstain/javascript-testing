import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';

import Button from '../src/Button';


describe('<Button />', () => {
  it('renders a button by default', () => {
    const wrapper = shallow(<Button>Awesome</Button>);
    expect(wrapper.find('button')).to.have.length(1);
  });

  it('renders an anchor if useAnchor is used', () => {
    const wrapper = shallow(<Button useAnchor={true}>Awesome</Button>);
    expect(wrapper.find('button')).to.have.length(0);
    expect(wrapper.find('a')).to.have.length(1);
  });

  it('simulate click event', () => {
    const clickHandler = sinon.spy()
    const wrapper = shallow(
      <Button clickHandler={clickHandler}>
        Awesome
      </Button>);
    wrapper.find('button').simulate('click');
    expect(clickHandler).to.have.property('callCount', 1);
  });

});
