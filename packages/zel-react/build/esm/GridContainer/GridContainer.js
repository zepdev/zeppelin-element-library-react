import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function GridContainer(_ref) {
  var classNameProp = _ref.className,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ["className", "children"]);

  return React.createElement("div", _extends({
    className: clsx('zep-grid', classNameProp)
  }, other), children);
}

process.env.NODE_ENV !== "production" ? GridContainer.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.any.isRequired
} : void 0;
export default GridContainer;