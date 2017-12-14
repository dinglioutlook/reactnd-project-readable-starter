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
    VOTE_COMMENT,
    edit_post
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
        case DELETE_POST:
        return [...post]
        case EDIT_POST:
        return [...post]
        case VOTE_POST:
        return [...post]
        default:
        return state;
    }
}


function post(state={}, action){
    const {post, editPost} = action;

    switch(action.type){
        case GET_POST:
        return post
        case VOTE_POST:
        return edit_post

        default: return state;
    }
}

export default combineReducers({comment, post, categories, posts})