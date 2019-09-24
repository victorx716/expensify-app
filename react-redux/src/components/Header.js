import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({startLogout}) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create expense</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>    
    <button onClick = {startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatchEvent(startLogout())
})

export default connect(mapDispatchToProps)(Header);
