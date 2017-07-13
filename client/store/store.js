import { applyMiddleware, createStore, compose } from 'redux';

// Redux middleware that logs actions and state changes.
// import { createLogger } from 'redux-logger';

// Redux middleware that allows to pass functions to dispatch methods.
import thunk from 'redux-thunk';

// Redux middleware that allows to pass promises within the dispatch object.
import promise from 'redux-promise-middleware';

import reducer from '../reducers/index';

/* eslint-disable no-underscore-dangle */
// Used for Redux devtools.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

// const middleware = applyMiddleware(promise(), thunk, createLogger());
const middleware = applyMiddleware(promise(), thunk);
const initialState = {
  map: {
    url: '',
    nodes: [],
    subnodes: [],
    connections: [],
    loading: false,
    fetched: false,
    exploring: false,
    error: undefined,
  },

  message: {
    text: '',
    visible: false,
  },

  search: {
    query: '',
    suggestions: [],
  },

  menu: {
    selected: '',
    theme: 'Grey',
  },

};

export default createStore(reducer, initialState, composeEnhancers(middleware));
