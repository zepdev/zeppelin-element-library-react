import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function GridCol(_ref) {
  var children = _ref.children,
      classNameProp = _ref.className,
      align = _ref.align,
      xxs = _ref.xxs,
      xs = _ref.xs,
      s = _ref.s,
      m = _ref.m,
      l = _ref.l,
      xl = _ref.xl,
      other = _objectWithoutProperties(_ref, ["children", "className", "align", "xxs", "xs", "s", "m", "l", "xl"]);

  var className = clsx('zep-grid__col', align !== undefined && "zep-grid__col--align-self-".concat(align), xxs !== undefined && "zep-grid__col--xxs-".concat(String(xxs), "-4"), xs !== undefined && "zep-grid__col--xs-".concat(String(xs), "-6"), s !== undefined && "zep-grid__col--s-".concat(String(s), "-6"), m !== undefined && "zep-grid__col--m-".concat(String(m), "-8"), l !== undefined && "zep-grid__col--l-".concat(String(l), "-12"), xl !== undefined && "zep-grid__col--xl-".concat(String(l), "-12"), classNameProp);
  return React.createElement("div", _extends({
    className: className
  }, other), children);
}

process.env.NODE_ENV !== "production" ? GridCol.propTypes = {
  align: PropTypes.oneOf(['stretch', 'flex-end', 'center', 'flex-start', 'baseline']),
  xxs: PropTypes.oneOf([1, 2, 3, 4]),
  xs: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  s: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  m: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
  l: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  xl: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
} : void 0;
export default GridCol;