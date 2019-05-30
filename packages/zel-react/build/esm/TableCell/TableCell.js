import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function TableCell(_ref) {
  var children = _ref.children,
      component = _ref.component,
      classNameProp = _ref.className,
      other = _objectWithoutProperties(_ref, ["children", "component", "className"]);

  var Component = component || 'td';
  return React.createElement(Component, _extends({
    className: clsx('zep-table__cell', classNameProp)
  }, other), children);
}

process.env.NODE_ENV !== "production" ? TableCell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  className: PropTypes.string,
  component: PropTypes.oneOf(['th', 'td'])
} : void 0;
export default TableCell;