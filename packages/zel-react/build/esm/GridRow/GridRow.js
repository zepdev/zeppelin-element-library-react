import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function GridRow(_ref) {
  var children = _ref.children,
      classNameProp = _ref.className,
      align = _ref.align,
      other = _objectWithoutProperties(_ref, ["children", "className", "align"]);

  var className = clsx('zep-grid__row', align !== undefined && "zep-grid__row--align-items-".concat(align), classNameProp);
  return React.createElement("div", _extends({
    className: className
  }, other), children);
}

process.env.NODE_ENV !== "production" ? GridRow.propTypes = {
  children: PropTypes.array,
  align: PropTypes.oneOf(['stretch', 'flex-end', 'center', 'flex-start', 'baseline'])
} : void 0;
GridRow.defaultProps = {
  align: 'stretch'
};
export default GridRow;