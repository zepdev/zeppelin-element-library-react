import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Button({
  children: childrenProp,
  className: classNameProp,
  onClick,
  variant,
  disabled,
  fullWidth,
  size,
  ...other
}) {
  const className = clsx(
    'zep-button',
    {
      'zep-button-primary': variant === 'primary',
      'zep-button-secondary': variant === 'secondary',
      'zep-button-tertiary': variant === 'tertiary',
      'zep-button--full': fullWidth,
      'zep-button--small': size === 'small',
      'zep-button--medium': size === 'medium',
    },
    classNameProp,
  );

  const isString = typeof childrenProp === 'string';
  const childrenIcon = isString ? null : childrenProp.filter(elem => typeof elem !== 'string')[0];
  const childrenIconTertiary = childrenIcon
    ? React.cloneElement(childrenIcon, {
        className: clsx(
          'zep-button__icon zep-button__icon--tertiary',
          childrenIcon.props.className,
        ),
      })
    : null;
  const childrenText = isString
    ? childrenProp
    : childrenProp.filter(elem => typeof elem === 'string');

  return variant === 'tertiary' ? (
    <button
      className={className}
      disabled={disabled}
      onClick={disabled ? null : onClick}
      {...other}
    >
      {childrenIconTertiary}
      <span className="zep-button__text--tertiary">{childrenText}</span>
    </button>
  ) : (
    <button
      className={className}
      disabled={disabled}
      onClick={disabled ? null : onClick}
      {...other}
    >
      {childrenText}
    </button>
  );
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Button.defaultProps = {
  fullWidth: false,
  disabled: false,
  size: 'large',
};

export default Button;
