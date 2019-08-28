import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

var Notification = function Notification(_ref) {
  var classNameProp = _ref.className,
      children = _ref.children,
      variant = _ref.variant,
      other = _objectWithoutProperties(_ref, ["className", "children", "variant"]);

  return React.createElement("div", _extends({
    className: clsx('zep-notification', variant !== null && "zep-notification--".concat(variant), classNameProp)
  }, other), children);
};

process.env.NODE_ENV !== "production" ? Notification.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  variant: PropTypes.oneOf(['success', 'info', 'warning', 'danger'])
} : void 0;
export default Notification;