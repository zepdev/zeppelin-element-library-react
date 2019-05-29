import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function GridContainer({
  className: classNameProp,
  children
}) {
  return React.createElement("div", {
    className: clsx('zep-grid', classNameProp)
  }, children);
}

process.env.NODE_ENV !== "production" ? GridContainer.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
} : void 0;
export default GridContainer;