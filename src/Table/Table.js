import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Table({ children, title, className: classNameProp, ...other }) {
  return (
    <table className={clsx('zep-table', classNameProp)} {...other}>
      <caption className="zep-visually-hidden">{title}</caption>
      {children}
    </table>
  );
}

Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  title: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Table;
