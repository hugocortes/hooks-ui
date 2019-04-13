import React from 'react';
import { Button } from 'react-bootstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TYPES = {
  PRIMARY: 'primary',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success',
};

export const SIZES = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
};

const BaseButton = ({
  text,
  onClick,
  type,
  disabled,
  buttonType,
  buttonSize,
}) => (
  <Button
    type={type}
    disabled={disabled}
    onClick={onClick}
    // classnames=(
    //   styles.button,
    //   styles[ buttonType ]
    //   styles[ buttonSize ]
    // )
  >
    {text}
  </Button>
);

BaseButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  buttonType: PropTypes.string.isRequired,
  buttonSize: PropTypes.string,
};

BaseButton.defaultProps = {
  text: '',
  buttonSize: SIZES.MEDIUM,
};

export const Primary = props => (
  <BaseButton {...props} buttonType={TYPES.PRIMARY} />
);
export const Warning = props => (
  <BaseButton {...props} buttonType={TYPES.WARNING} />
);
export const Danger = props => (
  <BaseButton {...props} buttonType={TYPES.DANGER} />
);
export const Success = props => (
  <BaseButton {...props} buttonType={TYPES.SUCCESS} />
);
