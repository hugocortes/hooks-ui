import { AUTH } from '../constants';

const defaultState = {};
let session = localStorage.getItem(AUTH.STORAGE.SESSION);
if (session) {
  session = JSON.parse(session);
  const isExpired = new Date(session.expiry).getTime() < new Date().getTime();

  if (isExpired) {
    localStorage.removeItem(AUTH.STORAGE.SESSION);
  } else {
    defaultState.hasRedirected = true;
    defaultState.isAuthenticated = true;
    defaultState.session = session;
  }
}

export default defaultState;
