import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from './login.component';
import actions from '../../redux/actions';

const { authAction } = actions;

function mapStateToProps(state) {
  const { auth } = state;

  return { auth };
}

const mapDispatchToProps = dispatch => {
  const creators = bindActionCreators(
    { redirect: authAction.redirect },
    dispatch
  );

  return creators;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
