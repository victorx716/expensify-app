import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import {EditExpensePage} from '../components/EditExpensePage'
import {AddExpensePage} from '../components/AddExpensePage'
import {ExpenseDashboardPage} from '../components/ExpenseDashboardPage'
import {HelpPage} from '../components/HelpPage'
import {NotFoundPage} from '../components/NotFoundPage'
import {Header} from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />              
        <Switch>
          <Route path="/" exact component={ExpenseDashboardPage}/>
          <Route path="/create" component={AddExpensePage}/>
          <Route path="/edit" component={EditExpensePage}/>
          <Route path="/help" component={HelpPage}/> 
          <Route component={NotFoundPage}/>       
        </Switch>
    </div>
  </BrowserRouter>
);
  // Switch lets us set up 404 fallback on non-specified routes

  export default AppRouter;