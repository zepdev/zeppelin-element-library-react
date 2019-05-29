import React from 'react';
import PropTypes from 'prop-types';

function TableBody(_ref) {
  var children = _ref.children,
      classNameProp = _ref.className;
  return React.createElement("tbody", {
    className: classNameProp
  }, children);
}

process.env.NODE_ENV !== "production" ? TableBody.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.array, PropTypes.object]),
  className: PropTypes.string
} : void 0;
export default TableBody;