import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, withRouter, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Root from './Root'
import PostForm from './PostForm'
import CommentForm from './CommentForm'
import PostList from './PostList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={`/addPost`} component={PostForm} />
          <Route exact path = {`/editPost`} component={PostForm} />
          <Route exact path = {`/addComment`} component={CommentForm} />
          <Route exact path = {`/editComment`} component={CommentForm} />
          <Route path = {`/:category?`} component={Root} />
          <Route exact path = {`/:category:id`} component={PostList} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));
