import { AUTH } from './../constants'

let defaultState;
const session = localStorage.getItem(AUTH.STORAGE.SESSION);
if (session) {
  defaultState = {
    hasRedirected: true,
    isAuthenticated: true,
    session: JSON.parse(session)
  };
}

export default defaultState;
