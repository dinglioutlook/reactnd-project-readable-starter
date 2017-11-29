import { combineReducers } from 'redux';

 import {
    GET_ALL_CATEGORIES,
    GET_ALL_POST,
    GET_POST,
    ADD_POST,
    DELETE_POST,
    EDIT_POST,
    VOTE_POST,
    GET_POST_COMMENT,
    ADD_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT,
    VOTE_COMMENT
 } from '../actions'

function comment (state={}, action){
    const {comment} = action

    switch (action.type)
    {
        case ADD_COMMENT:
            return {...comment}
        
        case GET_POST_COMMENT:
            return {...comment}

        case DELETE_COMMENT:
            return state.filter(c => c.id !== comment.id)

        case VOTE_COMMENT:
            return state.filter(c => c.id === comment.id ? comment : c)

        default:
            return state
    }
}


function posts (state={}, action){

}


function categories(state={}, action){

}


function post(state={}, action){

}

export default combineReducers({comment, post, categories, posts})