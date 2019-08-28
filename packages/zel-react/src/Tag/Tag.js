import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ZepiconsClose from '@zlab-de/zel-react-icons/ZepiconsClose';

const Tag = ({ className: classNameProp, children, onClose, ...other }) => {
  return (
    <span className={clsx(classNameProp, 'zep-tag')} {...other}>
      {children}
      <button onClose={onClose} aria-label="close" className="zep-tag__button">
        <ZepiconsClose className="zep-tag__icon" />
      </button>
    </span>
  );
};

Tag.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.string
};

export default Tag;
