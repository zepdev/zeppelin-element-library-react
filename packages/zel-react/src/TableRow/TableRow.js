import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function TableRow({ children, color, className: classNameProp, ...other }) {
  const className = clsx(
    'zep-table__row',
    {
      'zep-table__row--white': color === 'white',
      'zep-table__row--gray': color === 'gray'
    },
    classNameProp
  );

  return (
    <tr className={className} {...other}>
      {children}
    </tr>
  );
}

TableRow.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object
  ]),
  color: PropTypes.oneOf(['white', 'gray']),
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

TableRow.defaultProps = {
  color: 'white'
};

export default TableRow;
