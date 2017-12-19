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

    checkUrlCategory(post){
        return post.category === this.props.match.params.category ? true : false
    }

    render(){
        const {post, comments} = this.props;
        const post_category = this.props.match.params.category; 

        return(
            <div className="container">
            {this.checkUrlCategory(post) ? (
            <div>
              <div className="row">
                <div className="post-vote">
                  <i 
                    onClick={() => this.onVote(post.id,'upVote')}></i>
                  <span className="post-num-votes">{post.voteScore}</span>
                  <i 
                    onClick={() => this.onVote(post.id,'downVote')}></i>
                </div>
    
                <div className="col">
                <h1>{post.title}</h1>
                <p className="author-name">by {post.author} </p>
                <p>{post.body}</p>
    
                <div className="row mt">
                  <div>
                    <strong> {post.commentCount} </strong> Comments
                  </div>
                  <div className="col-sm">
                    <Link 
                      to={{
                        pathname: `/editPost`, 
                        state: post                       
                      }}>
                      <i> Edit </i>                      
                    </Link>
                  </div>
                  <div>
                    <Link to="/">
                      <i onClick={() => this.onDeletePost(post)}> Delete </i>
                    </Link>            
                  </div>
                </div>
                </div>
              </div>
    
              <div className="add-comment">
                <h1>Comments</h1>
                <Link to={{ pathname:`/addComment`, state: {id: post.id, postUrl: this.props.location.pathname} }}>
                  <i> Add Comment </i>
                </Link> 
              </div>
    
              {comments.map((comment) => (
                <div key={comment.id} >        
                  <div>
                    <i onClick={() => this.onVoteComment(comment.id,'upVote')}></i>
                    <span >{comment.voteScore}</span>
                  </div>
    
                  <div>         
                    <p>{comment.body}</p>
                    <p className="author-name">by {comment.author} </p>
    
                    <div>
                      <div>
                      </div>
                      <div>
                        <Link 
                          to={{
                            pathname: `/editComment`, 
                            state: {...comment, postUrl: this.props.location.pathname}
                          }}>
                          <i> Edit </i>                      
                        </Link>
                      </div>
                      <div>
                        <i onClick={() => this.onDeleteComment(comment)}> Delete </i>           
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            ) : (
              <NotFoundPage />
            )}
          </div>
        );
    }
}

function mapStateToProps({post, comments}){
    return {
        post,
        comments
    }
}

export default connect(mapStateToProps)(Post)