import {
    getAllCategories, 
    getAllPosts, 
    getPost,
    addPost, 
    deletePost,
    editPost,
    votePost, 
    getAllCommentFromPost, 
    addComment, 
    deleteComment, 
    editComment, 
    voteComment
  } from '../utils/api'

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'

export const GET_ALL_POST = 'GET_ALL_POST'
export const GET_POST = 'GET_POST'
export const ADD_POST = 'ADD_POST'
export const DELETE_POST = 'DELETE_POST'
export const EDIT_POST = 'EDIT_POST'
export const VOTE_POST = 'VOTE_POST'

export const GET_POST_COMMENT = 'GET_POST_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const VOTE_COMMENT = 'VOTE_COMMENT'

const get_categories_action = (categories) => (
    {
        type: GET_ALL_CATEGORIES,
        categories
    }
)

export const get_categories =() => dispatch => {
    getAllCategories().then(categories => {
            dispatch(get_categories_action(categories))
        }
    )
}

const get_post_action = post =>(
    {
        type: GET_POST,
        post
    }
)

export const get_post =(id) => dispatch => {
    getPost(id).then((post) => {
        dispatch(get_post_action(post))
      }
    )
}

const get_all_posts_action = posts => (
    {
        type:GET_ALL_POST,
        posts
    }
)

export const get_all_post = () => dispatch => {
    getAllPosts().then((posts) => {
        dispatch(get_all_posts_action(posts))
    })
}

const get_comment_action = comments => (
    {
        type: GET_POST_COMMENT,
        comments
    }
)

export const get_comment = (post_id) => dispatch => {
    getAllCommentFromPost(post_id).then(
        (comments) => {
            dispatch(get_comment_action(comments))
        }
    )
}

const add_post_action = post => (
    {
        type: ADD_POST,
        post
    }
)
export const add_post = (post) => dispatch => {
    addPost(post).then(
        (post) => dispatch(add_post_action(post))
    )
}

const add_comment_action = comment => (
    {
        type: ADD_COMMENT,
        comment
    }
)
export const add_comment = (comment) => dispatch => {
    const new_comment = {...comment, timestamp: Date.now()};
    addComment(new_comment).then(
        (_comment) => {
            dispatch(add_comment_action({..._comment}))
        }
    )
}

const delete_comment_action = comment => (
    {
        type: DELETE_COMMENT,
        comment
    }
)
export const delete_comment = (comment) => dispatch => {
    deleteComment(comment.id).then(
        (_comment) => {
            dispatch(delete_comment_action(_comment))
        }
    )
}

const edit_comment_action = comment => (
    {
        type: EDIT_COMMENT,
        comment
    }
)
export const edit_comment = (comment) => dispatch => {
    editComment(comment).then(
        (_comment) => {
            dispatch(edit_comment_action(_comment))
        }
    )
}

const vote_comment_action = comment => (
    {
        type: VOTE_COMMENT,
        comment
    }
)
export const vote_comment = (id, comment) => dispatch => {
    voteComment(id, comment).then(
        (_comment) => {
            dispatch(vote_comment_action(_comment))
        }
    )
}

const delete_post_action = post => (
    {
        type: DELETE_POST,
        post
    }
)
export const delete_post = (post) => dispatch => {
    deletePost(post.id).then(
        (_post) => {
            dispatch(delete_post_action(_post))
        }
    )
}

const edit_post_action = post => (
    {
        type: EDIT_POST,
        post
    }
)
export const edit_post = (post) => dispatch => {
    editPost(post).then(
        (_post) => {
            dispatch(edit_post_action(_post))
        }
    )
}

const vote_post_action = post => (
    {
        type: VOTE_POST,
        post
    }
)
export const vote_post = (id, post) => dispatch => {
    votePost(id, post).then(
        (_post) => {
            dispatch(vote_post_action(_post))
        }
    )
}