import React, { Component } from 'react';
import qs from 'querystring';
import PropTypes from 'prop-types';

import history from '../../common/history';

class Callback extends Component {
  static get propTypes() {
    return {
      location: PropTypes.shape({
        search: PropTypes.string,
      }).isRequired,
      auth: PropTypes.shape({
        isAuthenticated: PropTypes.bool,
      }).isRequired,
      authenticate: PropTypes.func.isRequired,
    };
  }

  async componentWillMount() {
    const {
      location: { search },
      auth: { isAuthenticated },
      authenticate,
    } = this.props;

    if (isAuthenticated) {
      return history.replace('');
    }

    if (!/state|code/.test(search)) {
      return history.replace('');
    }

    const query = qs.parse(search.replace('?', ''));
    await authenticate({
      code: query.code,
      state: query.state,
    });

    return history.replace('');
  }

  render() {
    return (
      <div className="container">
        <h4>Loading...</h4>
      </div>
    );
  }
}

export default Callback;
