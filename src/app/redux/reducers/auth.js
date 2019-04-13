import { AUTH } from '../constants';

const deafultState = {
  hasRedirected: false,
  isAuthenticated: false,
};

export default (state = deafultState, action) => {
  switch (action.type) {
    case AUTH.LOGIN.REDIRECT:
      return {
        ...state,
        hasRedirected: false,
        isAuthenticated: false,
        redirectURI: action.redirectURI,
      };
    case AUTH.LOGIN.CALLBACK:
      return {
        ...state,
        hasRedirected: true,
        isAuthenticated: false,
      };
    case AUTH.LOGIN.SUCCESS:
      return {
        ...state,
        hasRedirected: true,
        isAuthenticated: true,
        session: action.session,
      };
    case AUTH.LOGIN.FAILURE:
      return {
        ...state,
        hasRedirected: true,
        isAuthenticated: false,
        errorMessage: action.message,
      };
    default:
      return state;
  }
};
