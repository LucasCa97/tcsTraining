import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import {  Provider  } from 'react-redux';
import { taskAdded } from './actions/actions'
import allReducers from './reducers/index'

const store = createStore(allReducers)
store.dispatch(taskAdded())


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

