import React from 'react'
import { shallow } from 'enzyme';
import Header from '../../components/Header'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import toJSON from 'enzyme-to-json';

Enzyme.configure({adapter: new Adapter()});

test('should render Header', () => {
  const wrapper = shallow(<Header startLogout={() => { }}/>);
  expect(wrapper).toMatchSnapshot();
})

// shallow & full DOM rendering
// full DOM renders child components
