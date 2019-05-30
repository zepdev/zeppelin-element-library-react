import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ZepiconsClose from '@zlab-de/zel-react-icons/ZepiconsClose';

var _ref2 = React.createElement(ZepiconsClose, {
  className: "zep-tag__icon"
});

var Tag = function Tag(_ref) {
  var classNameProp = _ref.className,
      children = _ref.children,
      onClose = _ref.onClose,
      other = _objectWithoutProperties(_ref, ["className", "children", "onClose"]);

  return React.createElement("span", _extends({
    className: clsx(classNameProp, 'zep-tag')
  }, other), children, React.createElement("button", {
    onClose: onClose,
    "aria-label": "close",
    className: "zep-tag__button"
  }, _ref2));
};

process.env.NODE_ENV !== "production" ? Tag.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.string
} : void 0;
export default Tag;