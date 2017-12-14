import React, { Component } from 'react';
import './App.css';
import {Route, withRouter, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Root from './Root'
import PostList from './PostList'
import CommentList from './CommentList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path={`/addPost`} component={PostList} />
          <Route exact path = {`/editPost`} component={PostList} />
          <Route exact path = {`/addComment`} component={CommentList} />
          <Route exact path = {`/editComment`} component={CommentList} />
          <Route path = {`/:category?`} component={Root} />
          <Route exact path = {`/:category:id`} component={PostList} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(App));
