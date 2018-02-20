import { createStore, combineReducers } from 'redux';

//Add expense
const addExpense = () => ({
    type: 'ADD_EXPENSE',
    expense: {

    }
});


//Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        default:
        return state;
 }
};

//Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

//Store creation

const store = createStore(combineReducers({
    exp: expensesReducer,
    filters: filtersReducerDefaultState
    })
);



console.log(store.getState());

const demoState = {
    expenses: [{
        id: 'hadsfiuh',
        description: 'Jan rent',
        note: 'final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};