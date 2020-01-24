import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Tag = ({ className: classNameProp, children, onClose, ...other }) => {
  return (
    <span className={clsx(classNameProp, 'zep-tag')} {...other}>
      {children}
      <button onClose={onClose} aria-label="close" className="zep-tag__button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          className="zep-tag__icon"
        >
          <title>zepicons-close</title>
          <path d="M25.333 8.547l-1.88-1.88-7.453 7.453-7.453-7.453-1.88 1.88 7.453 7.453-7.453 7.453 1.88 1.88 7.453-7.453 7.453 7.453 1.88-1.88-7.453-7.453z" />
        </svg>
      </button>
    </span>
  );
};

Tag.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.string,
};

export default Tag;
