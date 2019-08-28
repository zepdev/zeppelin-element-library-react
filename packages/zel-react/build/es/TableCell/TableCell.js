import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function TableCell(_ref) {
  let {
    children,
    component,
    className: classNameProp
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["children", "component", "className"]);

  const Component = component || 'td';
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