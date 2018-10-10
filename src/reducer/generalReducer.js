import { GET_POST } from '../actions/types';
const initialState = {
    posts : []
}

export const getPostReducer = (state = initialState , action) => {

switch(action.type){
    case GET_POST:
    return {
        ...state,
        posts : action.payload
    }
    default:
    return state;
}
}