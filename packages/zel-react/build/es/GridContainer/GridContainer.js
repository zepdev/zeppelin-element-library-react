import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function GridContainer(_ref) {
  let {
    className: classNameProp,
    children
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["className", "children"]);

  return React.createElement("div", _extends({
    className: clsx('zep-grid', classNameProp)
  }, other), children);
}

process.env.NODE_ENV !== "production" ? GridContainer.propTypes = {
  className: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  children: PropTypes.any.isRequired
} : void 0;
export default GridContainer;