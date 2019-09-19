import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import {setTextFilter} from './actions/filters'
import {addExpense} from './actions/expenses'
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';
import './firebase/firebase'
import './playground/promises'

const store = configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 4500}))
store.dispatch(addExpense({description: 'Rent', amount: 105000, createdAt: 10000}))
store.dispatch(addExpense({description: 'Electric bill', amount: 9000}))

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses)

const jsx = (
  < Provider store = {store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
