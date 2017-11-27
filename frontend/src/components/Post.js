import React, {Component} from 'react'
import {connect} from 'react-redux'


class Post extends Component{
    componentDidCatch(){

    }

    onDeletePost(post){}

    onVotePost(id, vote){}

    onVoteComment(id, vote){}

    onDeleteComment(comment){}

    render(){
        
        const {post, comment} = this.props

        return(
            <div className="post-container">
            
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