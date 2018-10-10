import {combineReducers} from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import {getPostReducer} from './generalReducer';

const allReducers = combineReducers({
    auth : authReducer,
    errors : errorReducer,
    posts : getPostReducer
})

export default allReducers;