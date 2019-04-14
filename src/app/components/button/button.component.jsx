import React from 'react';
import { Button } from 'react-bootstrap';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './button.scss';

const TYPES = {
  PRIMARY: 'btn-primary',
  WARNING: 'btn-warning',
  DANGER: 'btn-danger',
  SUCCESS: 'btn-success',
};

export const SIZES = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
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
    size={buttonSize}
    className={classnames('button', buttonType, buttonSize)}
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
