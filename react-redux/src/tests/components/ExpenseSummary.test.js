import React from 'react'
import { shallow } from 'enzyme'
import {ExpenseSummary} from '../../components/ExpenseSummary'

test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal = {554}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with > 1 expenses', () => {
  const wrapper = shallow(<ExpenseSummary expenseCount={3} expensesTotal = {85994}/>);
  expect(wrapper).toMatchSnapshot();
});