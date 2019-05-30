import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function TableCell({
  children,
  component,
  className: classNameProp,
  ...other
}) {
  const Component = component || 'td';
  return (
    <Component className={clsx('zep-table__cell', classNameProp)} {...other}>
      {children}
    </Component>
  );
}

TableCell.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]),
  className: PropTypes.string,
  component: PropTypes.oneOf(['th', 'td'])
};

export default TableCell;
