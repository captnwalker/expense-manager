import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <h1>Restaurant Expense Tracker</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Enter Invoice</NavLink>
        <NavLink to="/help" activeClassName="is-active">Reservations</NavLink>
    </header>
);

export default Header;