import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const RadioGroup = (_ref) => {
  let {
    title,
    children,
    className: classNameProp,
    classNameLegend
  } = _ref,
      other = _objectWithoutPropertiesLoose(_ref, ["title", "children", "className", "classNameLegend"]);

  return React.createElement("fieldset", _extends({
    role: "group",
    "aria-labelledby": `radio_${title}`,
    className: clsx('zep-typo--normal-body1', classNameProp)
  }, other), React.createElement("legend", {
    id: `radio_${title}`,
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