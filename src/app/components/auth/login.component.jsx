import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as Button from '../button/button.component';

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
        redirectURI: PropTypes.string,
      }).isRequired,
      redirect: PropTypes.func.isRequired,
    };
  }

  async componentWillMount() {
    const { redirect } = this.props;
    await redirect();
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
        <Button.Primary
          text="Login"
          onClick={this.redirect}
          type="submit"
          disabled={false}
          buttonSize={Button.SIZES.MEDIUM}
        />
      </div>
    );
  }
}

export default Login;
