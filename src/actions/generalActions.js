import {GET_POST, GET_ERR} from './types';
import axios from 'axios';


export const getPosts = () => dispatch => {

    axios.get('/api/posts/all-posts')
    .then(
        res => dispatch({
            type : GET_POST,
            payload : res.data
        })
    )
    .catch(err => dispatch({
        type : GET_ERR,
        payload : err.response.data
    }));
}

export const getSinglePost =(id) => dispatch => {
axios.get('/api/posts/post-read/'+id)
.then(res =>{})
.catch(err => dispatch({
    type : GET_ERR,
    payload : err.response.data
}));   
}