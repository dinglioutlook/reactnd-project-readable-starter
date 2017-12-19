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

function comments (state=[], action){
    const {comment, comments} = action

    switch (action.type)
    {
        case ADD_COMMENT:
            return [...state, comment]
        
        case GET_POST_COMMENT:
            return comments

        case DELETE_COMMENT:
            return state.filter(c => c.id !== comment.id)

        case VOTE_COMMENT:
            return state.map(c => c.id === comment.id ? comment : c)

        default:
            return state
    }
}


function categories (state=[], action){
    const {categories} = action

    switch (action.type){
        case GET_ALL_CATEGORIES :
            return [...categories]
        default:
            return state;
    }
}


function posts(state=[], action){
    const {posts, post} = action

    switch (action.type) {
        case GET_ALL_POST:
        return [...posts]
        case ADD_POST:
        return[...state, post]
        default:
        return state;
    }
}


function post(state=[], action){
    const {post} = action;

    switch(action.type){
        case GET_POST:
            return post
        case VOTE_POST:
            return post
        case EDIT_POST:
            return post
        case DELETE_POST:
            return post
        case VOTE_POST:
            return post
        
        default: 
            return state;
    }
}

export default combineReducers({comments, post, categories, posts})