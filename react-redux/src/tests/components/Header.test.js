import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => { }} />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});


// import React from 'react'
// import { shallow } from 'enzyme';
// import Header from '../../components/Header'
// import Enzyme from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import toJSON from 'enzyme-to-json';

// Enzyme.configure({adapter: new Adapter()});

// test('should render Header', () => {
//   const wrapper = shallow(<Header startLogout={() => { }}/>);
//   expect(wrapper).toMatchSnapshot();
// })

// test('should call startLogout on button click', () => {
//   const startLogout = jest.fn();
//   const wrapper = shallow(<Header startlogout={startLogout}/>);
//   wrapper.find('button').simulate('click');
//   expect(startLogout).toHaveBeenCalled();
// });

// // shallow & full DOM rendering
// // full DOM renders child components
