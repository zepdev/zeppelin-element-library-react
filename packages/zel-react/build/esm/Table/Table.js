import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Table(_ref) {
  var children = _ref.children,
      title = _ref.title,
      classNameProp = _ref.className;
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