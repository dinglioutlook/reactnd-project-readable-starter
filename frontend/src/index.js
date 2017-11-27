import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers'
import {BroeserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { get_categories } from './actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
      applyMiddleware(thunk)
    )
  )

// init at first load  
store.dispatch(get_categories())

ReactDOM.render(
  <Provider store = {store}> 
    <BrowserRouter> 
      <App /> 
    </BrowserRouter> 
  </Provider>, 
  document.getElementById('root')
);

registerServiceWorker();
