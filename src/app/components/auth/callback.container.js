import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Callback from './callback.component';
import actions from '../../redux/actions';

const { authAction } = actions;

function mapStateToProps(state) {
  const { auth } = state;

  return { auth };
}

const mapDispatchToProps = dispatch => {
  const creators = bindActionCreators(
    { authenticate: authAction.authenticate },
    dispatch
  );

  return creators;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback);
