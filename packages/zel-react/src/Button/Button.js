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
      'zep-button--small': size === 'small'
    },
    classNameProp
  );

  const isString = typeof childrenProp === 'string';
  const childrenIcon = isString
    ? null
    : childrenProp.filter(elem => typeof elem !== 'string')[0];
  const childrenIconTertiary = childrenIcon
    ? React.cloneElement(childrenIcon, {
        className: clsx(
          'zep-button__icon zep-button__icon--tertiary',
          childrenIcon.props.className
        )
      })
    : null;
  const childrenText = isString
    ? childrenProp
    : childrenProp.filter(elem => typeof elem === 'string');

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={disabled ? null : onClick}
      {...other}
    >
      {variant === 'tertiary' && childrenIconTertiary}
      <span
        className={clsx('zep-button__text', {
          'zep-button__text--tertiary': variant === 'tertiary'
        })}
      >
        {childrenText}
      </span>
    </button>
  );
}

Button.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'large'])
};

Button.defaultProps = {
  fullWidth: false,
  disabled: false,
  size: 'large'
};

export default Button;
