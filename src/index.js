import React from 'react'
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combineReducers from './reducers';
import App from './components/app';




ReactDOM.render(
  <Provider store={createStore(combineReducers)}>
    <App />
  </Provider>, document.getElementById('root'));