import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function TableRow(_ref) {
  let {
    children,
    color,
    className: classNameProp
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["children", "color", "className"]);

  const className = clsx('zep-table__row', color === 'white' && 'zep-table__row--white', color === 'gray' && 'zep-table__row--gray', classNameProp);
  return React.createElement("tr", _extends({
    className: className
  }, other), children);
}

process.env.NODE_ENV !== "production" ? TableRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  color: PropTypes.oneOf(['white', 'gray']),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
} : void 0;
TableRow.defaultProps = {
  color: 'white'
};
export default TableRow;