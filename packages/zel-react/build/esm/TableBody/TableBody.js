import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';

function TableBody(_ref) {
  var children = _ref.children,
      classNameProp = _ref.className,
      other = _objectWithoutProperties(_ref, ["children", "className"]);

  return React.createElement("tbody", _extends({
    className: classNameProp
  }, other), children);
}

process.env.NODE_ENV !== "production" ? TableBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  className: PropTypes.string
} : void 0;
export default TableBody;