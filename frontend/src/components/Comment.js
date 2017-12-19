import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {add_comment, edit_comment} from '../actions'
import uuid from 'js-uuid';

class Comment extends Component{
    state = {
        body: '' ,
        author: ''      
      }

      componentDidMount() { 
        const {id} = this.props.location.state 
        if(this.props.location.state.parentId){
          this.setState(this.props.location.state)
          this.setState({isNewComment: false}) 
        }else{    
          this.setState({id: uuid.v1(),parentId: id})
          this.setState({isNewComment: true}) 
        }
      }

    inputUpdate(event){
        this.setState({[event.target.name] : event.target.value})
    } 

    onClickSubmit(){
        if (this.state.isNewComment){
            this.props.dispatch(add_comment(this.state));
        }
        else{
            this.props.dispatch(edit_comment(this.state));
        }
    }
    
    render(){
        const {postUrl} = this.props.location.state
        return(
            <div className='container-commnets'>
                <h1> Comment Edit </h1>
                <div className="div-body">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="body" 
                      placeholder="Comment"                    
                      value={this.state.body}
                      onChange={(event) => this.inputUpdate(event)} />
                </div>
                <div className="div-author">
                    <input 
                      type="text" 
                      className="form-control" 
                      name="author" 
                      placeholder="Author"
                      value={this.state.author}
                      onChange={(event) => this.inputUpdate(event)} />
                </div>
                <div className="butten-save">
                  <Link 
                    className="btn"
                    type="button"
                    onClick={() => this.onClickSubmit()}
                    to={`${postUrl}`}>Save</Link> 
                </div>
            </div>
        )
    }
}

export default connect()(Comment)