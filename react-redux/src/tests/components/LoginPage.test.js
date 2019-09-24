import React from 'react'
import { shallow } from 'enzyme'
import {LoginPage} from '../../components/LoginPage'

 test('should render LoginPage', () => {
   const wrapper = shallow(<LoginPage/>);
   expect(wrapper).toMatchSnapshot();
 });


 // export const and import { component}

 // export default and import component

 