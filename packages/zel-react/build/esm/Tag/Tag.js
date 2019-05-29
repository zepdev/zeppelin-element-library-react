import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ZepiconsClose from '@zlab-de/zel-react-icons/ZepiconsClose';

var _ref2 = React.createElement(ZepiconsClose, {
  className: "zep-tag__icons"
});

var Tag = function Tag(_ref) {
  var classNameProp = _ref.className,
      children = _ref.children,
      onClose = _ref.onClose;
  return React.createElement("span", {
    className: clsx(classNameProp, 'zep-tag')
  }, children, React.createElement("button", {
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