import { createStore, compose, applyMiddleware  } from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const preloadedState = {}

const store = createStore(
  reducer, preloadedState,
  composeEnhancer(applyMiddleware(thunk)),
);

export default store;