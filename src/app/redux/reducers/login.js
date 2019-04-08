import { LOGIN } from './../constants';

const deafultState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('oauth') ? true : false
};

const reducers = (state = deafultState, action) => {
  switch(action.type) {
    case LOGIN.REDIRECT:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false
      }
    case LOGIN.CALLBACK:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false
      }
    case LOGIN.SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      }
    case LOGIN.FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      }
    default:
      return state;
  }
}

export default reducers;
