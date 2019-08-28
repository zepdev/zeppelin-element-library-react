import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function IconButton(_ref) {
  var classNameProp = _ref.className,
      childrenProp = _ref.children,
      variant = _ref.variant,
      other = _objectWithoutProperties(_ref, ["className", "children", "variant"]);

  var children = childrenProp ? React.cloneElement(childrenProp, {
    className: clsx('zep-button__icon', childrenProp.props.className)
  }) : null;
  return React.createElement("button", _extends({
    className: clsx('zep-button zep-button-icon', variant === 'primary' && 'zep-button-primary', variant === 'secondary' && 'zep-button-secondary', classNameProp)
  }, other), children);
}

process.env.NODE_ENV !== "production" ? IconButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  children: PropTypes.object.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary'])
} : void 0;
export default IconButton;