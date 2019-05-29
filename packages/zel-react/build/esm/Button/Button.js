import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Button(_ref) {
  var childrenProp = _ref.children,
      classNameProp = _ref.className,
      onClick = _ref.onClick,
      variant = _ref.variant,
      disabled = _ref.disabled,
      fullWidth = _ref.fullWidth,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["children", "className", "onClick", "variant", "disabled", "fullWidth", "size"]);

  var className = clsx('zep-button', variant === 'primary' && 'zep-button-primary', variant === 'secondary' && 'zep-button-secondary', variant === 'tertiary' && 'zep-button-tertiary', fullWidth && 'zep-button--full', size === 'small' && 'zep-button--small', classNameProp);
  var isString = typeof childrenProp === 'string';
  var childrenIcon = isString ? null : childrenProp.filter(function (elem) {
    return typeof elem !== 'string';
  })[0];
  var childrenIconTertiary = childrenIcon ? React.cloneElement(childrenIcon, {
    className: clsx('zep-button__icon zep-button__icon--tertiary', childrenIcon.props.className)
  }) : null;
  var childrenText = isString ? childrenProp : childrenProp.filter(function (elem) {
    return typeof elem === 'string';
  });
  return React.createElement("button", _extends({
    className: className,
    disabled: disabled,
    onClick: disabled ? null : onClick
  }, props), variant === 'tertiary' && childrenIconTertiary, React.createElement("span", {
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