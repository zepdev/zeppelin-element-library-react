import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function GridContainer({ className: classNameProp, children, ...other }) {
  return (
    <div className={clsx('zep-grid', classNameProp)} {...other}>
      {children}
    </div>
  );
}

GridContainer.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.any.isRequired
};

export default GridContainer;
