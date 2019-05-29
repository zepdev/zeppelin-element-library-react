import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

var _ref = React.createElement("span", {
  className: "zep-radio__indicator"
});

const Radio = ({
  checked,
  onChange,
  value,
  name,
  label,
  className: classNameProp
}) => {
  return React.createElement("label", {
    className: clsx('zep-radio', classNameProp)
  }, React.createElement("input", {
    type: "radio",
    name: name,
    className: "zep-radio__input",
    value: value,
    checked: checked,
    onChange: onChange
  }), _ref, React.createElement("span", {
    className: "zep-radio__label"
  }, label || name));
};

process.env.NODE_ENV !== "production" ? Radio.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
} : void 0;
export default Radio;