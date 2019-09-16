import selectExpenses from '../../selectors/expenses';
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

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([ expenses[2], expenses[1]])
})

test('should filter by start date', () => {
  const filters = {
    text:'',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[2], expenses[0]])
})


// filter end date
test('should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  }
  const result = selectExpenses(expenses, filters)
  expect(result).toEqual([expenses[0], expenses[1]])
})

// sort by date
test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0).subtract(5, 'days'),
    endDate: moment(0).add(5, 'days')
  }
  const result = selectExpenses(expenses, filters)
  // last one comes first
  expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

// sort by amount
test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters)
  // last one comes first
  expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})

