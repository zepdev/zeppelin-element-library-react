import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const RadioGroup = ({
  title,
  children,
  className: classNameProp,
  classNameLegend
}) => {
  return React.createElement("fieldset", {
    role: "group",
    "aria-labelledby": `radio_${title}`,
    className: clsx('zep-typo--normal-3', classNameProp)
  }, React.createElement("legend", {
    id: `radio_${title}`,
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