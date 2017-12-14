import React, {Component} from 'react'
import { connect } from 'react-redux'
import { get_all_post, delete_post, vote_post } from '../actions/index';
import { Link } from 'react-router-dom'

// this is a clsss to list all the posts
class PostList extends Component {

    componentDidMount(){
        this.props.dispatch(get_all_post())
    }

    onDelete = (post) => {
        this.props.dispatch(delete_post(post))
    }

    onVote = (id, vote) => {
        this.props.dispatch(vote_post(id, vote))
    }

    render(){
        const { posts, selectCategory, selectBy } = this.props;
        const selectPosts = posts.filter((a) => 
            selectCategory === 'All'? true: a.category === selectCategory
            ).sort((c, d) => selectBy === 'Date'? c.timestamp - d.timestamp : c.voteScore - d.voteScore )

        return(
            <div>
                {
                    selectPosts.map((post) =>
                (
                   <div key = {post.id}>
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
                ))}
            </div>
            )
        }  
}

function mapStateToProps ({ posts }) { 
    return {
      posts
    }
  }

  export default connect(mapStateToProps)(PostList)