import { combineReducers } from 'redux';

 import {
    get_categories,
    get_post,
    get_all_post,
    get_comment,
    add_post,
    add_comment,
    delete_comment,
    edit_comment,
    vote_comment,
    delete_post,
    edit_post,
    vote_post
 } from '../actions'

function comments (state=[], action){

}


function post (state=[], action){

}


function categories(state=[], action){

}


function post(state=[], action){

}

export default combineReducers({comments, post, categories, posts})