import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import booksReducer from './books/books';
// import spinnerReducer from '../spinner';

const reducer = combineReducers({
  booksReducer,

});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
