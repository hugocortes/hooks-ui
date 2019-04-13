import uuid from 'uuid';
import qs from 'querystring';
import superagent from 'superagent';

import { AUTH, HTTP } from '../constants';

function redirectAction(redirectURI) {
  return {
    type: AUTH.LOGIN.REDIRECT,
    redirectURI,
  };
}

function authenticatedAction(session) {
  return {
    type: AUTH.LOGIN.SUCCESS,
    session,
  };
}

function errorAction(message) {
  return {
    type: AUTH.LOGIN.FAILURE,
    message,
  };
}

export function redirect() {
  return dispatch => {
    const state = uuid.v4();
    localStorage.setItem(AUTH.STORAGE.STATE, state);

    const query = {
      state,
      redirect_uri: AUTH.REDIRECT_URI,
    };
    const url = `${AUTH.AUTH_URI}?${qs.stringify(query)}`;

    return dispatch(redirectAction(url));
  };
}

export function authenticateAction(payload) {
  return async dispatch => {
    try {
      const state = localStorage.getItem(AUTH.STORAGE.STATE);
      if (state !== payload.state) {
        throw new Error('Failed to authenticate');
      }

      const { body: session } = await superagent('POST', AUTH.TOKEN_URI)
        .set({ ...HTTP.HEADERS.FORM })
        .send({
          code: payload.code,
          redirect_uri: AUTH.REDIRECT_URI,
          grant_type: AUTH.GRANT_TYPES.CODE,
        });

      localStorage.setItem(AUTH.STORAGE.SESSION, JSON.stringify(session));
      localStorage.removeItem(AUTH.STORAGE.STATE);
      return dispatch(authenticatedAction(session));
    } catch (error) {
      return dispatch(errorAction('Failed to authenticate'));
    }
  };
}
