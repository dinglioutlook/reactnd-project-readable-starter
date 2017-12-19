import React, { Component } from 'react';
import './App.css';
import {Route, withRouter, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Root from './Root'
import Post from './Post'
import PostForm from './PostForm'
import Comment from './Comment'
import {NotFoundPage} from './NotFoundPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={`/addPost`} component={PostForm} />
          <Route exact path = {`/editPost`} component={PostForm} />
          <Route exact path = {`/addComment`} component={Comment} />
          <Route exact path = {`/editComment`} component={Comment} />
          <Route exact path = {`/:category?`} component={Root} />
          <Route exact path = {`/:category/:id`} component={Post} />
          <Route component = {NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));
