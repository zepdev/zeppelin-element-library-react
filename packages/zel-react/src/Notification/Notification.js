import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Notification = ({ className: classNameProp, children }) => {
  return (
    <div
      className={clsx(
        'zep-notification',
        {
          [`zep-notification--${variant}`]: variant !== null
        },
        classNameProp
      )}
    >
      {children}
    </div>
  );
};

Notification.propTypes = {
  className: PropTypes.object,
  children: PropTypes.array,
  variant: PropTypes.oneOf(['success', 'info', 'warning', 'danger'])
};

export default Notification;
