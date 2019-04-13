import { AUTH } from '../constants';

let defaultState;
let session = localStorage.getItem(AUTH.STORAGE.SESSION);
if (session) {
  session = JSON.parse(session);
  const isExpired = new Date(session.expiry).getTime() < new Date().getTime();

  if (isExpired) {
    localStorage.removeItem(AUTH.STORAGE.SESSION);
  } else {
    defaultState = {
      hasRedirected: true,
      isAuthenticated: true,
      session,
    };
  }
}
const exported = defaultState;

export default exported;
