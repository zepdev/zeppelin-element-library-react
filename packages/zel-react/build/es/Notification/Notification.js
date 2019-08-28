import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Notification = (_ref) => {
  let {
    className: classNameProp,
    children,
    variant
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["className", "children", "variant"]);

  return React.createElement("div", _extends({
    className: clsx('zep-notification', variant !== null && `zep-notification--${variant}`, classNameProp)
  }, other), children);
};

process.env.NODE_ENV !== "production" ? Notification.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(['success', 'info', 'warning', 'danger'])
} : void 0;
export default Notification;