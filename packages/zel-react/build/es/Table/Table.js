import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Table({
  children,
  title,
  className: classNameProp
}) {
  return React.createElement("table", {
    className: clsx('zep-table', classNameProp)
  }, React.createElement("caption", {
    className: "zep-visually-hidden"
  }, title), children);
}

process.env.NODE_ENV !== "production" ? Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  title: PropTypes.string.isRequired,
  className: PropTypes.string
} : void 0;
export default Table;