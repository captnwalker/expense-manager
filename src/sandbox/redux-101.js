import { createStore, combineReducers} from 'redux';


const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {

        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };

        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };

        case 'SET':
            return {
                count: action.count
            };

        case 'RESET':
            return {
                count: 0
            };

        default:
            return state;
    }
}

const store = createStore(countReducer);

const unsuscribe =
store.subscribe(() => {
console.log(store.getState());
});


//Action


//Increment
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

//Reset
store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT',
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

store.dispatch({
    type: 'SET',
    count: 101
})