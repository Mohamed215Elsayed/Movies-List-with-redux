import { createStore ,applyMiddleware,compose  } from 'redux';//applyMiddleware
// import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer } from '../reducer/movieReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import  {thunk}  from 'redux-thunk';

const enhancer = compose(
    applyMiddleware(thunk),
    composeWithDevTools()
  );
  export const store = createStore(moviesReducer, enhancer);
