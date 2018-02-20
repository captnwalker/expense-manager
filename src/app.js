import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink}from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
    This is ExpenseDashboardPage componenet
    </div>
);

const AddExpensePage = () => (
    <div>
        This is AddExpensePage componenet
    </div>
);

const EditExpensePage = () => (
    <div>
        This is EditExpensePage componenet
    </div>
);

const HelpPage = () => (
    <div>
        This is HelpPage componenet
    </div>
);

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go Home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expense Manager</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />
                <Switch>
                    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                    <Route path="/create" component={AddExpensePage} />
                    <Route path="/edit" component={EditExpensePage} />
                    <Route path="/help" component={HelpPage} />
                    <Route component={NotFoundPage} />
                </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
