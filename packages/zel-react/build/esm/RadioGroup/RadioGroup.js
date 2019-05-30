import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

var RadioGroup = function RadioGroup(_ref) {
  var title = _ref.title,
      children = _ref.children,
      classNameProp = _ref.className,
      classNameLegend = _ref.classNameLegend,
      other = _objectWithoutProperties(_ref, ["title", "children", "className", "classNameLegend"]);

  return React.createElement("fieldset", _extends({
    role: "group",
    "aria-labelledby": "radio_".concat(title),
    className: clsx('zep-typo--normal-3', classNameProp)
  }, other), React.createElement("legend", {
    id: "radio_".concat(title),
    className: classNameLegend
  }, title), children);
};

process.env.NODE_ENV !== "production" ? RadioGroup.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.array.isRequired,
  classNameLegend: PropTypes.string
} : void 0;
export default RadioGroup;