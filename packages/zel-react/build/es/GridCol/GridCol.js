import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function GridCol(_ref) {
  let {
    children,
    className: classNameProp,
    align,
    xxs,
    xs,
    s,
    m,
    l,
    xl
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["children", "className", "align", "xxs", "xs", "s", "m", "l", "xl"]);

  const className = clsx('zep-grid__col', align !== undefined && `zep-grid__col--align-self-${align}`, xxs !== undefined && `zep-grid__col--xxs-${String(xxs)}-4`, xs !== undefined && `zep-grid__col--xs-${String(xs)}-6`, s !== undefined && `zep-grid__col--s-${String(s)}-6`, m !== undefined && `zep-grid__col--m-${String(m)}-8`, l !== undefined && `zep-grid__col--l-${String(l)}-12`, xl !== undefined && `zep-grid__col--xl-${String(l)}-12`, classNameProp);
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