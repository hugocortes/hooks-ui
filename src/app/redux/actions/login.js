import uuid from 'uuid';
import qs from 'querystring';

import { LOGIN } from '../constants';

function redirectAction() {
  return {
    type: LOGIN.REDIRECT,
    isFetching: true,
    isAuthenticated: false
  }
}

function callbackAction() {
  return {
    type: LOGIN.CALLBACK,
    isFetching: false,
    isAuthenticated: false
  }
}

function authenticateAction(session) {
  return {
    type: LOGIN.SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    session
  }
}

function errorAction(message) {
  return {
    type: LOGIN.FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function redirect() {
  const redirectUri = `${process.env.REACT_APP_HOST_URI}${LOGIN.ENDPOINTS.CALLBACK}`;
  const state = uuid.v4();
  localStorage.setItem('state', state);

  const query = {
    state,
    redirect_uri: redirectUri
  };

  const url = `${process.env.REACT_APP_API_URI}${LOGIN.ENDPOINTS.OAUTH}?${qs.stringify(query)}`;

  window.location.assign(url);
  return redirectAction();
}

export function authenticateCallback() {

}
