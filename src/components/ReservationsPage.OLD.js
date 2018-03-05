import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import Header from './Header';

// this page is Under Construction
export class ReservationsPage extends React.Component {

render() {
    return (
        <div className="header">
                <div className="page-header">
                    <div className="content-container">
                        <div>
                        <h1 className="page-header__title">Future Home of the Reservations component</h1>
                        </div>
                    <a href="/dashboard" button className="button button--linkback">Return to Dashboard</a>
                    </div>
                
                </div>
                <div className="squirrel">
                    <p><h1>Under Construction</h1></p>
                        <img src="/img/Web_under_construction.png" alt="Under Construction" />                
                </div>
        </div>
      );
    }
}
export default connect(undefined)(ReservationsPage);