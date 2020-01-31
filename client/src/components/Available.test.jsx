 import React from 'react';
import { shallow, mount } from 'enzyme';
import Available from './Available';
import renderer from 'react-test-renderer';

//enzyme-jest
const wrapper = mount(<Available/>);

//react-test-renderer
const testRenderer = renderer.create(<Available/>);
const

describe ('available', () => {
  test('unordered list exists test', () => {
    expect(wrapper.find('ul')).toExist();
  })
  test('list item exists test', () => {
    expect(wrapper.find('li')).toExist();
  })


})
