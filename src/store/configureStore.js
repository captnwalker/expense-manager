import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

// Building our store with redux and redux-thunk middleware
// Redux is a predictable state container for JavaScript apps. Esentially, Flux for React
// Redux-Thunk is a function that wraps an expression to delay its evaluation

const composeEnhancers = window.__REDUX_REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer
        }),

        composeEnhancers(applyMiddleware(thunk))       
    );

        return store;
};
