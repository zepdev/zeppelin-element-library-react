import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function GridRow({ children, className: classNameProp, align, ...other }) {
  const className = clsx(
    'zep-grid__row',
    {
      [`zep-grid__row--align-items-${align}`]: align !== undefined
    },
    classNameProp
  );

  return (
    <div className={className} {...other}>
      {children}
    </div>
  );
}

GridRow.propTypes = {
  children: PropTypes.array,
  align: PropTypes.oneOf([
    'stretch',
    'flex-end',
    'center',
    'flex-start',
    'baseline'
  ])
};

GridRow.defaultProps = {
  align: 'stretch'
};

export default GridRow;
