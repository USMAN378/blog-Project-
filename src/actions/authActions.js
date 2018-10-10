import {LOGIN_USER , GET_ERR} from './types';

import axios from 'axios';

export const LoginUser = (userData) => dispatch => {
    
axios.post('/api/users/login',userData)
.then(res => {

    const { token} = res.data;
    localStorage.setItem('jsonToken' , token);

    //sispatch  current user 



})
.catch(err => dispatch({
    type : GET_ERR,
    payload : err.response.data

}))
}