import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Button(_ref) {
  let {
    children: childrenProp,
    className: classNameProp,
    onClick,
    variant,
    disabled,
    fullWidth,
    size
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["children", "className", "onClick", "variant", "disabled", "fullWidth", "size"]);

  const className = clsx('zep-button', variant === 'primary' && 'zep-button-primary', variant === 'secondary' && 'zep-button-secondary', variant === 'tertiary' && 'zep-button-tertiary', fullWidth && 'zep-button--full', size === 'small' && 'zep-button--small', classNameProp);
  const isString = typeof childrenProp === 'string';
  const childrenIcon = isString ? null : childrenProp.filter(elem => typeof elem !== 'string')[0];
  const childrenIconTertiary = childrenIcon ? React.cloneElement(childrenIcon, {
    className: clsx('zep-button__icon zep-button__icon--tertiary', childrenIcon.props.className)
  }) : null;
  const childrenText = isString ? childrenProp : childrenProp.filter(elem => typeof elem === 'string');
  return React.createElement("button", _extends({
    className: className,
    disabled: disabled,
    onClick: disabled ? null : onClick
  }, other), variant === 'tertiary' && childrenIconTertiary, React.createElement("span", {
    className: clsx('zep-button__text', variant === 'tertiary' && 'zep-button__text--tertiary')
  }, childrenText));
}

process.env.NODE_ENV !== "production" ? Button.propTypes = {
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'large'])
} : void 0;
Button.defaultProps = {
  fullWidth: false,
  disabled: false,
  size: 'large'
};
export default Button;