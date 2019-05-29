import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

var RadioGroup = function RadioGroup(_ref) {
  var title = _ref.title,
      children = _ref.children,
      classNameProp = _ref.className,
      classNameLegend = _ref.classNameLegend;
  return React.createElement("fieldset", {
    role: "group",
    "aria-labelledby": "radio_".concat(title),
    className: clsx('zep-typo--normal-3', classNameProp)
  }, React.createElement("legend", {
    id: "radio_".concat(title),
    className: classNameLegend
  }, title), children);
};

process.env.NODE_ENV !== "production" ? RadioGroup.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.array,
  classNameLegend: PropTypes.string
} : void 0;
export default RadioGroup;