import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import reducers from '../reducers';
import auth from './auth';

export default createStore(
  reducers,
  { auth },
  applyMiddleware(thunkMiddleware)
);
