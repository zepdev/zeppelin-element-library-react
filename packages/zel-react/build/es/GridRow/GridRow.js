import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function GridRow(_ref) {
  let {
    children,
    className: classNameProp,
    align
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["children", "className", "align"]);

  const className = clsx('zep-grid__row', align !== undefined && `zep-grid__row--align-items-${align}`, classNameProp);
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