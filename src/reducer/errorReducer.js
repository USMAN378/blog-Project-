import {GET_ERR} from '../actions/types';
const initialState = {}
export const errorReducer = (state =initialState,action) => {
switch(action.type){
    case GET_ERR:
    return  action.payload
    default : 
    return state
}


}

export default errorReducer;