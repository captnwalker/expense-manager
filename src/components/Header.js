import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogout } from '../actions/auth';


export const Header = ({ startLogout }) => (
    
    <header className="header">
        
        <div className="content-container"> 

            <div className="header__content">

                <Link className="header__logo" to="/dashboard">
                     <h1>Restaurant Expense Manager</h1>
                </Link>

                <a href="https://reservationist-2.herokuapp.com/" 
                target="_blank" 
                button className="button button--link">Reservations</a>


             <button className="button button--link" onClick={startLogout}>Logout</button>
        </div>
   </div>
</header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);