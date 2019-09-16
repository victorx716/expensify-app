import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should set up edit expense action object', () => {
  const action = editExpense('lmaobaby', { note: 'hi'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'lmaobaby',
    updates: {
      note: 'hi'
    }
  });
});

test('should set up add expense action object with provided values', () => {
  const expenseData = {
    description: 'food',
    note: 'last month rent',
    amount: 888,
    createdAt: 1000 
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should add expense with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
    id: expect.any(String)
  })
})