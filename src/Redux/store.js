import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import itemsReducer from './Reducers/itemsReducer'

const rootReducer = combineReducers({
    itemsReducer
});

export default createStore(rootReducer, applyMiddleware(promise))