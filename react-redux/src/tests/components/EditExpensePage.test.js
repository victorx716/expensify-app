import React from 'react'
import {shallow} from 'enzyme'
import {EditExpensePage} from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage 
    startEditExpense={startEditExpense} history={history} 
    startRemoveExpense = {startRemoveExpense} expense = {expenses[1]}/>);
});

test('should render editExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
});

test('should handle editExpense', () => {
  wrapper.find('button').simulate('click')
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({
    id: expenses[1].id
  });
});


// test('should handle onSubmit', () => {
//   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
//   expect(history.push).toHaveBeenLastCalledWith('/');
//   expect(editExpense).toHaveBeenLastCalledWith(expenses[1]);
//   expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[1]);  
// });
