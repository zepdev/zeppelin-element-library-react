import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Notification = ({
  className: classNameProp,
  children
}) => {
  return React.createElement("div", {
    className: clsx('zep-notification', variant !== null && `zep-notification--${variant}`, classNameProp)
  }, children);
};

process.env.NODE_ENV !== "production" ? Notification.propTypes = {
  className: PropTypes.object,
  children: PropTypes.array,
  variant: PropTypes.oneOf(['success', 'info', 'warning', 'danger'])
} : void 0;
export default Notification;