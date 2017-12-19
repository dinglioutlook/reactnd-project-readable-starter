// this is for edit and delete post
import { add_post, edit_post } from '../actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import React, {Component} from 'react'
import uuid from 'js-uuid';

class PostForm extends Component {
    state = {
          id: '',
          timestamp: '',
          title: '',
          body: '' ,
          author: '',
          category: 'react'            
        }

    componentDidMount(){
        if(this.props.location.state){
            this.setState(this.props.location.state)
            this.setState({isNewPost: false})
          }else {
            this.setState({id: uuid.v1(), timestamp: Date.now()})
            this.setState({isNewPost: true})
          }
    }

    inputUpdate(event){
        this.setState({[event.target.name] : event.target.value})
    }

    onClickSubmit(){
        if (this.state.isNewPost){
            this.props.dispatch(add_post(this.state));
        }
        else{
            this.props.dispatch(edit_post(this.state));
        }
    }

    render(){
        const {categories} = this.props
        const test = []
        return (
            <div className='container'>
            <div className='header'>
                <h1> add a new post </h1>
            </div>
            <div className='title'>
            <input 
                type = 'text'
                className = 'input-title'
                placeholder = 'Title'
                name = 'title'
                value = {this.state.title}
                onChange = {(event) => this.inputUpdate(event) }
            />
            </div>
            <div className='body'>
            <input 
                type = 'text'
                className = 'input-body'
                placeholder = 'body'
                name = 'body'
                value = {this.state.body}
                onChange = {(event) => this.inputUpdate(event) }
            />
            </div>
            <div className='author'>
            <input 
                type = 'text'
                className = 'input-author'
                placeholder = 'author'
                name = 'author'
                value = {this.state.author}
                onChange = {(event) => this.inputUpdate(event) }
            />
            </div>
            <div className='category'>
            <select 
                type = 'text'
                className = 'input-category'
                placeholder = 'author'
                name = 'author'
                value = {this.state.category}
                onChange = {(event) => this.inputUpdate(event)} >
                {
                    categories.map((category) => (
                      <option key={category.path} value={category.path}>{category.name}</option>
                ))}
            </select>
            </div>
            <div className='save'>
            <Link 
                className = 'btn-save'
                type = 'button'
                onClick = {() => this.onClickSubmit()}
                to = '/'
            > Save </Link>
            </div>
            </div>
        )
    }
}

function mapStateToProps ({ categories }) { 
    return {
      categories
    }
  }
  export default connect(mapStateToProps)(PostForm)