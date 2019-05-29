import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function IconButton(_ref) {
  let {
    className: classNameProp,
    children: childrenProp,
    variant
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["className", "children", "variant"]);

  const children = childrenProp ? React.cloneElement(childrenProp, {
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