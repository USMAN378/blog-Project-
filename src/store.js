import {createStore ,compose , applyMiddleware} from 'redux';
import allReducers from './reducer';
import thunk from 'redux-thunk';
const reduxthunk = [thunk];
const initialState = {};
const store = createStore(allReducers,{} , compose(applyMiddleware(...reduxthunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
export default store;
