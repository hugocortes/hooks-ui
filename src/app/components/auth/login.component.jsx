import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Button from '../button/button.component';
import history from '../../common/history';

import './login.scss';

class Login extends Component {
  constructor(...args) {
    super(...args);
    this.redirect = this.redirect.bind(this);
  }

  static get propTypes() {
    return {
      location: PropTypes.shape({
        search: PropTypes.string,
      }).isRequired,
      auth: PropTypes.shape({
        isAuthenticated: PropTypes.bool.isRequired,
        redirectURI: PropTypes.string,
      }).isRequired,
      redirect: PropTypes.func.isRequired,
    };
  }

  async componentWillMount() {
    const {
      redirect,
      auth: { isAuthenticated },
    } = this.props;
    if (isAuthenticated) {
      return history.replace('');
    }

    await redirect();

    return true;
  }

  async redirect() {
    const {
      auth: { redirectURI },
    } = this.props;

    window.location.assign(redirectURI);
  }

  render() {
    return (
      <div className="login">
        <div className="login-button">
          <Button.Primary
            text="Login"
            onClick={this.redirect}
            type="submit"
            disabled={false}
            buttonSize={Button.SIZES.LARGE}
          />
        </div>
      </div>
    );
  }
}

export default Login;
