import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Table(_ref) {
  let {
    children,
    title,
    className: classNameProp
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["children", "title", "className"]);

  return React.createElement("table", _extends({
    className: clsx('zep-table', classNameProp)
  }, other), React.createElement("caption", {
    className: "zep-visually-hidden"
  }, title), children);
}

process.env.NODE_ENV !== "production" ? Table.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  title: PropTypes.string.isRequired,
  className: PropTypes.string
} : void 0;
export default Table;