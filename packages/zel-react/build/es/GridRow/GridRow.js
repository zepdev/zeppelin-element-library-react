import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function GridRow({
  children,
  className: classNameProp,
  align
}) {
  const className = clsx('zep-grid__row', align !== undefined && `zep-grid__row--align-items-${align}`, classNameProp);
  return React.createElement("div", {
    className: className
  }, children);
}

process.env.NODE_ENV !== "production" ? GridRow.propTypes = {
  children: PropTypes.array,
  align: PropTypes.oneOf(['stretch', 'flex-end', 'center', 'flex-start', 'baseline'])
} : void 0;
GridRow.defaultProps = {
  align: 'stretch'
};
export default GridRow;