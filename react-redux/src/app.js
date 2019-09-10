import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component
  </div>
)

const AddExpensePage = () => (
  <div>
    This is from my add expense component
  </div>
)

const EditExpensePage = () => (
  <div>
    This is from my edit expense component
  </div>
)

const HelpPage = () => (
  <div>
    This is from my help page component
  </div>
)

const NotFoundPage = () => (
  <div>
    404
  </div>
)

  // Switch lets us set up 404 fallback on non-specified routes
const routes = (
  <BrowserRouter>
    <Switch>
    <Route path="/" exact component={ExpenseDashboardPage}/>
    <Route path="/create" component={AddExpensePage}/>
    <Route path="/edit" component={EditExpensePage}/>
    <Route path="/help" component={HelpPage}/> 
    <Route component={NotFoundPage}/>       
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
