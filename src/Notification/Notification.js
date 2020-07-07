import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Notification = ({ className: classNameProp, children, variant, ...other }) => {
  return (
    <div
      className={clsx(
        'zep-notification',
        {
          [`zep-notification--${variant}`]: variant !== null,
        },
        classNameProp,
      )}
      {...other}
    >
      {children}
    </div>
  );
};

Notification.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  variant: PropTypes.oneOf(['success', 'info', 'warning', 'danger']),
};

export default Notification;
