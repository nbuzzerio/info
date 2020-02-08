import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/main.js'

import App from './components/App.jsx';

const initialState = {
  breed: {}
}

const store =  createStore(rootReducer, initialState);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('app')
);