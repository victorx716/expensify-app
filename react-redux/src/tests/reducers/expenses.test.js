import expensesReducer from '../../reducers/expenses'
import moment from 'moment'

const expenses = [{
  id: '1',
  description: 'gum',
  note: '',
  amount: 195,
  createdAt: 0
}, {
  id: '2',
  description: 'rent',
  note: '',
  amount: 109500,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id: '3',
  description: 'credit card',
  note: '',
  amount: 4500,
  createdAt: moment(0).add(4, 'days').valueOf()
}]

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});

  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: -1
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE',
    expense: {
      id: '4',
      description: 'bowling ball',
      note: '',
      amount: 888,
      createdAt: 5000
    }
  }
  const state = expensesReducer(expenses, action)
  // state is the array that comes back
  expect(state).toEqual([...expenses, action.expense])
})

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    expense : {
      id: '1',
      description: 'gummy bears',
      note: '',
      amount: 195,
      createdAt: 0
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})

test('should not edit an expense if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    expense : {
      id: '-1',
      description: 'gummmmmmy',
      note: '',
      amount: 195,
      createdAt: 0
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})






