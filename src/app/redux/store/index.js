import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from './../reducers'
import auth from './auth';

export const store = createStore(
  reducers,
  { auth },
  applyMiddleware(
    thunkMiddleware
  )
)
