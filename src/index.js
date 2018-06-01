import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk'

import App from './components/app';
import reducers from './reducers';
import rootReducer from './reducers'

// const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const store = createStore(
  rootReducer,
  applyMiddleware(ReduxPromise, thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
