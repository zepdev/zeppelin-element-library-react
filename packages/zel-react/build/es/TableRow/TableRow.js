import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function TableRow({
  children,
  color,
  className: classNameProp
}) {
  const className = clsx('zep-table__row', color === 'white' && 'zep-table__row--white', color === 'gray' && 'zep-table__row--gray', classNameProp);
  return React.createElement("tr", {
    className: className
  }, children);
}

process.env.NODE_ENV !== "production" ? TableRow.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  color: PropTypes.oneOf(['white', 'gray'])
} : void 0;
TableRow.defaultProps = {
  color: 'white'
};
export default TableRow;