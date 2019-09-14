import React from 'react';
import { connect } from 'react-redux'; 
import ExpenseListItem from './ExpenseListItem'

const ExpenseList = (props) => (
  <div>
    <h1> Expense List</h1>
    {props.expenses.map((expense) => {
      <li>{expense.description} + {expense.amount} 
        + {expense.createdAt}
      </li>
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  }
};

export default connect(mapStateToProps)(ExpenseList);