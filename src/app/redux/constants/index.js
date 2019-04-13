const API = process.env.REACT_APP_API_URI;
const HOST = process.env.REACT_APP_HOST_URI;

export const HTTP = {
  HEADERS: {
    FORM: {
      'content-type': 'application/x-www-form-urlencoded'
    }
  }
}

export const AUTH = {
  LOGIN: {
    REDIRECT: 'LOGIN_REDIRECT',
    CALLBACK: 'LOGIN_CALLBACK',
    SUCCESS: 'LOGIN_SUCCESS',
    FAILURE: 'LOGIN_FAILURE'
  },
  LOGOUT: {
    REQUEST: 'LOGOUT_REQUEST',
    SUCCESS: 'LOGOUT_SUCCESS',
    FAILURE: 'LOGOUT_FAILURE' 
  },
  STORAGE: {
    SESSION: 'session',
    STATE: 'state'
  },
  GRANT_TYPES: {
    CODE: 'authorization_code',
    REFRESH: 'refresh_token'
  },
  AUTH_URI: `${API}/oauth/redirect`,
  REDIRECT_URI: `${HOST}/callback`,
  TOKEN_URI: `${API}/oauth/token`
}
