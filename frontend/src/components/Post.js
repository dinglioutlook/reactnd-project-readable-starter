import React, {Component} from 'react'
import {connect} from 'react-redux'
import { delete_post,vote_post , delete_comment, vote_comment, get_post, get_comment} from '../actions'
import {NotFoundPage} from './NotFoundPage'
import {Link} from 'react-router-dom'

// this is for show post
class Post extends Component{
    componentDidMount(){
        const postId = this.props.match.params.id
        this.props.dispatch(get_comment(postId))
        this.props.dispatch(get_post(postId))  
    }

    onDeletePost(post){
        this.props.dispatch(delete_post(post)) 
    }

    onVotePost(id, vote){
        this.props.dispatch(vote_post(id, vote))
    }

    onVoteComment(id, vote){
        this.props.dispatch(vote_comment(id, vote))
    }

    onDeleteComment(comment){
        this.props.dispatch(delete_comment(comment))
    }

    render(){
        const {post, comment} = this.props;
        const post_category = this.props.match.params.category; 

        return(
            <div className="post-container">
                        <div>
                            <i className='voteUp' onClick={()=> this.onVote(post.id, 'upVote')} />
                            <span className="post-num-votes">{post.voteScore}</span>
                            <i className = 'voteDown' onClick={()=> this.onVote(post.id, 'downVote')} />
                        </div>
                        <div className='postTitle'>
                            <Link to={
                                {
                                    pathname: `/${post.category}/${post.id}`,
                                    state: post.id
                                }
                            }>
                            <h1> {post.title} </h1>
                            </Link>
                            <p className="author-name">by {post.author} </p>               
                            <p>{post.body}</p>
                            <div className='comments' />
                            <div className="comments-icon">
                            <div className='comments'>
                                <strong> {post.commentCount} </strong> 
                            </div>    
                                <div className = 'edit-post'>
                                <Link 
                                    to={{
                                        pathname: `/editPost`, 
                                        state: post                       
                                    }}>
                                    Edit Post
                                </Link>
                                </div>        
                                <i className="post-delete" onClick={() => this.onDelete(post)}> Delete </i>
                            </div>
                        </div>
            </div>
        );
    }
}

function mapStateToProps({post, comment}){
    return {
        post,
        comment
    }
}

export default connect(mapStateToProps)(Post)